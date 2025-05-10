


import React from "react";
import { Link } from "react-router-dom";
const Courses = () => {
  const courses = [
    {
  
      title: "Coding!",
      detail: "Learn how to make robots move, talk, and play games!",
    },
    {
  
      title: "Robotics",
      detail: "Drag and drop blocks to create cool apps and games.",
    },
    {
      
      title: "Engineering",
      detail: "Make your robot think, see, and make decisions!",
    },
    {
      
      title: "IoT & Remote Robots Training",
      detail: "Control your robot from your phone or computer.",
    },

      {
      title: "Robotics Lab for School",
      detail: "Control your robot from your phone or computer.",
    },
  ];

  const technologies = [
    "Arduino", "ESP32", "Sensors", "Scratch", "Blockly", 
    "Python", "Wheels & Motors", "Wi-Fi", "Bluetooth", "LEDs",
  ];

  return (
    <section className="bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 py-16 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-4">
          🎉 Fun with Robots & Coding!
        </h2>
        <p className="text-md sm:text-lg text-gray-700 max-w-2xl mx-auto">
          Explore exciting tech like robots, AI, sensors, and code in a fun way made just for kids.
        </p>
      </div>

      {/* Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl border-4 border-dashed border-pink-200 p-6 shadow-lg hover:scale-105 transition"
          >
            <div className="text-4xl mb-3">{course.icon}</div>
            <h3 className="text-lg font-bold text-indigo-700 mb-2">{course.title}</h3>
            <p className="text-gray-600 text-sm">{course.detail}</p>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="text-center mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-6"> Tools &  Technologies</h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-white border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Offer Section */}
      <div className="bg-white py-10 px-6 rounded-3xl shadow-xl text-center max-w-4xl mx-auto border-4 border-dotted border-yellow-300">
        <h3 className="text-3xl font-bold text-pink-600 mb-4">🚀 Ready to Build Your Own Robot?</h3>
        <p className="text-md text-gray-700 mb-6">
          Join our fun learning adventure — make games, smart bots, and gadgets you can proudly show off!
        </p>

        <Link to="/bookdemo">
        <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition">
          Start Your Journey
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Courses;
