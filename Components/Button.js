import React from "react";

const Button = ({ text, design, action }) => {
  return (
    <button
      onClick={action}
      className={`${design} bg-[#00FF7F] px-8 py-4 rounded-full text-2xl font-bold hover:scale-105 transition-all hover:transition-all`}
    >
      {text}
    </button>
  );
};

export default Button;
