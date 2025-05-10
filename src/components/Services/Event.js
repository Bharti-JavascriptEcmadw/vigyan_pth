import React from "react";

const Event = () => {
  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: "url('/assetes/SchoolProgram/schoolbanner.jpg')", // Update path as needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="w-full h-full  flex items-center justify-center py-40 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
        </h1>
      </div>
    </div>
  );
};

export default Event;
