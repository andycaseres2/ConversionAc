"use client";
import { useEffect, useState } from "react";
import AmountInput from "../Components/AmountInput";
import { currencyFetch } from "@services/currencyFetch";
import CurrencySelect from "../Components/CurrencySelect";
import Button from "../Components/Button";
import ButtonSwitch from "../Components/ButtonSwitch";
import { converterFetch } from "@services/converterFetch";
import { RiErrorWarningLine } from "react-icons/ri";
import Results from "./Results";

const Conversion = () => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState("");
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState("");
  const [amount, setAmount] = useState("");
  const [converter, setConverter] = useState("");
  const [converterReverse, setConverterReverse] = useState("");
  const [valueNameFrom, setValueNameFrom] = useState("");
  const [valueNameTo, setValueNameTo] = useState("");
  const [shouldClick, setShouldClick] = useState(false);

  let amountReplace = amount.replace("$", "");
  useEffect(() => {
    let valueFrom = currencies[selectedCurrencyFrom];
    let valueTo = currencies[selectedCurrencyTo];
    currencyFetch().then(setCurrencies);
    setValueNameFrom(valueFrom);
    setValueNameTo(valueTo);
  }, [selectedCurrencyFrom, selectedCurrencyTo]);

  const handleConverter = () => {
    if (
      selectedCurrencyFrom !== "" &&
      selectedCurrencyTo !== "" &&
      amountReplace !== ""
    ) {
      converterFetch(
        amountReplace,
        selectedCurrencyFrom,
        selectedCurrencyTo
      ).then(setConverter);
    }
    if (
      selectedCurrencyFrom !== "" &&
      selectedCurrencyTo !== "" &&
      amountReplace !== ""
    ) {
      converterFetch(
        amountReplace,
        selectedCurrencyTo,
        selectedCurrencyFrom
      ).then(setConverterReverse);
    }
  };

  const handleSwitch = () => {
    setSelectedCurrencyFrom(selectedCurrencyTo);
    setSelectedCurrencyTo(selectedCurrencyFrom);
    setShouldClick(true);
  };

  useEffect(() => {
    if (
      selectedCurrencyFrom !== "" &&
      selectedCurrencyTo !== "" &&
      shouldClick
    ) {
      handleConverter();
    }
  }, [selectedCurrencyFrom, selectedCurrencyTo]);

  useEffect(() => {
    setConverter("");
  }, [selectedCurrencyFrom, selectedCurrencyTo]);

  return (
    <div className="w-full xl:w-11/12 2xl:w-9/12 flex flex-col justify-start items-center shadow-2xl rounded-2xl lg:p-10 lg:mt-4 relative bg-[#515151] ">
      <div className="w-full flex justify-center items-center pt-2 pb-2">
        <h1 className="text-4xl font-bold text-white">Conversion</h1>
      </div>
      <div className="w-full flex justify-center pt-8 lg:px-20">
        <AmountInput amount={amount} setAmount={setAmount} />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center px-20 py-2 lg:gap-6 xl:gap-12">
        <CurrencySelect
          currencies={currencies}
          text={"From"}
          setSelectedCurrency={setSelectedCurrencyFrom}
          selectValue={selectedCurrencyFrom}
        />
        <div className="w-full lg:w-max flex justify-center items-center">
          <ButtonSwitch handleSwitch={handleSwitch} />
        </div>
        <CurrencySelect
          currencies={currencies}
          text={"To"}
          setSelectedCurrency={setSelectedCurrencyTo}
          selectValue={selectedCurrencyTo}
        />
      </div>
      <div className="w-full flex justify-center py-2">
        {converter && converterReverse && (
          <Results
            amountReplace={amountReplace}
            valueNameFrom={valueNameFrom}
            converterReverse={converterReverse}
            selectedCurrencyTo={selectedCurrencyTo}
            converter={converter}
            valueNameTo={valueNameTo}
            selectedCurrencyFrom={selectedCurrencyFrom}
          />
        )}
      </div>
      <div className="w-full flex justify-between py-4 items-center px-10">
        <div className="w-max h-max flex justify-center items-center gap-3 px-4 py-2 bg-[#686868] rounded-lg">
          <RiErrorWarningLine size={20} className="text-[#B7B7B7]" />
          <p className="font-light text-[#B7B7B7] text-md">
            We use the mid-market rate for our converter. This just is for
            informational purposes.
          </p>
        </div>
        <Button action={handleConverter} text={"Converter"} />
      </div>
    </div>
  );
};

export default Conversion;
