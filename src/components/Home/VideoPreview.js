


import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="w-full bg-white py-16"> {/* Gradient background for the wrapper */}
      <div className="w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 bg-white rounded-xl shadow-xl p-8 ">
        {/* Left: Video Section */}
        <div className="relative w-full lg:w-1/2 rounded-[40px] shadow-xl">
          {/* Video Preview Container */}
          <div className="relative overflow-hidden rounded-[40px] shadow-xl group">
            {/* Video Thumbnail */}
            <img
              src="/assetes/vigyan/videoimg.jpg"
              alt="Video Preview"
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay Image */}
            <img
              src="/assetes/vigyan/video-overlay.png"
              alt="Overlay Decoration"
              className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none z-10"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button
                onClick={() => setIsOpen(true)}
                className="w-20 h-20 bg-[#FDC331] hover:bg-[#e0ad25] text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Modal with Video */}
          {isOpen && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4"
              onClick={() => setIsOpen(false)}
            >
              <div
                className="relative w-[900px] h-[500px] bg-black rounded-xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Iframe */}
                <iframe
                  className="w-full h-full absolute inset-0"
                  src="https://www.youtube.com/embed/ckHzmP1evNU?autoplay=1"
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-gray-300 z-50"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right: FAQ Section */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-5 text-gray-900">
            Frequently Asked Questions
          </h2>

          {/* FAQ Question 1 */}
          <div className="mb-4">
            <button
              onClick={() => toggleFAQ(1)}
              className="w-full text-left text-lg font-semibold text-white bg-gray-900 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-500 px-4 py-2 rounded-md flex justify-between items-center"
            >
              What is robotics education?
              <span className="text-xl">
                {activeFAQ === 1 ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            {activeFAQ === 1 && (
              <p className="text-gray-700 mt-2 px-4">
                Robotics education involves learning the principles of designing, building, and programming robots. Students gain hands-on experience with robotics kits and work on projects to understand automation, control systems, and problem-solving techniques.
              </p>
            )}
          </div>

          {/* FAQ Question 2 */}
          <div className="mb-4">
            <button
              onClick={() => toggleFAQ(2)}
              className="w-full text-left text-lg font-semibold text-white bg-gray-900 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-500 px-4 py-2 rounded-md flex justify-between items-center"
              >
              What age group is suitable for robotics courses?
              <span className="text-xl">
                {activeFAQ === 2 ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            {activeFAQ === 2 && (
              <p className="text-gray-700 mt-2 px-4">
                Our robotics courses are designed for students of various age groups, ranging from young learners (7 years and up) to high school and college students. We offer beginner to advanced courses tailored to different skill levels.
              </p>
            )}
          </div>

          {/* FAQ Question 3 */}
          <div className="mb-4">
            <button
              onClick={() => toggleFAQ(3)}
              className="w-full text-left text-lg font-semibold text-white bg-gray-900 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-500 px-4 py-2 rounded-md flex justify-between items-center"
            >
              Do I need prior experience in robotics to join?
              <span className="text-xl">
                {activeFAQ === 3 ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            {activeFAQ === 3 && (
              <p className="text-gray-700 mt-2 px-4">
                No prior experience is required! Our courses are designed for beginners and advanced learners alike. You’ll start with the basics and gradually progress to more complex concepts as you go through the program.
              </p>
            )}
          </div>

          {/* FAQ Question 4 */}
          <div className="mb-4">
            <button
              onClick={() => toggleFAQ(4)}
              className="w-full text-left text-lg font-semibold text-white bg-gray-900 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-500 px-4 py-2 rounded-md flex justify-between items-center"
            >
              What types of robotics courses do you offer?
              <span className="text-xl">
                {activeFAQ === 4 ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            {activeFAQ === 4 && (
              <p className="text-gray-700 mt-2 px-4">
                We offer a wide range of robotics courses, including introductory courses on robotics, programming languages like Python and C++, automation, AI, and advanced robotics design and engineering courses.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
