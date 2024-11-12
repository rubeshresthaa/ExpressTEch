import React, { useState } from "react";
import image1 from '../../assets/Images/dashimage.jpg'

const smallCustomerImages = [
  `${image1}`,`${image1}`
];

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
      <div className="overflow-hidden rounded-lg">
        <img
          src={smallCustomerImages[currentIndex]}
          alt={`Customer ${currentIndex + 1}`}
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 focus:outline-none"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 focus:outline-none"
      >
        &#8594;
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {smallCustomerImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-teal-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
