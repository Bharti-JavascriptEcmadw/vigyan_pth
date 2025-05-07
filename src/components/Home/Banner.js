// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const images = [
//   // "/assetes/vigyan/Robot.png",
//   // "/assetes/vigyan/slider-1.jpg",
//   // "/assetes/vigyan/slider-3.jpg",
//   "/assetes/school/Home/20.jpg",
//   "/assetes/school/Home/26.jpg",

//   // "/assetes/school/29.jpg",

//   "/assetes/school/Home/23.jpg",

//   "/assetes/school/Home/21.jpg",

// ];

// const Banner = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // every 1 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] w-full bg-cover bg-center flex items-center justify-center transition-all  ease-in-out"
//       style={{
//         backgroundImage: `url('${images[currentIndex]}')`,
//       }}
//     >
//       {/* Gradient Overlay */}
//       {/* <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-100"></div> */}

//       {/* Content */}
//       <div className="relative z-10 text-white text-center px-4 sm:px-8 max-w-4xl animate-fadeIn">

//         <div className="bg-black bg-opacity-50 p-4 rounded-md animate-fade-in-slow">
//         <h3 className="animate-bounce-x text-yellow-400 uppercase text-sm sm:text-base mb-3 font-bold tracking-widest">

// Welcome to Vigyan Pathshala!
// </h3>
// <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-snug text-transparent bg-clip-text bg-teal-400  animate-zoom-in">
// Empowering Young Minds{" "}
// <span className="text-white text-4xl font-semibold ">Through Innovation & Technology</span>
// </h1>

//     </div>

//     <div className="mt-6 flex flex-wrap justify-center gap-4 animate-slide-up-delay">
//       <Link to="/about">
//   <button className="bg-teal-500 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-transform transform hover:scale-105">
//     ABOUT MORE →
//   </button>
//   </Link>
//   <Link to="/bookdemo">
//     <button className="bg-blue-700 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-transform transform hover:scale-105">
//       BOOK DEMO !!
//     </button>
//   </Link>
// </div>

//       </div>
//     </section>
//   );
// };

// export default Banner;





import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  // "/assetes/vigyan/Robot.png",
  // "/assetes/vigyan/slider-1.jpg",
  // "/assetes/vigyan/slider-3.jpg",
  "/assetes/school/Home/20.jpg",
  "/assetes/school/Home/26.jpg",

  // "/assetes/school/29.jpg",

  "/assetes/school/Home/23.jpg",

  "/assetes/school/Home/21.jpg",

];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner-section h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row h-full w-full">

        {/* Left Image */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full m-0 p-0 animate-image-zoom">
          <img
            src={images[currentIndex]}
            alt="Banner"
            className="w-full h-full object-cover m-0 p-0"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center md:items-start px-4 md:px-8 text-white text-center md:text-left animate-slide-text">
          <h3 className="animate-bounce-x text-yellow-400 uppercase text-sm sm:text-base mb-3 font-bold tracking-widest">
            Welcome to Vigyan Pathshala!
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Empowering Young Minds
            <span className="block text-gray-200">
              Through <span className="twinkle text-[#FFD700]">Innovation</span> & Technology
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-4">
            <Link to="/about">
              <button className="bg-teal-500 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition hover:scale-110">
                ABOUT MORE →
              </button>
            </Link>
            <Link to="/bookdemo">
              <button className="bg-blue-700 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition hover:scale-110">
                BOOK DEMO !!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
