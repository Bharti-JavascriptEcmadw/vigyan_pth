import React from "react";

const WhySetupLabs = () => {
  const benefits = [
    "Increased Employability",
    "Hands-On Training",
    "Industry Exposure",
    "Higher Earning Potential",
    "Entrepreneurial Opportunities",
    "Improved Critical Thinking",
    "Adaptability",
    "Improved Creativity",
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">
          Why Set Up Composite Robotics Labs In Schools?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Setting up Composite Robotics Labs in Schools is a crucial step towards preparing
          students for the future. These labs offer a comprehensive approach to education by
          integrating practical learning with the curriculum.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`text-white text-lg font-semibold py-10 px-6 rounded-lg shadow-md text-center ${
                benefit === "Adaptability"
                  ? "bg-orange-400"
                  : "bg-teal-700"
              }`}
            >
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySetupLabs;
