import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className={`w-full flex h-full flex-col justify-start py-8`}>
      <div className="w-9/12 flex flex-col pt-16 md:px-10 lg:px-24">
        <h1 className="text-7xl text-[#00FF7F] font-bold">ConversionAc</h1>
        <h2 className="text-3xl font-bold text-white">
          La clave para convertir monedas sin complicaciones.
        </h2>
        <h3 className="text-white text-xl font-extralight">
          Haz de las conversiones monetarias una tarea fácil y sin
          complicaciones con conversionAc. ¡Descubre la libertad de intercambiar
          monedas al instante!
        </h3>
      </div>

      <div className="w-full h-full flex justify-between overflow-hidden">
        <div className="w-full h-full flex justify-between overflow-hidden">
          <Image
            src="/chart1.webp"
            alt="chart"
            width={650}
            height={3000}
            className="relative right-2"
            prefetch
          />
          <Image
            src="/chartline.webp"
            alt="chartline"
            width={650}
            height={300}
            className={"transform rotate-[-15deg]"}
            prefetch
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
