import React, { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  {
    title: "Grade-wise Progressive Curriculum",
    points: [
      "Grade-wise, Customized, and progressive curriculum.",
      "Individual LMS subscription to each child & teacher.",
      "Curriculum Integrated with Academic Subjects.",
    ],
  },
  {
    title: "Innovation Lab Setup at School",
    points: [
      "Vigyan Pathshala will Provide Hardware DIY Kits & Equipment to setup Lab.",
      "Assist in Lab Designing and Infrastructure.",
      "Budget Friendly Kits and Labs.",
    ],
  },
  {
    title: "Training & Execution Support",
    points: [
      "Training for Teachers & Students.",
      "Quarterly Assessments for students.",
      "Assistance in Competitions and Exhibitions.",
    ],
  },
  {
    title: "Global Participation",
    points: [
      "Help students participate in global competitions like ISTO, SIL etc.",
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
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6 
">
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
                  <FaCheckCircle className="text-blue-500 text-xl" />
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
