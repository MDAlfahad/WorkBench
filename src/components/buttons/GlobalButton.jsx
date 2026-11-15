import React from "react";

const GlobalButton = ({ text, onClick }) => {
  return (
    <button className="w-full px-2 py-2 my-2  border-2 border-slate-200 rounded-full shadow-sm hover:text-white hover:border-primary hover:bg-primary transition-all duration-300"
    onClick={onClick}>
     {text}
    </button>
  );
};

export default GlobalButton;
