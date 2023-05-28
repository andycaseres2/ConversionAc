import { HomeData } from "@data/data";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className={`w-full flex flex-col justify-start`}>
      <div className="w-9/12 flex flex-col pt-20 md:px-10 lg:px-24">
        <h1 className="text-7xl text-[#00FF7F] font-bold">{HomeData.title}</h1>
        <h2 className="text-3xl font-bold text-white">{HomeData.subTitle}</h2>
        <h3 className="text-white text-xl font-extralight">
          {HomeData.description}
        </h3>
      </div>

      <div className="w-full h-full flex justify-between overflow-hidden">
        <div className="w-full h-full flex justify-between overflow-hidden">
          <Image
            src="/chart1.webp"
            alt="chart"
            width={650}
            height={650}
            className="relative right-2"
            loading="eager"
          />
          <Image
            src="/chartline.webp"
            alt="chartline"
            width={650}
            height={650}
            className={"transform rotate-[-15deg]"}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
