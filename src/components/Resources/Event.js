import React from "react";

const Event = ({ title }) => {
  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: "url('/assetes/test_book/1.jpg')", // Update path as needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full bg-black/50 flex items-center justify-center py-40 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Event;
