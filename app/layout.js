"use client";
import React from "react";
import Navbar from "@Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@Components/Footer";
import { useState } from "react";
import Home from "./page";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ConversionAc",
  description: "The key to hassle-free currency conversion",
};

export default function RootLayout({ children }) {
  const [showConversion, setShowConversion] = useState(false);
  const [showCharts, setShowCharts] = useState(false);
  const [showHome, setShowHome] = useState(true);
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Otros meta tags y enlaces a estilos o scripts */}
      </Head>
      <body className={inter.className}>
        <main className="h-full bg-black w-full flex justify-between flex-col gap-16 lg:gap-0">
          <Navbar
            setShowConversion={setShowConversion}
            setShowCharts={setShowCharts}
            setShowHome={setShowHome}
            showHome={showHome}
            showCharts={showCharts}
            showConversion={showConversion}
          />
          <Home
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
      </body>
    </html>
  );
}
