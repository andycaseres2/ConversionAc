"use client";
import React from "react";
import { useState } from "react";

const AmountInput = ({ amount, setAmount }) => {
  const handleChange = (e) => {
    let valor = e.target.value;

    // Eliminar el símbolo de dólar y los separadores de comas del valor
    valor = valor.replace(/\$|,/g, "");

    // Formatear el valor con separadores de comas
    let separadoPorComas = "";
    while (valor.length > 3) {
      separadoPorComas = "," + valor.slice(-3) + separadoPorComas;
      valor = valor.slice(0, -3);
    }
    separadoPorComas = valor + separadoPorComas;

    // Agregar el símbolo de dólar al valor formateado y actualizar el estado
    setAmount("$" + separadoPorComas);
  };

  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 flex flex-col gap-1 items-center">
      <label className="text-white text-2xl font-bold">Amount:</label>
      <input
        type="text"
        className="appearance-none w-full h-14 px-3 leading-tight rounded-full border border-gray-500 focus:outline-none focus:bg-white focus:border-gray-500 text-lg font-bold placeholder:font-bold placeholder:text-black placeholder:text-xl"
        onChange={handleChange}
        value={amount}
        placeholder="$"
      />
    </div>
  );
};

export default AmountInput;
