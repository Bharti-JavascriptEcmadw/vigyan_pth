import React from "react";

const trainingFeatures = [
  {
    image: "/assetes/video_gallery/8.jpg",
    title: "Drone Technology",
    description:
      "Learn to assemble, calibrate, and fly drones safely while exploring the physics of flight and GPS technology."
  },
  {
    image: "/assetes/video_gallery/8.jpg",
    title: "Internet of Things (IoT)",
    description:
      "Build smart devices that connect to the internet using sensors, Wi-Fi modules, and cloud platforms."
  },
  {
    image: "/assetes/video_gallery/8.jpg",
    title: "Sensor Programming",
    description:
      "Understand how temperature, motion, humidity, and GPS sensors work—and how to program them."
  },
  {
    image: "/assetes/video_gallery/8.jpg",
    title: "Project-Based Learning",
    description:
      "Students create their own drone or IoT system—from smart farming to home automation projects."
  }
];

const DroneIot = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-600 mb-4 font-mono">
          🚁 Drone & IoT Training Program
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          Empower students to explore the future of technology with our immersive training in drone operation and the Internet of Things.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {trainingFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden transition"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transition duration-300 tracking-wide">
            Join the Program
          </button>
        </div>
      </div>
    </section>
  );
};

export default DroneIot;
