import React from "react";

const CICApproach = () => {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          Vigyan Pathshala's End To End{" "}
          <span className="text-teal-500">Solution For 21st Century Schools</span>{" "}
          In Line With NEP 2020
        </h2>
        <div className="border-t-2 border-green-600 w-20 mx-auto my-4"></div>
        <p className="text-green-700 font-semibold text-lg sm:text-xl">
          CIC Approach - Our Patented Methodology
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src="/assetes/SchoolP/cic.jpg"
          alt="CIC Approach Visual"
          className="w-full max-w-6xl h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default CICApproach;
