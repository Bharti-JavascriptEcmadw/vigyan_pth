

import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaPlayCircle } from "react-icons/fa";
import { PiMedalBold, PiGlobeHemisphereWestFill } from "react-icons/pi";

const testimonials = [
  
  {
    description: `It's a matter of pride that the junior computer lab of Bal Bharti Public School has been selected by Intel and STEMROBO for setting up the Intel learning center. I think we all agree that the coming era is the era of Artificial intelligence and Machine learning. It's going to be all about the Internet of Things and the future world will comprise of drones and robots.`,
    name: "Geeta Gangwani",
    school: "Bal Bharti Public School, Rohini",
    image: "/assetes/test_book/03.jpg",
    rating: 5,
    score: 99,
  },
  {
    description: `A very exciting moment for us as we introduced Intel Learning Centre powered by STEMROBO. As we all know in today’s time, Artificial Intelligence, Coding, and experiential learning are the need of the hour, in today’s time as we are looking at New Education Policy that is working towards introducing 21st-century skills among students like creative thinking.`,
    name: "Pallavi Sharma",
    school: "Mamta Modern School",
    image: "/assetes/test_book/1.jpg",
    rating: 5,
    score: 99,
  },
  {
    description: `We are so delighted and grateful to Intel and STEMROBO Technologies for giving us this opportunity to be a part of this revolution. The resources that have been brought for our children through this AI lab will provide our children an opportunity to be a part of this revolution. Our Children will be going to be benefited from this Intel learning center.`,
    name: "Bhawana Kulshrestra",
    school: "Amity International School",
    image: "/assetes/test_book/02.jpg",
    rating: 5,
    score: 99,
  },
  {
    description: `Another testimonial repeated for scroll test. Bal Bharti Public School has been selected by Intel and STEMROBO. The future world will comprise of drones and robots.`,
    name: "Geeta Gangwani",
    school: "Bal Bharti Public School, Rohini",
    image: "/assetes/test_book/1.jpg",
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
    <section className="bg-[#0f0f0f] text-white py-20 px-6">
      {/* Section Title */}
   

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-1 gap-10 items-center relative">
        {/* Left Column */}
        <div className="flex flex-col items-center text-center">
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold mb-4">Voices That Inspire</h2>
    </div>

  <div className="flex gap-10 mb-10 justify-center">
    <div className="flex items-center gap-3">
      <PiMedalBold className="text-4xl text-cyan-400" />
      <div>
        <h3 className="text-3xl font-bold">15+</h3>
        <p className="text-sm text-gray-400">Years Of Experience</p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <PiGlobeHemisphereWestFill className="text-4xl text-cyan-400" />
      <div>
        <h3 className="text-3xl font-bold">150K+</h3>
        <p className="text-sm text-gray-400">Worldwide Users</p>
      </div>
    </div>
  </div>

  <div className="flex gap-6 justify-center">
  <button
  onClick={() => setShowVideo(true)}
  className="flex items-center gap-2 border border-gray-500 px-6 py-3 rounded-full hover:bg-gray-800"
>
  <FaPlayCircle className="text-cyan-400" />
  Watch Intro
</button>
{showVideo && (
  <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
    <div className="relative bg-black rounded-xl overflow-hidden w-full max-w-3xl">
      <button
        onClick={() => setShowVideo(false)}
        className="absolute top-2 right-2 text-white text-2xl hover:text-red-500"
      >
        &times;
      </button>
      <iframe
  className="w-full h-[400px]"
  src="https://www.youtube.com/embed/ckHzmP1evNU"
  title="Intro Video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

    </div>
  </div>
)}

  </div>
</div>

        {/* Right Column - Testimonials */}
        <div className="relative text-center">
        
          <h2 className="text-3xl font-bold mb-10">Hear From Our Associated Schools!</h2>

          {/* Manual arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 text-black"
            onClick={() => manualScroll(-300)}
          >
            <FaChevronLeft />
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 text-black"
            onClick={() => manualScroll(300)}
          >
            <FaChevronRight />
          </button>

          {/* Scrollable testimonials */}
          <div
  ref={scrollRef}
  className="flex overflow-x-auto gap-6 px-4 scroll-smooth scrollbar-hide"
>
  {testimonials.map((item, index) => (
    <div
      key={index}
      className="relative bg-white text-black rounded-2xl shadow-lg min-w-[300px] max-w-sm p-6 flex-shrink-0 border-b-4 border-teal-400 fon-bold"
    >
      <div className="flex items-center mb-3">
        {Array.from({ length: item.rating }, (_, i) => (
          <FaStar key={i} className="text-teal-400 mr-1 font-bold" /> // Changed from yellow to teal
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-teal-400 text-white rounded-bl-xl px-3 py-1 font-bold">
        {item.score}
      </div>
      <p className="text-gray-700 text-sm mb-6 leading-relaxed font-bold">{item.description}</p>
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-teal-400 font-bold"
        />
        <div>
          <h4 className="text-md font-bold">{item.name}</h4>
          <p className="text-sm text-teal-400 font-bold">{item.school}</p>
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
