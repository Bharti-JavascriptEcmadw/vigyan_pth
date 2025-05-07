import React from "react";

const ContactForm = () => {
  return (
    <section className="relative py-12 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-br from-teal-500 via-blue-700 to-blue-200">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-y-10 lg:gap-x-16 p-4">
        {/* Video Section */}
        <div className="w-full lg:w-[40%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl mx-auto">
          <video
            src="/assetes/school/7.mp4" // Replace with your video path
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[50%] bg-white/80 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-white/20 mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center lg:text-left">
            Contact Us
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-white border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-white border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                placeholder="+91 9876543210"
                className="w-full bg-white border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full bg-white border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />
            </div>
            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="bg-cyan-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-cyan-600 shadow-md transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
