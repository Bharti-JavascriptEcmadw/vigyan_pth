import React from "react";

const schools = [
  { name: "Unity Public School", image: "/assets/Gallery/schoolp1.jpeg" },
  { name: "VEDAM World School", image: "/assets/Gallery/schoolp2.jpeg", },
  { name: "Savitri Public School", image:  "/assets/Gallery/6.jpg", },
  { name: "The Millennium", image:  "/assets/video_gallery/9.jpg", },
];

const TrainedSchoolsCarousel = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
Our Partner Schools      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {schools.map((school, index) => (
          <div
            key={index}
            className="w-[280px] bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={school.image}
              alt={school.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-700">{school.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainedSchoolsCarousel;
