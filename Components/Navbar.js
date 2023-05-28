import UseWindowSize from "@Utils/UseWindowSize";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({
  setShowCharts,
  setShowConversion,
  setShowHome,
  showHome,
  showCharts,
  showConversion,
}) => {
  const width = UseWindowSize();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {width < 1024 ? (
        <nav className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <span
                  onClick={() => {
                    setShowConversion(false);
                    setShowCharts(false);
                    setShowHome(true);
                    setShowMenu(false);
                  }}
                >
                  <p className="text-[#00FF7F] text-2xl font-bold">AWCode</p>
                </span>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#00FF7F] focus:outline-none focus:bg-[#00FF7F] focus:text-white transition duration-150 ease-in-out"
                  aria-label="Menu"
                >
                  {showMenu ? (
                    <FaTimes className="h-6 w-6" />
                  ) : (
                    <FaBars className="h-6 w-6" />
                  )}
                </button>
              </div>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <ul className="flex space-x-4">
                  <li
                    onClick={() => {
                      setShowConversion(false);
                      setShowCharts(false);
                      setShowHome(true);
                      setShowMenu(false);
                    }}
                    className={`${
                      showHome ? "text-[#00FF7F]" : "text-white"
                    } cursor-pointer font-bold text-xl`}
                  >
                    Home
                  </li>
                  <li
                    onClick={() => {
                      setShowConversion(true);
                      setShowCharts(false);
                      setShowHome(false);
                      setShowMenu(false);
                    }}
                    className={`${
                      showConversion ? "text-[#00FF7F]" : "text-white"
                    } cursor-pointer font-bold text-xl`}
                  >
                    Conversion
                  </li>
                  <li
                    onClick={() => {
                      setShowConversion(false);
                      setShowCharts(true);
                      setShowHome(false);
                      setShowMenu(false);
                    }}
                    className={`${
                      showCharts ? "text-[#00FF7F]" : "text-white"
                    } cursor-pointer font-bold text-xl`}
                  >
                    Charts
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Menú hamburguesa */}
          {showMenu && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 sm:px-3">
                <ul className="space-y-1">
                  <li
                    onClick={() => {
                      setShowConversion(false);
                      setShowCharts(false);
                      setShowHome(true);
                      setShowMenu(false);
                    }}
                    className={`${
                      showHome ? "text-[#00FF7F]" : "text-white"
                    } block px-3 py-2 rounded-md text-base font-medium`}
                  >
                    Home
                  </li>
                  <li
                    onClick={() => {
                      setShowConversion(true);
                      setShowCharts(false);
                      setShowHome(false);
                      setShowMenu(false);
                    }}
                    className={`${
                      showConversion ? "text-[#00FF7F]" : "text-white"
                    } block px-3 py-2 rounded-md text-base font-medium`}
                  >
                    Conversion
                  </li>
                  <li
                    onClick={() => {
                      setShowConversion(false);
                      setShowCharts(true);
                      setShowHome(false);
                      setShowMenu(false);
                    }}
                    className={`${
                      showCharts ? "text-[#00FF7F]" : "text-white"
                    } block px-3 py-2 rounded-md text-base font-medium`}
                  >
                    Charts
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      ) : (
        <nav className="w-full flex justify-center items-center lg:px-10 xl:px-32 py-16">
          <div>
            <span
              onClick={() => {
                setShowConversion(false);
                setShowCharts(false);
                setShowHome(true);
              }}
              className="text-[#00FF7F] text-5xl font-bold"
            >
              AWCode
            </span>
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
        </nav>
      )}
    </>
  );
};

export default Navbar;
