import React from "react";

const Navbar = ({
  setShowCharts,
  setShowConversion,
  setShowHome,
  showHome,
  showCharts,
  showConversion,
}) => {
  return (
    <div className="w-full flex justify-center items-center px-32 py-16">
      <div>
        <p className="text-[#00FF7F] text-5xl font-bold">AWCode</p>
      </div>
      <ul className="w-full flex justify-center items-center gap-10 p-6">
        <li
          onClick={() => {
            setShowConversion(false);
            setShowCharts(false);
            setShowHome(true);
          }}
          className={`text-2xl font-bold ${
            showHome ? "text-[#00FF7F]" : "text-white"
          }  hover:scale-105 transition-all hover:transition-all cursor-pointer`}
        >
          Home
        </li>
        <li
          onClick={() => {
            setShowConversion(true);
            setShowCharts(false);
            setShowHome(false);
          }}
          className={`text-2xl font-bold ${
            showConversion ? "text-[#00FF7F]" : "text-white"
          }  hover:scale-105 transition-all hover:transition-all cursor-pointer`}
        >
          Conversion
        </li>
        <li
          onClick={() => {
            setShowConversion(false);
            setShowCharts(true);
            setShowHome(false);
          }}
          className={`text-2xl font-bold ${
            showCharts ? "text-[#00FF7F]" : "text-white"
          } hover:scale-105 transition-all hover:transition-all cursor-pointer`}
        >
          Charts
        </li>
      </ul>
      <div className="flex justify-center items-center gap-4">
        <h2 className="text-3xl font-bold text-[#00FF7F]">ConversionAc</h2>
      </div>
    </div>
  );
};

export default Navbar;
