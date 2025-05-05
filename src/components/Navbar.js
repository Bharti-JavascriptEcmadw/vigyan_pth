

import React, { useState } from "react";
import { FaYoutube, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900  text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1 text-center text-[4vw] sm:text-[2vw] md:text-[1.3vw] lg:text-[1.1vw] font-medium">
            Welcome To Vigyan Pathshala Private Limited
          </div>
          <div className="hidden sm:flex space-x-4 md:space-x-6 text-[3vw] sm:text-[1.5vw] md:text-[1.5vw] lg:text-[1.6vw]">
            <a
              href="https://www.youtube.com/@vigyanpathshala5738?si=xlG7M2iH9PXF3oX8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/robotics_sir/?utm_source=qr&igsh=MWFqaGh5dWRsMXN2Zw%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/vigyaninpathshala?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white  shadow-md relative sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex items-center justify-between h-auto flex-wrap sm:flex-nowrap">

            {/* Logo */}
            <div className="w-[50%] sm:w-[50%] md:w-[20%] lg:w-[25%] lg:h-[6vw]">
              <a href="/" className="flex items-center">
                <img
                  src="/assetes/vigyan/logo.png"
                  alt="Logo"
                  className="h-[20vw] sm:h-[5vw] md:h-[6vw] lg:h-[5vw] w-[40vw] md:w-[12vw] lg:w-[25vw] max-w-full object-contain"
                />
              </a>
            </div>

            {/* Nav Links (hidden on xs, shown on sm+) */}
            <div className="hidden sm:flex w-full justify-center flex-wrap md:flex-nowrap">
              <ul className="flex gap-[5%]  text-[3vw] sm:text-[1.5vw] md:text-[1.5vw] lg:text-[1.3vw] text-black md:font-semibold font-medium items-center">
                <li><a href="/" className="whitespace-nowrap">Home</a></li>
                <li><a href="/about" className="whitespace-nowrap">About Us</a></li>
                <li><a href="/test" className="whitespace-nowrap">Testimonial</a></li>

                {/* Our Solution Dropdown */}
              {/* Our Solution Dropdown */}
              <li className="relative group">
  <a href="/" className="flex items-center space-x-1 whitespace-nowrap px-2 py-6 cursor-pointer">
    <span>Our Solution</span>
    <FaChevronDown className="text-[1vw]" />
  </a>
  <div className="absolute left-0 top-full bg-white text-white shadow-lg w-[250px] z-50 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out transform group-hover:scale-100 scale-95">
    <ul className="p-2">
      <li><a href="/" className="block py-2 px-5 hover:bg-gray-200 text-gray-800">School Program</a></li>
      <li><a href="/" className="block py-2 px-5 hover:bg-gray-200 text-gray-800">Composite Robotics Lab</a></li>
    </ul>
  </div>
</li>


{/* Resources Dropdown */}
<li className="relative group">
  <a href="/" className="flex items-center space-x-1 whitespace-nowrap py-6">
    <span>Resources</span>
    <FaChevronDown className="text-[1vw]" />
  </a>
  <div className="absolute left-0 top-full hidden group-hover:block bg-white text-gray-700 shadow-lg w-40 z-50">
    <ul className="p-2">
      <li><a href="/event" className="block py-2 px-4 hover:bg-gray-200">Event</a></li>
      <li>
  <a
    href="https://vigyanpathshala.com/img/Vigyanpathshala_brochure.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="block py-2 px-4 hover:bg-gray-200"
  >
    Brochure
  </a>
</li>

      <li><a href="/project-in-video" className="block py-2 px-4 hover:bg-gray-200">Project Video</a></li>
      <li><a href="/lab-in-action" className="block py-2 px-4 hover:bg-gray-200">Lab In Action</a></li>
    </ul>
  </div>
</li>
<li><a href="/contact" className="whitespace-nowrap">Contact</a></li>
</ul>
</div>

            {/* CTA Button (Desktop Only) */}
  <div className="hidden sm:flex w-auto md:w-[22%] lg:w-[15%] justify-end items-center ml-2">
  <a href="/bookdemo">
  <button className="bg-teal-500 hover:bg-orange-900 text-white 
        px-3 py-1.5 text-[0.9rem] sm:text-[0.75rem] sm:px-2 sm:py-1 
        md:text-[0.8rem] md:px-2 md:py-1 
        lg:text-[1.1rem] lg:px-2 lg:py-1
        sm:mr-2 md:mr-3 lg:mr-4
        font-semibold rounded 
        transition-colors duration-[1000ms] ease-in-out whitespace-nowrap">
    BOOK DEMO
  </button>
</a>

</div>


            {/* Hamburger Icon (shown only on xs) */}
            <div className="sm:hidden block">
              <button onClick={toggleMenu} className="text-black text-[6vw] focus:outline-none">
                {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md z-50">
            <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-bold text-[4.5vw]">
              <li><a href="/" onClick={toggleMenu}>Home</a></li>
              <li><a href="/about" onClick={toggleMenu}>About Us</a></li>
              <li><a href="/test" onClick={toggleMenu}>Testimonial</a></li>
              <li><a href="/" onClick={toggleMenu}>Our Solution</a></li>
              <li><a href="/" onClick={toggleMenu}>Resources</a></li>
              <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
              <li>
                <button className="bg-[#FBAF3F] hover:bg-yellow-500 text-white px-8 py-2 rounded-full font-semibold text-[4.5vw]">
                  BOOK DEMO
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
