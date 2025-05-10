

import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaPlayCircle } from "react-icons/fa";
import { PiMedalBold, PiGlobeHemisphereWestFill } from "react-icons/pi";

const testimonials = [
  
  {
    description: `It's a matter of pride that the junior computer lab of Bal Bharti Public School has been selected by Intel and STEMROBO for setting up the Intel learning center. I think we all agree that the coming era is the era of Artificial intelligence and Machine learning. It's going to be all about the Internet of Things and the future world will comprise of drones and robots.`,
    name: "Geeta Gangwani",
    school: "Bal Bharti Public School, Rohini",
    image: "/assets/Success/3.jpg",
    rating: 5,
    score: 99,
  },
  {
    description: `A very exciting moment for us as we introduced Intel Learning Centre powered by STEMROBO. As we all know in today’s time, Artificial Intelligence, Coding, and experiential learning are the need of the hour, in today’s time as we are looking at New Education Policy that is working towards introducing 21st-century skills among students like creative thinking.`,
    name: "Pallavi Sharma",
    school: "Mamta Modern School",
    image: "/assets/Success/1.jpg",
    rating: 5,
    score: 99,
  },
  {
    description: `We are so delighted and grateful to Intel and STEMROBO Technologies for giving us this opportunity to be a part of this revolution. The resources that have been brought for our children through this AI lab will provide our children an opportunity to be a part of this revolution. Our Children will be going to be benefited from this Intel learning center.`,
    name: "Bhawana Kulshrestra",
    school: "Amity International School",
    image: "/assets/Success/2.jpg",
    rating: 5,
    score: 99,
  },
  {
    description: `Another testimonial repeated for scroll test. Bal Bharti Public School has been selected by Intel and STEMROBO. The future world will comprise of drones and robots.`,
    name: "Geeta Gangwani",
    school: "Bal Bharti Public School, Rohini",
    image: "/assets/Success/1.jpg",
    rating: 5,
    score: 99,
  },
    {
    description: `A very exciting moment for us as we introduced Intel Learning Centre powered by STEMROBO. As we all know in today’s time, Artificial Intelligence, Coding, and experiential learning are the need of the hour, in today’s time as we are looking at New Education Policy that is working towards introducing 21st-century skills among students like creative thinking.`,
    name: "Pallavi Sharma",
    school: "Mamta Modern School",
    image: "/assets/Success/1.jpg",
    rating: 5,
    score: 99,
  },
];

const Ourpartner = () => {
  const scrollRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("right");
  const [showVideo, setShowVideo] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const scrollAmount = 300;

      if (scrollDirection === "right") {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
          setScrollDirection("left");
        }
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        if (container.scrollLeft <= 10) {
          setScrollDirection("right");
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [scrollDirection]);

  const manualScroll = (scrollOffset) => {
    scrollRef.current?.scrollBy({ left: scrollOffset, behavior: "smooth" });
  };

  return (
    <section className="bg-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Voices That Inspire</h2>
      </div>
  
      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-8 mb-6">
        <div className="flex items-center gap-3">
          <PiMedalBold className="text-4xl text-cyan-400" />
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">7+</h3>
            <p className="text-sm text-gray-400">Years Of Experience</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <PiGlobeHemisphereWestFill className="text-4xl text-cyan-400" />
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">150K+</h3>
            <p className="text-sm text-gray-400"> Users</p>
          </div>
        </div>
      </div>
  
      {/* Watch Intro Button */}
      <div className="text-center">
        <button
          onClick={() => setShowVideo(true)}
          className="inline-flex items-center gap-2 border border-gray-500 px-6 py-3 rounded-full hover:bg-gray-700 transition"
        >
          <FaPlayCircle className="text-cyan-400" />
          Watch Intro
        </button>
      </div>
  
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4">
          <div className="relative bg-black rounded-xl overflow-hidden w-full max-w-3xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white text-2xl hover:text-red-500"
            >
              &times;
            </button>
            <iframe
              className="w-full h-[250px] sm:h-[400px]"
              src="https://www.youtube.com/embed/ckHzmP1evNU"
              title="Intro Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
  
      {/* Testimonials */}
      <div className="relative">
        <h3 className="text-center text-xl sm:text-2xl font-bold mb-6">
          Hear From Our Associated Schools!
        </h3>
  
        {/* Arrows */}
        <button
          className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 text-black"
          onClick={() => manualScroll(-300)}
        >
          <FaChevronLeft />
        </button>
        <button
          className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 text-black"
          onClick={() => manualScroll(300)}
        >
          <FaChevronRight />
        </button>
  
        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-2 sm:px-6 scroll-smooth scrollbar-hide"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl shadow-lg min-w-[80%] sm:min-w-[300px] max-w-xs p-6 flex-shrink-0 border-b-4 border-teal-400"
            >
              <div className="flex items-center mb-3">
                {Array.from({ length: item.rating }, (_, i) => (
                  <FaStar key={i} className="text-teal-400 mr-1" />
                ))}
              </div>
              <div className="absolute top-0 right-0 bg-teal-400 text-white rounded-bl-xl px-3 py-1 font-bold">
                {item.score}
              </div>
              <p className="text-gray-700 text-sm mb-4 font-semibold leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-400"
                />
                <div>
                  <h4 className="font-bold text-md">{item.name}</h4>
                  <p className="text-sm text-teal-500 font-medium">{item.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Ourpartner;
