import { Socials } from "@data/data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black p-10">
      <div className="w-full flex justify-center items-center">
        <p className="font-bold text-3xl text-[#00FF7F]">AWCode</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <ul className="w-full flex justify-center items-center gap-6">
          {Socials.map((social, index) => {
            return (
              <Link
                key={index}
                href={social.src}
                target="__blank"
                className="hover:text-[#00FF7F] hover:scale-105 transition-all hover:transition-all font-bold text-xl text-white"
                prefetch
              >
                {social.text}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="w-full flex justify-center items-center">
        <p className="font-bold text-xl text-white">Nose</p>
      </div>
    </div>
  );
};

export default Footer;
