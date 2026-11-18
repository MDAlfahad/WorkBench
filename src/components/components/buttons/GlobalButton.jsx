import React from "react";

const GlobalButton = ({ text, onClick }) => {
  return (
    <button className="w-full px-2 py-2 my-2  border border-primary rounded-full shadow-sm text-white  hover:border-primary hover:bg-primary bg-primary/90 transition-all duration-300"
    onClick={onClick}>
     {text}
    </button>
  );
};

export default GlobalButton;
