import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black p-10">
      <div className="w-full flex justify-center items-center">
        <p className="font-bold text-3xl text-white">AC</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <ul className="w-full flex justify-center items-center gap-4">
          <li className="font-bold text-xl text-white">instagram</li>
          <li className="font-bold text-xl text-white">linkeind</li>
          <li className="font-bold text-xl text-white">facebook</li>
          <li className="font-bold text-xl text-white">portfolio</li>
        </ul>
      </div>
      <div className="w-full flex justify-center items-center">
        <p className="font-bold text-xl text-white">informacion</p>
      </div>
    </div>
  );
};

export default Footer;
