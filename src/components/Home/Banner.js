// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const images = [
//   "/assetes/vigyan/Robot.png",
//   "/assetes/vigyan/slider-1.jpg",
//   "/assetes/vigyan/robot1.avif",
// ];

// const Banner = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 1000); // every 4 seconds
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
//       <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-500"></div>

//       {/* Content */}
//       <div className="relative z-10 text-white text-center px-4 sm:px-8 max-w-4xl animate-fade-in">
//         <h3 className="text-yellow-500 uppercase text-sm sm:text-base mb-3 font-bold tracking-widest text-transparent  animate-slide-up">
//           Welcome to Vigyan Pathshala!
//         </h3>
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-snug text-transparent bg-clip-text bg-teal-500  animate-zoom-in">
//           Empowering Young Minds{" "}
//           <span className="text-white text-4xl font-semibold ">Through Innovation & Technology</span>
//         </h1>

//         {/* <div className="bg-black bg-opacity-50 p-4 rounded-md animate-fade-in-slow">
//           <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-white text-xs sm:text-sm md:text-base font-semibold tracking-wide">
//             Preparing students for future technologies like cutting-edge
//             innovations and robotics involves a mix of technical knowledge,
//             hands-on experience, and the right mindset.
//           </p>
//         </div> */}

// <div className="mt-6 flex flex-wrap justify-center gap-4 animate-slide-up-delay">
  
// <Link to="/bookdemo">
//   <button className="bg-teal-500 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-transform transform hover:scale-105">
//     ABOUT MORE →
//   </button>
//   </Link>
  
//   <Link to="/about">
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


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const images = [
//   "/assetes/vigyan/Robot.png",
//   "/assetes/vigyan/slider-1.jpg",
//   "/assetes/vigyan/robot1.avif",
// ];

// const Banner = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // change image every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-gradient-to-br from-gray-900 to-teal-500 py-10 sm:py-16 md:py-20 lg:py-24 px-4">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
//         {/* Image - Left Side */}
//         <div className="w-full md:w-1/2 animate-slide-in-left">
//           <img
//             src={images[currentIndex]}
//             alt="Banner"
//             className="shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-all duration-700"
//           />
//         </div>

//         {/* Text Content - Right Side */}
//         <div className="w-full md:w-1/2 text-center md:text-left text-white animate-slide-in-right">
//           <h3 className="text-yellow-400 uppercase text-sm sm:text-base mb-3 font-bold tracking-widest">
//             Welcome to Vigyan Pathshala!
//           </h3>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
//             Empowering Young Minds{" "}
//             <span className="text-teal-400 block">Through Innovation & Technology</span>
//           </h1>

//           <div className="mt-6 flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-4">
//             <Link to="/about">
//               <button className="bg-teal-500 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105">
//                 ABOUT MORE →
//               </button>
//             </Link>

//             <Link to="/bookdemo">
//               <button className="bg-blue-700 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105">
//                 BOOK DEMO !!
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./Banner.css"; // Custom styles for animations

const images = [
  "/assetes/vigyan/Robot.png",
  "/assetes/vigyan/slider-1.jpg",
  "/assetes/vigyan/robot1.avif",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner-section h-[90vh] px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Image */}
        <div className="w-full md:w-1/2 h-full animate-image-zoom">
          <img
            src={images[currentIndex]}
            alt="Banner"
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left px-2 md:px-4 animate-slide-text">
        <h3 className="animate-bounce-x text-yellow-400 uppercase text-sm sm:text-base mb-3 font-bold tracking-widest">
  Welcome to Vigyan Pathshala!
</h3>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Empowering Young Minds
            <span className="block text-cyan-300">Through Innovation & Technology</span>
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
