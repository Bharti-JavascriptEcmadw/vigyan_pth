// Continues scrolling in loop 


import React from "react";
// import "./TeamCarousel.css";

const teamMembers = [
  {
    name: "Harshal Jaiswal",
    role: "CTO & Founder",
    image: "/assets/about/Harshal.jpeg",
  },
  {
    name: "Sachin Kumar",
    role: "Co-Founder, Regional Manager, Prayagraj",
    image: "/assets/about/Sachin.jpeg",
  },
  {
    name: "Saurav Tiwari",
    role: "Business Strategist",
    image: "/assets/about/Saurav.webp",
  },
  {
    name: "Suraj Mishra",
    role: "Technical Head, Gorakhpur",
    image: "/assets/about/Suraj.jpeg",
  },
  {
    name: "Ajay Yadav",
    role: "Web Developer",
    image: "/assets/about/Ajay.jpeg",
  },
  {
    name: "Divya Tiwari",
    role: "Market Research Analyst",
    image: "/assets/about/Divya.jpeg",
  },
  {
    name: "Nagendra Gond",
    role: "Technical Support Executive",
    image: "/assets/about/Nagendra.jpeg",
  },
  {
    name: "Anushka Srivastava",
    role: "Assistant Technical Support, Prayagraj",
    image: "/assets/about/Anushka.jpeg",
  },
  {
    name: "Ayushi Chaurasia",
    role: "Digital Marketing Manager",
    image: "/assets/about/Ayushi.jpeg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-12">
        Meet Our Team Members
      </h1>

      <div className="carousel-wrapper overflow-hidden relative">
        <div className="carousel-track flex">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div key={index} className="carousel-card w-64 p-4 flex-shrink-0">
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">{member.name}</h3>
                <p className="text-sm text-teal-600 text-center">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
