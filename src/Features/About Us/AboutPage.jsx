import React from "react";
import Carousel from "./Carousel"; // Import the carousel component

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-500">
        About Express Tech Pvt. Solution
      </h1>

      <div className="max-w-4xl bg-[#1e1f23] p-8 rounded-lg shadow-lg border border-green-700">
        <p className="text-lg mb-4 leading-relaxed text-gray-300">
          Express Tech Pvt. Solution is a leading technology solutions provider, committed to
          delivering innovative and efficient solutions to businesses worldwide.
        </p>
        <p className="text-lg mb-4 leading-relaxed text-gray-300">
          We have built a reputation for excellence, quality, and customer satisfaction, with a team
          of skilled professionals dedicated to providing cutting-edge solutions.
        </p>
      </div>

      {/* Customer Carousel */}
      <h2 className="text-3xl font-semibold text-center mt-16 mb-8 text-green-400 underline underline-offset-4">
        Our Customers
      </h2>
      <div className="w-full max-w-4xl">
        <Carousel />
      </div>
    </div>
  );
};

export default AboutPage;
