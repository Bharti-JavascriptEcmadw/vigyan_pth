import React from "react";

const ContactForm = () => {
  return (
    <section className="relative py-8 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-teal-500 via-blue-700 to-blue-200">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0 "></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6 items-center 
      justify-around
      ">
        {/* Video Section */}
        <div className="w-full lg:w-2/5 h-[250px] sm:h-[300px] lg:h-[350px] rounded-lg overflow-hidden shadow-xl">
          <video
            src="/assets/contact/35.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[40%] bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg border border-white/30">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800 text-center lg:text-left">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                placeholder="+91 9876543210"
                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="3"
                placeholder="Write your message..."
                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="bg-cyan-500 text-white text-sm font-medium py-2 px-5 rounded-full hover:bg-cyan-600 transition"
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
