import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    image: "/assetes/SchoolP/2.jpg", 
    title: "Empowering kids to become Creative Thinkers & Problem Solvers",
  },
  {
    image: "/assetes/SchoolP/3.jpg", 
    title: "Providing Integrated End-To-End Solution for Schools aligned with NEP",
  },
  {
    image: "/assetes/SchoolP/4.jpg", 
    title: "Equipping kids with Innovation & 21st Century Skills",
  },
  {
    image: "/assetes/SchoolP/5.jpg", 
    title: "Preparing Students for rapidly changing Technological World",
  },
];

// Container variants for staggered animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Delay for each child animation
    },
  },
};

// Card variants for rotation effect
const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: -90, // Start with cards rotated
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0, // Rotate to normal position
    transition: {
      duration: 1, // Duration of the animation
      ease: "easeOut",
    },
  },
};

const School = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Set the mounted state to true when the component has mounted
  }, []);

  if (!hasMounted) {
    return null; // Avoid rendering until mounted
  }

  return (
    <section className="bg-[#0f172a] py-16 px-4 min-h-screen">
      <div className="text-center max-w-5xl mx-auto mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold leading-snug text-white tracking-wide">
          Transforming Education for{" "}
          <span className="text-cyan-400">Future</span>{" "}
          <span className="text-cyan-400">Innovators</span> with Tech-Powered Learning
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto perspective-3d"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants} // Animation applied to each card
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-cyan-500 rounded-xl p-4 text-center shadow-xl transform-style preserve-3d"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-4 border border-cyan-400"
            />
            <h3 className="text-cyan-300 text-md font-semibold tracking-tight">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default School;
