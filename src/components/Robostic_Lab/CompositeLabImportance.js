import React from "react";

const CompositeLabImportance = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 leading-tight">
            The Importance Of <br />
            Composite Robotics Labs In CBSE Schools
          </h2>

          <p className="text-gray-700 mb-4">
            A Composite Robotics Lab is more than just a classroom; it’s a dynamic learning
            environment where students engage in vocational courses that foster skill development
            and prepare them for future careers. These labs are crucial in developing essential
            skills that align with industry standards, ensuring students are job-ready upon
            graduation.
          </p>

          <p className="text-gray-700 mb-4">
            The introduction of Composite Robotics Labs in CBSE schools also supports the
            development of entrepreneurial capabilities among students, encourages multidisciplinary
            learning, and fosters critical thinking. As part of the NEP 2020 mandate, these labs are
            designed to be the cornerstone of practical, hands-on education, ensuring students are
            adaptable and well-prepared for the rapidly changing job market.
          </p>

          <p className="text-gray-700">
            By setting up Composite Robotics Labs, schools not only comply with CBSE’s mandates but
            also invest in the future of their students, providing them with the tools and
            experiences necessary to thrive in the digital age.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
             src="/assetes/video_gallery/2.jpg" // Change this path to your actual image location
            // Replace with your actual image path
            alt="Student with laptop"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CompositeLabImportance;
