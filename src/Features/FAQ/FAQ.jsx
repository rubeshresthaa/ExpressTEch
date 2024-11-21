import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does your IT company offer?",
      answer: "We provide networking solutions, cloud computing, IT consulting, cybersecurity, and managed IT support tailored to your needs.",
    },
    {
      question: "How can you help with networking solutions?",
      answer: "We design, implement, and manage secure, scalable network infrastructures to enhance your business operations.",
    },
    {
      question: "Do you provide on-site technical support?",
      answer: "Yes, we offer both on-site and remote technical support to ensure your IT systems are always operational.",
    },
    {
      question: "What is the process for setting up a secure network?",
      answer: "Our process includes a network assessment, architecture design, implementation, and ongoing monitoring for optimal security.",
    },
    {
      question: "Can you assist with data recovery in case of a disaster?",
      answer: "Yes, we provide comprehensive data recovery services and disaster recovery plans to protect your business continuity.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-green-400 mb-10">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-gray-200 hover:text-green-400 transition duration-300 focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform ${
                    openIndex === index ? "rotate-180 text-green-400" : ""
                  } transition-transform duration-300`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
