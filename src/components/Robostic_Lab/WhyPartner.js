import React, { useState } from "react";

const reasons = [
  {
    title: "Quality and Reliability",
    content: "We ensure consistent quality and dependable solutions in education technology."
  },
  {
    title: "Innovative Learning Environment",
    content: "We create future-ready classrooms by integrating AI, Robotics, and STEAM tools."
  },
  {
    title: "Alignment with NEP 2020 and CBSE Guidelines",
    content: "Our offerings strictly adhere to national educational policies and standards."
  },
  {
    title: "Industry Collaboration",
    content: "Students benefit from exposure to industry practices and mentorship."
  },
  {
    title: "Future-Ready Students",
    content: "Programs are designed to equip students with 21st-century skills and adaptability."
  },
  {
    title: "Comprehensive Support and Training",
    content: "We provide continuous support, teacher training, and implementation guidance."
  },
  {
    title: "Customization and Flexibility",
    content: "Solutions can be tailored to fit the needs and infrastructure of each school."
  }
];

const WhyPartner = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 text-center mb-4">
          Why Partner With Vigyan Pathshala?
        </h2>
        <p className="text-gray-600 text-center mb-10">
          We aim to enhance the educational experience for students aged 6–18 across India. Through our integrated STEAM,
          Artificial Intelligence, Robotics, and Coding curriculum, coupled with cutting-edge technology products, we aspire
          to contribute to the holistic development of students aligned with the objectives of NEP 2020.
        </p>

        {reasons.map((item, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full flex justify-between items-center py-4 font-semibold text-left text-black focus:outline-none"
              onClick={() => toggle(index)}
            >
              {item.title}
              <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-600">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPartner;
