import { Socials } from "@data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-max flex justify-center items-center bg-black p-10">
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
        <Image
          src="/rocket.png"
          alt="AWCode"
          width={60}
          height={60}
          className=""
          loading="eager"
        />
      </div>
      |
    </div>
  );
};

export default Footer;
