import React from "react";
import HomePage from "./HomePage";
import Conversion from "./Conversion";
import Charts from "./Charts";

const Router = ({ showHome, showCharts, showConversion }) => {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      {showHome && <HomePage />}
      {showConversion && <Conversion />}
      {showCharts && <Charts />}
    </main>
  );
};

export default Router;
