"use client";
import React, { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect";
import { currencyFetch } from "@services/currencyFetch";
import Button from "./Button";
import { RiErrorWarningLine } from "react-icons/ri";
import { chartsFetch } from "@services/chartsFetch";
import Chart from "./Chart";

const Charts = () => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setselectedCurrency] = useState("");
  const [charts, setCharts] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [previousDate, setPreviousDate] = useState("");

  useEffect(() => {
    currencyFetch().then(setCurrencies);
  }, []);

  const handleGrafics = () => {
    if (selectedCurrency !== "") {
      chartsFetch(selectedCurrency, previousDate).then(setCharts);
    }
  };

  useEffect(() => {
    const today = new Date();
    const oneYearAgo = new Date(
      today.getFullYear() - 1,
      today.getMonth(),
      today.getDate()
    );
    const yyyy = oneYearAgo.getFullYear().toString().padStart(4, "0");
    const mm = (oneYearAgo.getMonth() + 1).toString().padStart(2, "0");
    const dd = oneYearAgo.getDate().toString().padStart(2, "0");

    let formattedDate = new Date()
      .toLocaleDateString()
      .split("/")
      .reverse()
      .join("-");

    setPreviousDate(`${yyyy}-${mm}-${dd}`);
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    setCharts("");
  }, [selectedCurrency]);

  const resultArr = [];

  for (let date in charts.rates) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    const entry = { date: formattedDate };
    for (let currency in charts.rates[date]) {
      const value = charts.rates[date][currency].toString();
      entry[currency] = value;
    }
    resultArr.push(entry);
  }

  const resultArrNEW = resultArr.sort((a, b) => {
    const dateA = new Date(`2021 ${a.date}`);
    const dateB = new Date(`2021 ${b.date}`);

    return dateA - dateB;
  });

  const newArray = resultArrNEW.reduce((acc, obj) => {
    const month = obj.date.split(" ")[0];
    if (!acc.some((item) => item.date.startsWith(month))) {
      acc.push(obj);
    }
    return acc;
  }, []);

  return (
    <div className="w-full xl:w-11/12 2xl:w-9/12 flex flex-col justify-start items-center shadow-2xl rounded-2xl lg:p-10 lg:mt-4 relative bg-[#515151] py-8">
      <div className="w-full flex justify-center items-center pt-2 pb-2">
        <h1 className="text-4xl font-bold text-white">Charts</h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center px-5 lg:px-20 py-2 lg:gap-6 xl:gap-12">
        <CurrencySelect
          currencies={currencies}
          text={"Currency"}
          setSelectedCurrency={setselectedCurrency}
          selectValue={selectedCurrency}
        />
      </div>
      {charts && (
        <div className="w-full flex py-8 px-4 lg:px-0">
          <Chart
            data={newArray}
            selectedCurrency={selectedCurrency}
            previousDate={previousDate}
            currentDate={currentDate}
          />
        </div>
      )}
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center px-10 gap-4 lg:gap-0">
        <div className="w-full lg:w-max h-max flex justify-center items-center gap-3 px-4 py-2 bg-[#686868] rounded-lg">
          <RiErrorWarningLine size={20} className="text-[#B7B7B7]" />
          <p className="font-light text-[#B7B7B7] text-xs lg:text-md">
            We use the mid-market rate for our chart. This just is for
            informational purposes.
          </p>
        </div>
        <Button action={handleGrafics} text={"Charts"} />
      </div>
    </div>
  );
};

export default Charts;
