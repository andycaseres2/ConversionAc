import UseWindowSize from "@Utils/UseWindowSize"
import { Socials } from "@data/data"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = ({ setShowCharts, setShowConversion, setShowHome }) => {
  const width = UseWindowSize()
  return (
    <div className="w-full h-max flex flex-col lg:flex-row justify-center items-center bg-black px-4 lg:p-10 gap-2 pb-4">
      <div className="w-full flex justify-center items-center">
        <span
          onClick={() => {
            setShowConversion(false)
            setShowCharts(false)
            setShowHome(true)
          }}
          className="font-bold text-3xl text-[#00FF7F] cursor"
        >
          AWCode
        </span>
      </div>
      <div className="w-full flex justify-center items-center">
        <ul className="w-full flex justify-center items-center gap-6">
          {Socials.map((social, index) => {
            return (
              <Link
                key={index}
                href={social.src}
                target="__blank"
                className="hover:text-[#00FF7F] hover:scale-105 transition-all hover:transition-all font-bold text-base lg:text-xl text-white"
                prefetch
              >
                {social.text}
              </Link>
            )
          })}
        </ul>
      </div>
      <div className="w-full flex justify-center items-center">
        <Image
          src="/ac.png"
          alt="AWCode"
          width={width < 768 ? 100 : 120}
          height={width < 768 ? 100 : 120}
          className=""
          loading="eager"
        />
      </div>
    </div>
  )
}

export default Footer
