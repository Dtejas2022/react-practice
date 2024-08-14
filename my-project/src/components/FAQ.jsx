import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Why would Gate and Tech be a good choice for me?",
      answer: "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.",
    },
    {
        question: "Why would Gate and Tech be a good choice for me?",
        answer: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs quickly. It avoids the need for writing custom CSS by using utility classes directly in your markup.",
    },
    {
        question: "Why would Gate and Tech be a good choice for me?",
        answer: "You can install Tailwind CSS via npm or yarn. Run `npm install tailwindcss` or `yarn add tailwindcss` in your project directory. Then, follow the setup instructions to configure Tailwind in your project.",
    },
    {
        question: "Why would Gate and Tech be a good choice for me?",
        answer: "Props are used to pass data from parent to child components and are immutable. State is used to manage data within a component and can be changed by the component itself.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
            <div
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {faq.question}
              </h2>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-600 dark:text-gray-400" />
              ) : (
                <FaChevronDown className="text-gray-600 dark:text-gray-400" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
