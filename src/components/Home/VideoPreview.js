import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="w-full bg-white py-16 bg-gradient-to-bl from-gray-100 to-gray-100">
      <div className="w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 bg-white rounded-xl shadow-xl p-8">
        {/* Left: Image Preview Section */}
        <div className="relative w-full lg:w-1/2 rounded-[40px] shadow-xl overflow-hidden">
          {/* Image Preview */}
          <img
            src="/assets/vigyan/videoimg.jpg"
            alt="Video Preview"
            className="w-full h-[500px] object-cover rounded-[40px] cursor-pointer"
            onClick={() => setIsOpen(true)}
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
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

          {/* Modal Video */}
          {isOpen && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4"
              onClick={() => setIsOpen(false)}
            >
              <div
                className="relative w-[900px] h-[500px] bg-black rounded-xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  className="w-full h-full absolute inset-0"
                  controls
                  autoPlay
                  muted
                >
                  <source src="/assets/video_gallery/33.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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

          {[1, 2, 3, 4].map((index) => {
            const questions = [
              'What is robotics education?',
              'What age group is suitable for robotics courses?',
              'Do I need prior experience in robotics to join?',
              'What types of robotics courses do you offer?'
            ];

            const answers = [
              'Robotics education involves learning the principles of designing, building, and programming robots. Students gain hands-on experience with robotics kits and work on projects to understand automation, control systems, and problem-solving techniques.',
              'Our robotics courses are designed for students of various age groups, ranging from young learners (7 years and up) to high school and college students. We offer beginner to advanced courses tailored to different skill levels.',
              'No prior experience is required! Our courses are designed for beginners and advanced learners alike. You’ll start with the basics and gradually progress to more complex concepts as you go through the program.',
              'We offer a wide range of robotics courses, including introductory courses on robotics, programming languages like Python and C++, automation, AI, and advanced robotics design and engineering courses.'
            ];

            return (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left text-lg font-semibold text-white bg-gray-900 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-500 px-4 py-2 rounded-md flex justify-between items-center"
                >
                  {questions[index - 1]}
                  <span className="text-xl">
                    {activeFAQ === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                {activeFAQ === index && (
                  <p className="text-gray-700 mt-2 px-4">{answers[index - 1]}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
