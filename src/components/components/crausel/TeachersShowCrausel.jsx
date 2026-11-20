import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Image from "../../../assets/doctor.jpg";

const TeachersShowCrausel = () => {
  const teachers = [
    {
      id: 1,
      image: Image,
      name: "Alfahad",
      designation: "Assistant Professor",
    },
    {
      id: 2,
      image: Image,
      name: "Dodo",
      designation: "Professor",
    },
    {
      id: 3,
      image: Image,
      name: "Todo",
      designation: "Assistant Professor",
    },
    {
      id: 4,
      image: Image,
      name: "Kodo",
      designation: "Professor",
    },
    {
      id: 5,
      image: Image,
      name: "Modo",
      designation: "Assistant Professor",
    },
    {
      id: 6,
      image: Image,
      name: "lodo",
      designation: "Assistant Professor",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % teachers.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + teachers.length) % teachers.length);
  };


  useEffect(() => {
    if (paused) return;

    const timer = setInterval(nextSlide, 3500);

    return () => clearInterval(timer);
  }, [paused]);

  
  const getTeacher = (position) => {
    const index = (activeIndex + position + teachers.length) % teachers.length;

    return teachers[index];
  };

  const positions = [-2, -1, 0, 1, 2];

  return (
    <section
      className="w-full max-w-[1800px] mx-auto px-4 lg:px-10 py-10 capitalize"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* CAROUSEL */}
      <div className="relative w-full">
        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            z-30

            w-12
            h-12

            rounded-full

            flex
            items-center
            justify-center

            bg-black/30
            backdrop-blur-md

            text-white

            hover:bg-black/75
            hover:scale-105

            transition-all
            duration-300
          "
        >
          <MdOutlineKeyboardArrowLeft size={30} />
        </button>

        {/* CARDS AREA */}
        <div
          className="
            w-full
            flex
            items-center
            justify-center

            overflow-hidden

            min-h-[400px]
          "
        >
          <div
            className="
              flex
              items-center
              justify-center

              gap-5

              w-full
            "
          >
            {positions.map((position) => {
              const teacher = getTeacher(position);

              const isCenter = position === 0;

              return (
                <div
                  key={`${teacher.id}-${position}`}
                  className={`
                    flex-shrink-0

                    border
                    border-slate-300

                    rounded-xl

                    p-2

                    bg-white

                    overflow-hidden

                    shadow-sm

                    transition-all
                    duration-500
                    ease-in-out

                    ${
                      isCenter
                        ? `
                          w-[260px]
                          scale-105
                          shadow-lg
                          z-10
                        `
                        : `
                          w-[240px]
                          scale-95
                          opacity-75
                        `
                    }

                    hidden

                    ${
                      position === -1 || position === 0 || position === 1
                        ? "block"
                        : ""
                    }

                    lg:block
                  `}
                >
                  {/* IMAGE */}
                  <div
                    className={`
                      w-full
                      overflow-hidden
                      rounded-lg
                      bg-slate-100

                      ${isCenter ? "h-[300px]" : "h-[280px]"}
                    `}
                  >
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="
                        w-full
                        h-full
                        object-cover

                        rounded-lg

                        transition-transform
                        duration-500

                        hover:scale-105
                      "
                    />
                  </div>

                  {/* DETAILS */}
                  <div className="pt-2 pb-1">
                    <h2
                      className={`
                        italic
                        font-medium
                        text-end

                        ${isCenter ? "text-base" : "text-sm"}
                      `}
                    >
                      __{teacher.name}
                    </h2>

                    <p
                      className="
                        text-xs
                        text-end
                        text-slate-600
                      "
                    >
                      "{teacher.designation}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            z-30

            w-12
            h-12

            rounded-full

            flex
            items-center
            justify-center

            bg-black/30
            backdrop-blur-md

            text-white

            hover:bg-black/75
            hover:scale-105

            transition-all
            duration-300
          "
        >
          <MdOutlineKeyboardArrowRight size={30} />
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {teachers.map((teacher, index) => (
          <button
            key={teacher.id}
            onClick={() => setActiveIndex(index)}
            className={`
              h-2
              rounded-full

              transition-all
              duration-300

              ${
                activeIndex === index
                  ? "w-7 bg-slate-800"
                  : "w-2 bg-slate-300 hover:bg-slate-500"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default TeachersShowCrausel;
