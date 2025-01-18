import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does HEMMA Investment provide?",
      answer:
        "We specialize in land restoration, sustainable agriculture, reforestation, organic compost production, and community-focused training for better land management practices.",
    },
    {
      question: "How does HEMMA Investment ensure the sustainability of its projects?",
      answer:
        "HEMMA adopts environmentally friendly practices and collaborates with local communities to ensure long-term sustainability.",
    },
    {
      question: "Can small-scale farmers benefit from HEMMA’s services?",
      answer:
        "Yes, HEMMA's programs are designed to support small-scale farmers by providing training, resources, and tools for sustainable farming.",
    },
    {
      question: "What makes HEMMA’s approach unique?",
      answer:
        "HEMMA integrates community involvement, cutting-edge technology, and sustainable practices to achieve impactful results.",
    },
    {
      question: "How can I get involved with HEMMA Investment?",
      answer:
        "You can get involved by partnering with us, attending our training programs, or volunteering in our projects.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Frequently Asked <span className="text-customTeal">Questions</span>
        </h2>
        <p className="text-gray-600 mt-2 mx-auto w-1/2">
          We know you might have questions about our land restoration and sustainability initiatives. Here are answers to some of the most common inquiries to help you understand how HEMMA Investment can support your goals.
        </p>
      </div>

      <div className="space-y-4 w-[60%] mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg  overflow-hidden shadow-md ${
              activeIndex === index ? "bg-customTeal" : "bg-white"
            }`}
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center"
            >
              <span
                className={`text-lg font-medium ${
                  activeIndex === index ? "text-green-800" : "text-gray-800"
                }`}
              >
                {faq.question}
              </span>
              <span className="text-gray-500 text-xl">
                {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
