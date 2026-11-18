import React, { useState } from "react";
import "./button.css";

const SlideButton = () => {
  const [isChange, setIsChange] = useState(false);
  const handleChange = () => {
    setIsChange(setIsChange => !isChange);
  };
  return (
    <div>
      <div className="slideButton relative" onClick={handleChange}>
        <div
          className={`circleRound absolute transition-all duration-300 ${isChange ? "translate-x-full" : "translate-x-0"}`}
        ></div>
      </div>
    </div>
  );
};

export default SlideButton;
