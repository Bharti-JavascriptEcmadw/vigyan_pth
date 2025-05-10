// // import React, { useEffect, useState } from "react";
// // import { motion } from "framer-motion";

// // const features = [
// //   {
// //     image: "/assetes/video_gallery/2.jpg", 
// //     title: "Empowering kids to become Creative Thinkers & Problem Solvers",
// //   },
// //   {
// //     image: "/assetes/video_gallery/9.jpg", 
// //     title: "Providing Integrated End-To-End Solution for Schools aligned with NEP",
// //   },
// //   {
// //     image: "/assetes/video_gallery/11.jpeg", 
// //     title: "Equipping kids with Innovation & 21st Century Skills",
// //   },
// //   {
// //     image: "/assetes/video_gallery/12.jpeg", 
// //     title: "Preparing Students for rapidly changing Technological World",
// //   },
// // ];

// // // Container variants for staggered animations
// // const containerVariants = {
// //   hidden: {},
// //   visible: {
// //     transition: {
// //       staggerChildren: 0.3, // Delay for each child animation
// //     },
// //   },
// // };

// // // Card variants for rotation effect
// // const cardVariants = {
// //   hidden: {
// //     opacity: 0,
// //     scale: 0.8,
// //     rotateY: -90, // Start with cards rotated
// //   },
// //   visible: {
// //     opacity: 1,
// //     scale: 1,
// //     rotateY: 0, // Rotate to normal position
// //     transition: {
// //       duration: 1, // Duration of the animation
// //       ease: "easeOut",
// //     },
// //   },
// // };

// // const TransfEdu = () => {
// //   const [hasMounted, setHasMounted] = useState(false);

// //   useEffect(() => {
// //     setHasMounted(true); // Set the mounted state to true when the component has mounted
// //   }, []);

// //   if (!hasMounted) {
// //     return null; // Avoid rendering until mounted
// //   }

// //   return (
// //     <section className="bg-white py-16 px-4 min-h-screen">
// //       <div className="text-center max-w-5xl mx-auto mb-12 px-4">
// //         <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug tracking-wide">
// //           Transforming Education for{" "}
// //           <span className="text-cyan-400">Future</span>{" "}
// //           <span className="text-cyan-400">Innovators</span> with Tech-Powered Learning
// //         </h2>
// //       </div>

// //       <motion.div
// //         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
// //         variants={containerVariants}
// //         initial="hidden"
// //         animate="visible"
// //       >
// //         {features.map((item, idx) => (
// //           <motion.div
// //             key={idx}
// //             variants={cardVariants} // Animation applied to each card
// //             className="bg-white border border-cyan-500 rounded-xl p-6 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-teal-600"
// //           >
// //             <img
// //               src={item.image}
// //               alt={item.title}
// //               className="w-full h-48 object-cover rounded-md mb-4 border-2 border-cyan-400"
// //             />
// //             <h3 className="text-black text-md font-semibold tracking-tight">{item.title}</h3>
// //           </motion.div>
// //         ))}
// //       </motion.div>
// //     </section>
// //   );
// // };

// // export default TransfEdu;


// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// const features = [
//   {
//     image: "/assetes/video_gallery/2.jpg",
//     title: "Empowering kids to become Creative Thinkers & Problem Solvers",
//   },
//   {
//     image: "/assetes/video_gallery/9.jpg",
//     title: "Providing Integrated End-To-End Solution for Schools aligned with NEP",
//   },
//   {
//     image: "/assetes/video_gallery/11.jpeg",
//     title: "Equipping kids with Innovation & 21st Century Skills",
//   },
//   {
//     image: "/assetes/video_gallery/12.jpeg",
//     title: "Preparing Students for rapidly changing Technological World",
//   },
// ];

// const TransfEdu = () => {
//   const carouselRef = useRef(null);
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);

//     const interval = setInterval(() => {
//       if (!carouselRef.current) return;

//       const container = carouselRef.current;
//       const scrollStep = 1;
//       const maxScrollLeft = container.scrollWidth - container.clientWidth;

//       if (container.scrollLeft >= maxScrollLeft) {
//         container.scrollTo({ left: 0, behavior: "auto" });
//       } else {
//         container.scrollBy({ left: scrollStep, behavior: "smooth" });
//       }
//     }, 30);

//     return () => clearInterval(interval);
//   }, []);

//   if (!hasMounted) return null;

//   return (
//     <section className="bg-white py-16 px-4">
//       <div className="text-center max-w-5xl mx-auto mb-12 px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug tracking-wide">
//           Transforming Education for{" "}
//           <span className="text-cyan-400">Future</span>{" "}
//           <span className="text-cyan-400">Innovators</span> with Tech-Powered Learning
//         </h2>
//       </div>

//       <div
//         ref={carouselRef}
//         className="flex overflow-x-auto gap-4 px-1 max-w-7xl mx-auto scroll-smooth scrollbar-hide bg-red-200"
//       >
//         {features.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             className="min-w-[100px] sm:min-w-[200px] bg-white border border-cyan-400 p-4 text-center shadow-md flex-shrink-0 hover:scale-105 hover:bg-teal-600 hover:text-white transition duration-300"
//             style={{
//               borderTopLeftRadius: "10%",
//               borderBottomRightRadius: "10%",
//             }}
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-32 object-cover mb-3 border border-cyan-300 rounded-md"
           
//             />
//             <h3 className="text-sm font-medium">{item.title}</h3>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TransfEdu;


import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    image: "/assetes/video_gallery/2.jpg",
    title: "Empowering kids to become Creative Thinkers & Problem Solvers",
  },
  {
    image: "/assetes/video_gallery/9.jpg",
    title: "Providing Integrated End-To-End Solution for Schools aligned with NEP",
  },
  {
    image: "/assetes/video_gallery/11.jpeg",
    title: "Equipping kids with Innovation & 21st Century Skills",
  },
  {
    image: "/assetes/video_gallery/12.jpeg",
    title: "Preparing Students for rapidly changing Technological World",
  },
];

const TransfEdu = () => {
  const carouselRef = useRef(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const interval = setInterval(() => {
      if (!carouselRef.current || isHovered) return;

      const container = carouselRef.current;
      const scrollStep = 1;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      container.scrollLeft += scrollStep;

      // Reset to the start when halfway through the duplicated content
      if (container.scrollLeft >= scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isHovered]);

  if (!hasMounted) return null;

  // Duplicate the features to allow seamless scrolling
  const duplicatedFeatures = [...features, ...features];

  return (
    <section className="bg-white py-16 px-4">
      <div className="text-center max-w-5xl mx-auto mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug tracking-wide">
        Transforming Education and Fostering Future Innovators through our world-class curriculum and pedagogy
        </h2>
      </div>

      <div
        ref={carouselRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex overflow-x-auto gap-6 px-2 py-4 max-w-7xl mx-auto scroll-smooth scrollbar-hide"
      >
        {duplicatedFeatures.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: (index % features.length) * 0.2 }}
            className="w-[250px] h-[320px] bg-white border border-cyan-400 p-4 text-center shadow-xl flex-shrink-0 hover:scale-105 hover:bg-cyan-600 hover:text-white transition duration-300 rounded-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[140px] object-cover mb-3 rounded-md border border-cyan-300"
            />
            <h3 className="text-sm font-medium line-clamp-3">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TransfEdu;
