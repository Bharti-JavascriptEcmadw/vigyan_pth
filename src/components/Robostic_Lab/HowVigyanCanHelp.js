import React, { useState } from "react";

const helpItems = [
  {
    title: "Lab Design and Setup",
    content:
      "We help schools design and establish labs that follow CBSE standards and NEP 2020.",
  },
  {
    title: "State-of-the-Art Equipment",
    content:
      "We provide advanced tools and machines essential for robotics education.",
  },
  {
    title: "Curriculum Integration",
    content:
      "We align lab activities with school curriculum for seamless integration.",
  },
  {
    title: "Training and Support",
    content:
      "We offer ongoing training and support to educators for smooth implementation.",
  },
];

const HowVigyanCanHelp = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-500 text-center mb-6">
          How Vigyan Pathshala Can Help
        </h2>
        <p className="text-gray-600 text-center mb-10 leading-relaxed">
          Vigyan Pathshala is committed to transforming education by assisting schools in establishing Composite Robotics Labs that align with the latest CBSE guidelines and the objectives of NEP 2020.
        </p>

        <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg shadow-sm">
          {helpItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-gray-800 font-medium hover:bg-gray-50 focus:outline-none transition"
              >
                <span>{item.title}</span>
                <span className="text-lg text-gray-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-6 pb-5 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowVigyanCanHelp;
