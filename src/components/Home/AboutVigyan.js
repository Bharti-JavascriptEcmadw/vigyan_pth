
import React from 'react';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const AboutVigyan = () => {
  
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center px-6 py-16 
     bg-gradient-to-r from-blue-300 via-teal-100 to-gray-400 
    overflow-hidden text-white">
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-white opacity-30 z-0"></div> */}

      {/* Left Image */}
      <div className="w-full lg:w-1/2 z-10 mb-10 lg:mb-0 flex justify-center">
        <img
          src="/assetes/vigyan/Robot.png"
          alt="Robotic Education"
          className="w-full max-w-md lg:max-w-lg h-auto rounded-xl shadow-2xl"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 z-10 px-4 lg:px-10 space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-black">
          What We Provide:
          <span className="text-gray-900"> Robotic Education</span>
        </h2>
        
        <p className="text-black font-bold text-lg">
          At Vigyan Pathshala, we offer cutting-edge robotic education programs designed
          for young learners. We build technical skills, creativity, and logical thinking
          through hands-on projects and exploration.
        </p>
        <p className="text-black font-bold text-lg">
          From beginner to advanced levels, students discover the world of robotics,
          coding, and engineering in a fun and future-ready environment.
        </p>

        {/* Mission */}
        <div className="flex items-start gap-4">
          <div className="bg-black p-4 rounded-full shadow-lg">
            <FaBookOpen size={24} />
          </div>
          <div>
            <h3 className="text-xl text-black font-semibold mb-1">Our Mission</h3>
            <p className="text-black">
              To empower students through skill-based learning and real-world applications
              in robotics, coding, and emerging technologies.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="flex items-start gap-4">
          <div className="bg-gray-900 p-4 rounded-full shadow-lg">
            <FaLightbulb size={24} />
          </div>
          <div>
            <h3 className="text-xl text-black font-semibold mb-1">Our Vision</h3>
            <p className="text-black">
              To nurture a generation of innovators equipped with confidence, curiosity,
              and a passion for solving real-world challenges through technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVigyan;
