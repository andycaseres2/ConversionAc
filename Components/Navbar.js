import Link from "next/link";
import React from "react";

const Navbar = ({ setShowGrafics, setShowConversion, setShowHome }) => {
  return (
    <div className="w-full flex justify-center items-center px-32 py-16">
      <div>
        <p className="text-white text-6xl font-bold">AC</p>
      </div>
      <ul className="w-full flex justify-center items-center gap-10 p-6">
        <li
          onClick={() => {
            setShowConversion(false);
            setShowGrafics(false);
            setShowHome(true);
          }}
          className={`text-2xl font-bold text-white hover:scale-105 transition-all hover:transition-all cursor-pointer`}
        >
          Home
        </li>
        <li
          onClick={() => {
            setShowConversion(true);
            setShowGrafics(false);
            setShowHome(false);
          }}
          className={`text-2xl font-bold text-white hover:scale-105 transition-all hover:transition-all cursor-pointer`}
        >
          Conversion
        </li>
        <li
          onClick={() => {
            setShowConversion(false);
            setShowGrafics(true);
            setShowHome(false);
          }}
          className={`text-2xl font-bold text-white hover:scale-105 transition-all hover:transition-all cursor-pointer`}
        >
          Grafics
        </li>
      </ul>
      <div className="flex justify-center items-center gap-4">
        <h2 className="text-3xl font-bold text-white">ConversionAc</h2>
      </div>
    </div>
  );
};

export default Navbar;
