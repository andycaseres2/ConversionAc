"use client";
import Footer from "@Components/Footer";
import Router from "@Components/Router";
import Navbar from "@Components/Navbar";
import { useState } from "react";

export default function Home() {
  const [showConversion, setShowConversion] = useState(false);
  const [showCharts, setShowCharts] = useState(false);
  const [showHome, setShowHome] = useState(true);
  return (
    <main className="h-full bg-black w-full flex justify-between flex-col gap-16 lg:gap-0">
      <Navbar
        setShowConversion={setShowConversion}
        setShowCharts={setShowCharts}
        setShowHome={setShowHome}
        showHome={showHome}
        showCharts={showCharts}
        showConversion={showConversion}
      />
      <Router
        showHome={showHome}
        showCharts={showCharts}
        showConversion={showConversion}
      />
      <Footer
        setShowConversion={setShowConversion}
        setShowCharts={setShowCharts}
        setShowHome={setShowHome}
      />
    </main>
  );
}
