"use client";
import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "STEM & Robotics Lab",
    description:
      "Hands-on STEM and robotics programs that foster critical thinking and technical skills.",
    image: "/assetes/vigyan/our1.jpg",
  },
  {
    title: "AI & IoT Lab",
    description:
      "Equip students with real-world skills in Artificial Intelligence and Internet of Things.",
    image: "/assetes/vigyan/our1.jpg",
  },
  {
    title: "AR/VR Lab",
    description:
      "Engage students through immersive learning experiences using Augmented and Virtual Reality.",
    image: "/assetes/vigyan/our1.jpg",
  },
  {
    title: "21st Century Showcase School",
    description:
      "Support for institutions to adopt NEP-aligned innovation frameworks and learning environments.",
    image: "/assetes/vigyan/our1.jpg",
  },
  {
    title: "Pre-Tinkering Lab",
    description:
      "Encouraging creativity in early learners with structured exploratory activities.",
    image: "/assetes/vigyan/our1.jpg",
  },
  {
    title: "ATAL Tinkering Lab",
    description:
      "Turnkey solutions for ATL labs with DIY kits, mentorship, and training for innovation.",
    image: "/assetes/vigyan/our1.jpg",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services-section"
      className="w-full bg-gray-900 py-20 px-6 sm:px-10 lg:px-20"
    >
      {/* Header */}
      <div
        className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-3">
          Our Services
        </h3>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Future-Ready{" "}
          <span className="text-indigo-600">Learning Solutions</span>
        </h2>
        <p className="text-white text-base">
          Discover how our technology-driven labs are transforming schools and
          empowering students.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-7 rounded">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition duration-700 p-6 flex flex-col group transform ${
              isVisible
                ? `animate-fadeInUp delay-[${index * 100}ms]`
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative h-44 w-full mb-5 rounded-xl overflow-hidden group">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 translate-y-[-100%] scale-110 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-xl pointer-events-none z-10"></div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm flex-grow">
              {service.description}
            </p>
            <button className="mt-6 self-start bg-teal-700 p-3 rounded text-white font-medium hover:bg-red-800 transition">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
