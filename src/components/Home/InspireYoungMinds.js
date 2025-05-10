import React from "react";
import { Link } from "react-router-dom";
import PhotoGrid from "./PhotoGrid";

const InspireYoungMinds = () => {
  const features = [
    {
      title: "Imagine",
      description:
        "We spark creativity in young minds through storytelling and hands-on design thinking sessions.",
    },
    {
      title: "Build",
      description:
        "Using safe, kid-friendly kits, students build robots and automate tasks while learning to code.",
    },
    {
      title: "Explore",
      description:
        "We encourage exploration with experiments, games, and fun challenges that apply STEM in real life.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Carousel */}
      <div className="mb-10">
        <PhotoGrid />
      </div>

      {/* Content Box with Equal Border */}
      <div className="max-w-6xl mx-auto border border-cyan-700 rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 bg-gray-500 shadow-xl">
        <div className="text-center">
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-400 mb-4 font-mono fade-in">
A Complete Platform for AI and Robotics Education
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-400 mb-4 font-mono fade-in">
            Inspire Young Minds Through Robotics
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            At Vigyan Pathshala, we believe every child is a natural innovator. Our playful,
            practical approach to robotics education unlocks their full potential through imagination,
            building, and discovery.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, id) => (
            <div
              key={id}
              className="bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-700 hover:border-cyan-400 shadow-md transition duration-300
              border-t-4 border-t-solid border-t-cyan-500"
            >
              <h3 className="text-lg sm:text-xl font-bold text-cyan-300 mb-2 font-mono">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <Link to="/bookdemo">
            <button className="bg-cyan-500 text-white hover:bg-cyan-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-bold shadow-md transition duration-300 tracking-wide">
              Start Building Bots Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InspireYoungMinds;
