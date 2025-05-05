






import React, { useState, useEffect } from "react";

const Banner = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const banners = [
    {
      logo: "About Us.",
      title: "50,000+ Students trained and mentored since 2018",
      description:
        "Advancing the Next Generation through Technological Advances",
      button: "About Services",
      image: "/assetes/about/banner2.jpeg",
    },
    {
      logo: "What is Vigyan Pathshala?",
      description:
        "Vigyan Pathshala Private Limited integrates robotics, science, and STEM in real projects. We offer hands-on learning with real-world applications, building critical thinking and problem-solving skills.",
      button: "Discover more",
      image: "/assetes/about/banner1.jpeg",
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentPage((prevPage) =>
        prevPage < banners.length - 1 ? prevPage + 1 : 0
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-full min-h-[70vh] sm:min-h-[60vh] md:min-h-[50vh] bg-gray-300 flex items-center justify-center px-4 sm:px-6 md:px-10 py-10  lg:h-auto  bg-gradient-to-r from-gray-900 to-teal-500">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16
      lg:mt-[50px]">
        
        {/* Left Card */}
        <div
          key={`left-${currentPage}`}
          className="w-full lg:w-1/2 bg-white  shadow-lg p-6 sm:p-8 md:p-10 animate-rotateYLeft origin-center transition-all duration-500 ease-in-out mt-6 sm:mt-4 md:mt-2"
        >
          <h1 className="text-lg xsm:text-xl sm:text-2xl font-bold text-teal-500 mb-3">
            {banners[currentPage].logo}
          </h1>

          {banners[currentPage].title && (
            <h2 className="text-base xsm:text-lg sm:text-xl md:text-2xl font-semibold text-pink mb-4">
              {banners[currentPage].title}
            </h2>
          )}

          <p className="text-sm xsm:text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            {banners[currentPage].description}
          </p>

          <button className="px-5 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base font-medium rounded-lg  bg-gray-900 text-white hover:bg-primaryGreen hover:text-white transition-colors duration-300">
            {banners[currentPage].button}
            <span className="ml-2">&rarr;</span>
          </button>
        </div>

        {/* Right Card */}
        <div
          key={`right-${currentPage}`}
          className="w-full lg:w-1/2 bg-white rounded-3xl shadow-lg overflow-hidden h-[250px] xsm:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] animate-rotateYRight origin-center transition-all duration-500 ease-in-out mt-6 sm:mt-4 md:mt-2"
        >
          <img
            src={banners[currentPage].image}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
