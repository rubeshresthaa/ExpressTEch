import React from "react";
import Carousel from "./Carousel"; // Import the carousel component

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#202124] text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">About Express Tech Pvt. Solution</h1>

      <div className="max-w-4xl bg-[#2a2b2f] p-8 rounded-lg shadow-lg">
        <p className="text-lg mb-4 leading-relaxed">
          Express Tech Pvt. Solution is a leading technology solutions provider, committed to
          delivering innovative and efficient solutions to businesses worldwide.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          We have built a reputation for excellence, quality, and customer satisfaction, with a team
          of skilled professionals dedicated to providing cutting-edge solutions.
        </p>
      </div>

      {/* Customer Carousel */}
      <h2 className="text-3xl font-semibold text-center mt-16 mb-8">Our Customers</h2>
      <Carousel />
    </div>
  );
};

export default AboutPage;
