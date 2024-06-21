/* eslint-disable @next/next/no-img-element */
"use client"

import styles from "@/app/lib/css/images.module.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SlideCarousel() {
  const slides: string[] = [
    "sale(1).png",
    "sale(2).png",
    "sale(3).png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={slide} alt={slide} className={`${styles.slideImages}`} />
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-white hover:text-black ms-3"
        onClick={handlePrev}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 p-2 rounded-full hover:bg-white hover:text-black me-3"
        onClick={handleNext}
      >
        <FaChevronRight />
      </button>

      <div className="absolute bottom-4 right-0 left-0">
      <div className="flex items-center justify-center gap-2">
          {slides.map((current, i) => (
            <div key={i}
              className={`
              transition-all w-3 h-3 bg-black rounded-full
              ${currentIndex === i ? "p-1" : "bg-opacity-20"}
            `}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideCarousel;
