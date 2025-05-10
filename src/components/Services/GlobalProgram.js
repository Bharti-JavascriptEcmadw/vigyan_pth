import React, { useEffect, useRef } from "react";

const features = [
  {
    title: "Grade-wise Progressive Curriculum",
    img: "/assetes/SchoolProgram/tick.png", 
    points: [
      "Customized, progressive curriculum per grade.",
      "Individual LMS subscription for each student & teacher.",
      "Integrated with core academic subjects.",
    ],
  },
  {
    title: "Innovation Lab Setup at School",
    img: "/assetes/SchoolProgram/tick.png", 
    points: [
      "DIY Kits & Equipment for lab setup by Vigyan Pathshala.",
      "Design and infrastructure assistance.",
      "Cost-effective kits and setup.",
    ],
  },
  {
    title: "Training & Execution Support",
    img: "/assetes/SchoolProgram/tick.png", // Replace with your actual path
    points: [
      "Training sessions for teachers and students.",
      "Quarterly student assessments.",
      "Support in competitions & exhibitions.",
    ],
  },
  {
    title: "Global Participation",
    img: "/assetes/SchoolProgram/tick.png", 
    points: [
      "Support for international competitions like ISTO, SIL, etc.",
    ],
  },
];

const GlobalProgram = () => {
  const cardRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rotate-y-0", "opacity-100");
            entry.target.classList.remove("rotate-y-90", "opacity-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    const textObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scale-in", "opacity-100");
            entry.target.classList.remove("scale-out", "opacity-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach(ref => ref && observer.observe(ref));
    textRefs.current.forEach(ref => ref && textObserver.observe(ref));

    return () => {
      cardRefs.current.forEach(ref => ref && observer.unobserve(ref));
      textRefs.current.forEach(ref => ref && textObserver.unobserve(ref));
    };
  }, []);

  return (
    <section className="bg-gray-900 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 transform-3d">
        {/* Left Section: Features */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              className="bg-white rounded-xl p-4 border-l-4 border-blue-500 shadow-xl transition duration-700 ease-out transform rotate-y-90 opacity-0 preserve-3d min-h-[220px]"
            >
              <div
                ref={el => (textRefs.current[index] = el)}
                className="flex flex-col gap-2 scale-out opacity-0 transition duration-700 ease-out"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-6 h-6 object-contain animate-rotateYLeft origin-center transition-all duration-500 ease-in-out"
                  />
                  <h3 className="text-md font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                  {feature.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Description */}
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-xl border-l-4 border-yellow-500 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
            End-To-End Integrated Solution{" "}
            <span className="text-yellow-600">For K-12 Schools</span>
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Vigyan Pathshala offers an all-inclusive solution for K-12 schools,
            providing an end-to-end approach to STEM education. Our grade-wise
            progressive curriculum is tailored to meet the needs of each grade
            level, ensuring a customized learning experience. What sets Vigyan
            Pathshala apart is their integration of STEM concepts with academic
            subjects, fostering interdisciplinary learning and making education
            more engaging.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalProgram;
