"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from "react-router-dom"
const services = [
  {
    title: "STEM & Robotics Lab",
    description:
      "Hands-on STEM and robotics programs that foster critical thinking and technical skills.",
    video: "/assetes/school/Home/1.mp4",
  },
  {
    title: "AI & IoT Lab",
    description:
      "Equip students with real-world skills in Artificial Intelligence and Internet of Things.",
    video: "/assetes/school/Home/10.mp4",
  },
  {
    title: "AR/VR Lab",
    description:
      "Engage students through immersive learning experiences using Augmented and Virtual Reality.",
    video: "/assetes/school/Home/3.mp4",
  },
  {
    title: "21st Century Showcase School",
    description:
      "Support for institutions to adopt NEP-aligned innovation frameworks and learning environments.",
    video: "/assetes/school/Home/14.mp4",
  },
  {
    title: "Pre-Tinkering Lab",
    description:
      "Encouraging creativity in early learners with structured exploratory activities.",
    video: "/assetes/school/Home/15.mp4",
  },
  {
    title: "ATAL Tinkering Lab",
    description:
      "Turnkey solutions for ATL labs with DIY kits, mentorship, and training for innovation.",
    video: "/assetes/school/Home/12.mp4",
  },
];

const ServicesSection = () => {
  const [modalVideo, setModalVideo] = useState(null);

  const openModal = (video) => {
    setModalVideo(video);
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  return (
    <section
      id="services-section"
      className="w-full bg-gray-900 py-20 px-6 sm:px-10 lg:px-20"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
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

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-7 rounded">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition duration-500 p-6 flex flex-col group"
          >
            <div
              className="relative h-44 w-full mb-5 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openModal(service.video)}
            >
              <video
                src={service.video}
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-lg font-semibold">Play</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm flex-grow">
              {service.description}
            </p>
            <Link to="/about">
            <button className="mt-6 self-start bg-teal-700 p-3 rounded text-white font-medium hover:bg-red-800 transition">
              Learn More →
            </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative bg-black rounded-lg overflow-hidden w-[90%] max-w-3xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl hover:text-red-500 z-50"
            >
              <AiOutlineClose />
            </button>
            {/* Video Player with smaller size */}
            <video
              src={modalVideo}
              className="w-full max-h-[60vh] object-contain"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
