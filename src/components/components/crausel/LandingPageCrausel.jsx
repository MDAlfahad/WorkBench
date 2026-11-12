import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const LandingPageCrausel = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      title: "",
    },
    {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      title: "",
    },
    {
      url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80",
      title: "",
    },
    {
      url: "https://images.unsplash.com/photo-1426604966848-d7adacbd02bff?auto=format&fit=crop&w=1200&q=80",
      title: "",
    },
    {
      url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80",
      title: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  //auto slide
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000); // Har 3 seconds (3000ms) mein slide change hogi

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);
  return (
    <div className=" h-[90vh] w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative"
        onMouseEnter={() => setIsPaused(true)} 
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
          {slides[currentIndex].title}
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  rounded-full px-3 py-3 h-12 w-12 bg-white/30 backdrop-blur-md text-white cursor-pointer hover:bg-black/75 transition">
        <button onClick={prevSlide} className="focus:outline-none">
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full px-3 py-3  h-12 w-12 bg-white/30 backdrop-blur-md  text-white cursor-pointer hover:bg-black/75 transition ">
        <button onClick={nextSlide} className="focus:outline-none ">
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>

      <div className="flex justify-center py-2 space-x-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer h-3 w-3 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex ? "bg-black w-6" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LandingPageCrausel;
