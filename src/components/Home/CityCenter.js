import React from "react";

const CityCenters = () => {
  const cities = [
    { name: "Lucknow", image: "/assets/vigyan/lucknow.jpg" },
    { name: "New Delhi", image: "/assets/vigyan/delhi.jpg" },
    { name: "Varanasi", image: "/assets/vigyan/varansi.jpg" },
    { name: "Barabanki", image: "/assets/vigyan/luck.jpg" },
    { name: "Allahabad", image: "/assets/vigyan/allahabad.jpg" },
    { name: "Kanpur", image: "/assets/vigyan/kanpur.jpg" },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Find Vigyan Pathshala in your city
          </h2>
          <p className="text-blue-500 font-bold mt-2">
            Available in <span className="text-indigo-600 font-semibold">cities</span>
          </p>
        </div>

        {/* Responsive City Cards */}
        <div className="flex flex-wrap sm:flex-nowrap sm:overflow-x-auto gap-4 justify-center sm:justify-start pb-2">
          {cities.map((city, idx) => (
            <div
              key={idx}
              className="w-[150px] sm:min-w-[160px] flex-shrink-0 border rounded-xl p-2 text-center hover:shadow-md transition duration-300 bg-white"
            >
              {/* Lazy Loading for Images */}
              <img
                src={city.image}
                alt={city.name}
                loading="lazy"  // Lazy load the images
                className="w-full h-24 object-cover rounded-md mb-2"
              />
              <h4 className="text-sm font-medium text-gray-700">{city.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityCenters;
