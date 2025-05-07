import React from "react";
import { FaRobot, FaSchool, FaMicrochip, FaBook, FaMobileAlt, FaCode } from "react-icons/fa";

const items = [
  { id: 1, title: "In house Content", icon: <FaMicrochip /> },
  { id: 2, title: "In house DIY kits", icon: <FaRobot /> },
  { id: 3, title: "School Lab setup", icon: <FaSchool /> },
  { id: 4, title: "In house coding platform", icon: <FaCode /> },
  { id: 5, title: "STEMROBO Learn App", icon: <FaMobileAlt /> },
  { id: 6, title: "Coding and AI books", icon: <FaBook /> },
];

const JoinUsSection = () => {
  return (
    <section className="bg-teal-500 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left text */}
        <div>
          <h2 className="text-4xl font-extrabold leading-snug mb-4">
            Join Us At Vigyan Pathshala And Unlock The Potential Of STEM Education!
          </h2>
          <p className="text-teal-100 text-lg">
            We provide innovative resources, platforms, and labs to transform how children learn and build for the future.
          </p>
        </div>

        {/* Right visual grid */}
        <div className="grid grid-cols-2 gap-6">
          {items.map(({ id, title, icon }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center bg-white text-teal-600 rounded-xl p-5 shadow-md hover:shadow-lg transition"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <span className="font-semibold text-center">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
