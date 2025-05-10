// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const images = [
//   // "/assetes/vigyan/Robot.png",
//   // "/assetes/vigyan/slider-1.jpg",
//   // "/assetes/vigyan/slider-3.jpg",
//   // "/assetes/school/Home/20.jpg",
//   // "/assetes/school/Home/26.jpg",

//   // "/assetes/school/29.jpg",

//   // "/assetes/school/Home/23.jpg",

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
// <h3 className="animate-bounce-x text-yellow-400 uppercase text-sm sm:text-base mb-3 font-bold tracking-widest">
// Welcome to Vigyan Pathshala!
// </h3>
// <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-snug text-transparent bg-clip-text bg-teal-400  animate-zoom-in">
// Empowering Young Minds{" "}
// <span className="text-white text-4xl font-semibold ">Through Innovation & Technology</span>
// </h1>
// <h1 className="animate-bounce-x text-blue-900 uppercase text-sm sm:text-base mb-3 font-bold tracking-widest">

// Provide a free, world-class education for anyone, anywhere.</h1>
//     </div>

//     <div className="mt-6 flex flex-wrap justify-center gap-4 animate-slide-up-delay">
//       <Link to="/about">
//   <button className="bg-teal-500 hover:bg-green-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-transform transform hover:scale-105">
//     Teachers
//   </button>
//   </Link>
//   <Link to="/bookdemo">
//     <button className="bg-blue-700 hover:bg-green-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-transform transform hover:scale-105">
//       Learners
//     </button>
//   </Link>
// </div>

//       </div>
//     </section>
//   );
// };

// export default Banner;











// import React, { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";



// const Banner = () => {
//   const images = useMemo(()=>[
//   "/assets/Home/home_Banner.jpg",

//   "/assets/Home/R3.png",
//   "/assets/Home/26.jpg",
//   "/assets/Home/23.jpg",
//   "/assets/Home/21.jpg",


// ],[])
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images]);

//   return (
//     <section className="w-full bg-gray-100 overflow-hidden py-6 sm:py-8 md:py-12 lg:py-16">

      
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-y-10 md:gap-y-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

//         {/* Left: Image Slider */}
//         <div className="w-full md:w-1/2 flex justify-center items-center animate-rotateYLeft origin-center transition-all duration-500 ease-in-out  center-top ">
//           <div className="w-[90%] h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] xl:h-[480px] shadow-xl bg-white overflow-hidden "
//             style={{ borderTopLeftRadius: "40%" }}>
//             <img
//               src={images[currentIndex]}
//               alt="Banner"
//                 loading="lazy"

//               className="w-full h-full object-cover transition-all duration-700 ease-in-out "
//             />
//           </div>
//         </div>




//         {/* Right Content */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left text-black px-2">
//        {/* Gradient Overlay */}
//        {/* <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-100"></div> */}

//        {/* Content */}

//         {/* <div className="bg-black bg-opacity-50 p-4 rounded-md animate-fade-in-slow">
// <h3 className="animate-bounce-x text-yellow-400 uppercase text-sm sm:text-base mb-3 font-bold tracking-widest">
//  Welcome to Vigyan Pathshala!
//  </h3> */}

// <div className="marquee-loop text-yellow-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-3 tracking-widest">
//   <span>"Learn Robotics"</span>
// </div>
//           <h2 className=" animate-bounce-x text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 leading-tight font-semibold">
//             Empowering Young Minds
//             <span className="block ">
//               Through <span className="twinkle text-blue-700 font-bold fade-in">Innovation</span> & Technology
//             </span>
//           </h2>


//           <h3 className="uppercase text-sm sm:text-base md:text-lg mb-2 tracking-wide">
//             For every student, every classroom, Real results.
//           </h3>

//           <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black max-w-2xl leading-relaxed mb-6 sm:mr-5
//           xsm:mx-2">
//             Our mission is to provide <span className="font-medium">world-class education</span> for anyone, anywhere — 
//             blending <span className="text-blue-700 font-medium">robotics</span>, 
//             <span className="text-green-700 font-medium"> coding</span>, and real-world tech 
//             to prepare students for the future.
//           </p>

//           <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-4">
//             <Link to="/success-story">
//               <button className="bg-blue-700 hover:bg-green-700 text-white px-6 py-3 rounded-full transition hover:scale-105 text-xs sm:text-sm md:text-base">
//                 Watch Video
//               </button>
//             </Link>
//             <Link to="/bookdemo">
//               <button className="bg-blue-700 hover:bg-green-700 text-white px-6 py-3 rounded-full transition hover:scale-105 text-xs sm:text-sm md:text-base">
//               Book Demo              </button>
//             </Link>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Banner;


import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const images = useMemo(() => [
    // "/assets/Home/home_Banner.jpg",
    // "/assets/Home/R3.png",
    // "/assets/Home/26.jpg",
    // "/assets/Home/23.jpg",
    // "/assets/Home/21.jpg",


     "/assets/video_gallery/7.jpg",
    // "/assets/Home/R3.png",
    "/assets/Home/26.jpg",
    // "/assets/Home/23.jpg",
    "/assets/Home/21.jpg",
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setImageLoaded(false); // reset image load state
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="w-full bg-gradient-to-br from-[#f9f9f9] to-[#f0f4ff] overflow-hidden py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
        
        {/* Left: Image Slider */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div
            className="relative w-[90%] h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] xl:h-[480px] bg-white rounded-tl-[40%] shadow-xl overflow-hidden"
          >
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center text-gray-600 text-sm">
                Loading...
              </div>
            )}
            <img
              src={images[currentIndex]}
              alt="Banner"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="text-yellow-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-3 tracking-widest">
            “Learn Robotics”
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black leading-snug mb-3">
            Empowering Young Minds
            <span className="block text-blue-700">Through Innovation & Tech</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 mb-4 max-w-xl">
            Our mission is to provide <span className="font-semibold">world-class education</span> for everyone — 
            blending <span className="text-blue-700 font-semibold">robotics</span>, 
            <span className="text-green-700 font-semibold"> coding</span>, and tech 
            to prepare kids for the future.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/success-story">
              <button className="bg-blue-700 hover:bg-green-600 text-white px-5 py-2 rounded-full transition hover:scale-105 text-sm">
                Watch Video
              </button>
            </Link>
            <Link to="/bookdemo">
              <button className="bg-green-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition hover:scale-105 text-sm">
                Book Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
