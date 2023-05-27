import React from "react";

const Results = ({
  amountReplace,
  valueNameFrom,
  converterReverse,
  selectedCurrencyTo,
  converter,
  valueNameTo,
  selectedCurrencyFrom,
}) => {
  return (
    <div className="w-full flex justify-center px-8 transition-all pt-4 duration-700 lg:px-20">
      <div
        id="results"
        className="w-max flex flex-col gap-2 p-4 border-2 border-[#00FF7F] rounded-lg justify-center "
      >
        <p className="text-white text-2xl font-bold">{`${amountReplace} ${valueNameFrom} =`}</p>
        <p className="text-white text-4xl font-bold pb-1">{`${converter.rates[selectedCurrencyTo]} ${valueNameTo}`}</p>
        <p className="text-white text-xl">{`${amountReplace} ${selectedCurrencyTo} = ${converterReverse.rates[selectedCurrencyFrom]} ${valueNameFrom}`}</p>
      </div>
    </div>
  );
};

export default Results;
