import React from "react";

const transformItems = [
  {
    title: "Empowering kids to become Creative Thinkers & Problem Solvers",
    image: "/images/creative_kids.jpg", // update image path
  },
  {
    title: "Providing Integrated End-To-End Solution for Schools aligned with NEP",
    image: "/images/integrated_solution.jpg",
  },
  {
    title: "Equipping kids with Innovation & 21st Century Skills",
    image: "/images/innovation_skills.jpg",
  },
  {
    title: "Preparing Students for rapidly changing Technological World",
    image: "/images/tech_ready.jpg",
  },
];

const TransformSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
          Transforming Education And Fostering{" "}
          <span className="text-teal-600">Future Innovators Through</span>{" "}
          Our World-Class Curriculum And Pedagogy
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {transformItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover rounded-lg mb-4"
              />
              <h3 className="text-sm text-gray-700 font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
