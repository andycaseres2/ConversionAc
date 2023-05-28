import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { metadata } from "@data/data";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
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
          {children}
        </main>
      </body>
    </html>
  );
}
