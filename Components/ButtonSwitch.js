import React from "react";
import { HiSwitchHorizontal } from "react-icons/hi";

const ButtonSwitch = ({ handleSwitch }) => {
  return (
    <button
      onClick={handleSwitch}
      className="rounded-full border-2 bg-[#00FF7F] border-[#00FF7F] p-2 hover:scale-105 transition-all hover:transition-all"
    >
      <HiSwitchHorizontal size={40} className="text-black" />
    </button>
  );
};

export default ButtonSwitch;
