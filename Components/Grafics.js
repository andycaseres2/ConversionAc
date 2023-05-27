"use client";
import React, { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect";
import ButtonSwitch from "./ButtonSwitch";
import { currencyFetch } from "@services/currencyFetch";
import Button from "./Button";
import { RiErrorWarningLine } from "react-icons/ri";
import { graficsFetch } from "@services/graficsFetch";

const Grafics = () => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setselectedCurrency] = useState("");
  const [grafics, setGrafics] = useState("");
  console.log(grafics);

  useEffect(() => {
    currencyFetch().then(setCurrencies);
  }, []);

  const handleGrafics = () => {
    if (selectedCurrency !== "") {
      graficsFetch(selectedCurrency).then(setGrafics);
    }
  };

  const resultArr = [];

  for (let date in grafics.rates) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    const entry = { date: formattedDate };
    for (let currency in grafics.rates[date]) {
      entry[currency] = Math.round(grafics.rates[date][currency] * 10000);
    }
    resultArr.push(entry);
  }
  console.log("NewFormate", resultArr);
  return (
    <div className="w-full xl:w-11/12 2xl:w-9/12 h-max lg:h-[650px] flex flex-col justify-start items-center shadow-2xl rounded-2xl lg:p-10 lg:mt-4 relative bg-[#515151] ">
      <div className="w-full flex justify-center items-center pt-2 pb-2">
        <h1 className="text-4xl font-bold text-white">Grafics</h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center px-20 py-2 lg:gap-6 xl:gap-12">
        <CurrencySelect
          currencies={currencies}
          text={"Currency"}
          setSelectedCurrency={setselectedCurrency}
          selectValue={selectedCurrency}
        />
      </div>
      <div className="w-full flex justify-between py-4 items-center absolute bottom-2 px-20 ">
        <div className="w-max h-max flex justify-center items-center gap-3 px-4 py-2 bg-[#686868] rounded-lg">
          <RiErrorWarningLine size={20} className="text-[#B7B7B7]" />
          <p className="font-light text-[#B7B7B7] text-md">
            Usamos la tasa del mercado medio para nuestro conversor. Esto solo
            tiene fines informativos.
          </p>
        </div>
        <Button action={handleGrafics} text={"Grafics"} />
      </div>
    </div>
  );
};

export default Grafics;
