import React from "react";

const solutions = [
  {
    title: "AI Connect",
    image: "/assetes/vigyan/monitor.svg",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Innovation Lab",
    image: "/assetes/vigyan/s5law.svg",
    gradient: "from-green-400 to-blue-500",
  },
  {
    title: "DIY Kit",
    image: "/assetes/vigyan/s2.svg",
    gradient: "from-yellow-400 to-red-500",
  },
  {
    title: "Curriculum",
    image: "/assetes/vigyan/s4health.svg",
    gradient: "from-blue-400 to-indigo-500",
  },
];

const OurSolutions = () => {
  return (
    <section className="bg-gray-50 py-12 text-center">
      <div className="text-gray-900 font-semibold uppercase tracking-widest text-sm mb-3">
        Our Solutions
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Vigyan Pathshala's End To End <span className="text-gray-900">Solution</span> For 21st Century
      </h2>
      <p className="text-xl text-gray-900 mb-12">
        Schools in line with NEP 2020
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {solutions.map((solution, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${solution.gradient} text-white p-6 shadow-lg flex flex-col items-center justify-center rounded-tr-[2rem] rounded-bl-[2rem] transition-transform hover:-translate-y-1 duration-300`}
          >
            <img
              src={solution.image}
              alt={solution.title}
              className="w-16 h-16 mb-4 bg-white rounded-full p-2"
            />
            <p className="text-base font-semibold">{solution.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSolutions;
