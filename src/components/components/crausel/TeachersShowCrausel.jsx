import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Image from "../../../assets/doctor.jpg";

const TeachersShowCrausel = () => {
  const slide = [
    {
      url: Image,
      name: "Alfahad",
      description: "Assistance Professor",
    },
    {
      url: Image,
      name: "Dodo",
    },
    {
      url: Image,
      name: "Todo",
    },
    {
      url: Image,
      name: "Kodo",
    },
    {
      url: Image,
      name: "Modo",
    },
    
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ispaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === length.slide - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[1800px] m-auto w-full h-[500px] px-4 lg:px-14 flex items-center justify-center gap-5 relative">
      {slide.map((item, index) => (
        <div
          key={index}
          className="w-60 border border-slate-300 rounded-xl p-2 bg-white overflow-hidden"
        >
          <img
            src={item.url}
            className="w-full h-full object-cover rounded-lg"
          />
          <h1 className="italic text-sm font-medium pt-2 text-end">
            __{item.name}
          </h1>
          <p className="text-xs text-end">
            {item.description ? `"${item.description}"` : "Teacher"}
          </p>
        </div>
      ))}
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  rounded-full px-3 py-3 h-12 w-12 bg-black/30 backdrop-blur-md text-white cursor-pointer hover:bg-black/75 transition">
        <button onClick={prevSlide} className="focus:outline-none">
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
      </div>

      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full px-3 py-3  h-12 w-12 bg-black/30 backdrop-blur-md  text-white cursor-pointer hover:bg-black/75 transition ">
        <button onClick={nextSlide} className="focus:outline-none ">
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TeachersShowCrausel;
