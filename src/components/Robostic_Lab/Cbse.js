import React from "react";

const Cbse = () => {
  return (
    <div className="bg-[#fdfbf6] flex flex-col items-center mb-5">
      {/* Top Section */}
      <div className="w-full max-w-[1500px] flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between mt-10 h-auto sm:h-[80vh]">
        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/assetes/video_gallery/2.jpg" // Change this path to your actual image location
            alt="Top Banner"
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover lg:max-w-[95%] lg:h-[400px]"
          />
        </div>
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">
            Store locator
          </h1>
          <p className="text-gray-600 mb-8">
          A Composite Robotics Lab is an innovative initiative mandated by the Central Board of Secondary Education (CBSE) to enhance skill-based education in schools across India. These labs are designed to provide students with hands-on training in various fields, bridging the gap between theoretical learning and real-world application. Whether it’s an AI Skill Lab, Electronics Skill Lab, or AI & Robotics Skills Lab, these facilities are essential for equipping students with the practical knowledge and expertise needed to thrive in today’s competitive environment.

The CBSE Composite Robotics Labs are part of a broader effort to align with the goals of the National Education Policy (NEP) 2020 and the National Curriculum Framework for School Education (NCF-SE). These policies emphasize the importance of integrating skill-based education alongside traditional academic subjects to prepare students for diverse career opportunities and to foster 21st-century skills.          </p>
          <div className="flex justify-center">
            <button className="flex items-center px-7 py-4 border border-gray-800 text-gray-800 hover:bg-gray-100">
              Find a nearby Store
              <span className="ml-5">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cbse;