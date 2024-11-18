import React, { useState } from "react";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import image1 from "../../assets/Images/dashimage.jpg";

const smallCustomerImages = [image1, image1];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % smallCustomerImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + smallCustomerImages.length) % smallCustomerImages.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      {/* Carousel Image */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={smallCustomerImages[currentIndex]}
          alt={`Customer ${currentIndex + 1}`}
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-2 md:p-3 rounded-full hover:bg-teal-500 hover:scale-110 transition-all focus:outline-none shadow-lg"
      >
        <IoArrowBackCircle size={28} className="md:text-3xl" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-2 md:p-3 rounded-full hover:bg-teal-500 hover:scale-110 transition-all focus:outline-none shadow-lg"
      >
        <IoArrowForwardCircle size={28} className="md:text-3xl" />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {smallCustomerImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 mx-1 md:mx-2 rounded-full cursor-pointer transition-transform duration-300 ${
              index === currentIndex
                ? "bg-teal-500 scale-150 shadow-md"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
