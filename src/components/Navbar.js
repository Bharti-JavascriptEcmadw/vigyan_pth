



import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaYoutube, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);

  const handleResourcesClick = (e) => {
    e.preventDefault();
    setIsResourcesOpen((prev) => !prev);
  };

  const handleSolutionClick = (e) => {
    e.preventDefault();
    setIsSolutionOpen((prev) => !prev);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 w-[100%] text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 ">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between sm:flex-col xsm:flex-col md:flex-row lg:flex-nowrap">
          <div className="flex-1 sm:m-auto flex-nowrap text-center text-[4vw] sm:text-[2vw] md:text-[1.3vw] lg:text-[1.1vw] font-medium sm:m-2 xsm:mt-2">
            Welcome To Vigyan Pathshala Private Limited
          </div>

          <div className="flex sm:m-2 xsm:mt-2 space-x-4 md:space-x-6 text-[3vw] sm:text-[1.5vw] md:text-[1.5vw] lg:text-[1.6vw]">
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
      <nav className="bg-gradient-to-r from-blue-900 to-gray-800 shadow-md relative sticky top-0 z-50">
        <div className="w-full max-w-[100%] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex items-center justify-between h-auto flex-wrap sm:flex-nowrap">

            {/* Logo */}
            <div className="w-[50%] sm:w-[50%] md:w-[20%] lg:w-[25%] lg:h-[6vw]">
              <a href="/" className="flex items-center">
                <img
                  src="/assets/vigyan/logo-light.png"
                  alt="Logo"
                  className="h-[20vw] sm:h-[5vw] md:h-[6vw] lg:h-[5vw] w-[40vw] md:w-[12vw] lg:w-[25vw] max-w-full object-contain"
                />
              </a>
            </div>

            {/* Nav Links (hidden on xs, shown on sm+) */}
            <div className="hidden sm:flex w-full justify-center flex-wrap md:flex-nowrap mr-7 ml-5">
              <ul className="flex lg:gap-[2%] md:gap-[1%] text-[2vw] sm:text-[1.5vw] md:text-[1.5vw] lg:text-[1.3vw] text-white md:font-semibold font-medium items-center sm:mr-5 sm:space-x-1 mr-4">
                <li className="group relative">
                  <a
                    href="/"
                    className="whitespace-nowrap group-hover:text-[#79dfa7] transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="/about"
                    className="whitespace-nowrap group-hover:text-[#79dfa7] transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="/success-story"
                    className="whitespace-nowrap group-hover:text-[#79dfa7] transition duration-300"
                  >
                    Success Stories
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="/courses"
                    className="whitespace-nowrap group-hover:text-[#79dfa7] transition duration-300"
                  >
                    Courses
                  </a>
                </li>

                {/* School Program Dropdown */}
                <li className="group relative">
                  <a
                    href="/school-program"
                    className="flex items-center space-x-1 whitespace-nowrap py-6"
                    onClick={handleSolutionClick}
                  >
                    <span>School Program</span>
                    <FaChevronDown className="text-[1vw]" />
                  </a>
                  {isSolutionOpen && (
                    <div className="absolute left-0 top-full bg-white text-gray-700 shadow-lg w-40 z-50">
                      <ul className="p-2">
                        <li>
                          <a
                            href="/event"
                            className="block py-2 px-4 hover:bg-gray-200"
                          >
                            Event
                          </a>
                        </li>
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
                        <li>
                          <a
                            href="/lab-in-action"
                            className="block py-4 px-4 hover:bg-gray-200"
                          >
                            Lab In Action
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                {/* Resources Dropdown */}
                <li className="group relative">
                  <a
                    href="/event"
                    className="flex items-center space-x-1 whitespace-nowrap py-6"
                    onClick={handleResourcesClick}
                  >
                    <span>Resources</span>
                    <FaChevronDown className="text-[1vw]" />
                  </a>
                  {isResourcesOpen && (
                    <div className="absolute left-0 top-full bg-white text-gray-700 shadow-lg w-40 z-50">
                      <ul className="p-2">
                        <li>
                          <a
                            href="/event"
                            className="block py-2 px-4 hover:bg-gray-200"
                          >
                            Event
                          </a>
                        </li>
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
                        <li>
                          <a
                            href="/lab-in-action"
                            className="block py-4 px-4 hover:bg-gray-200"
                          >
                            Lab In Action
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li className="group relative">
                  <a
                    href="/contact"
                    className="whitespace-nowrap group-hover:text-[#79dfa7] transition duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Book Demo Button */}
            <div className="hidden sm:flex w-auto md:w-[22%] lg:w-[15%] justify-end items-center ml-2">
              <a href="/bookdemo">
                <button className="bg-teal-500 hover:bg-green-500 text-white px-3 py-1.5 text-[0.9rem] sm:text-[0.75rem] sm:px-2 sm:py-1 md:text-[0.8rem] md:px-2 md:py-1 lg:text-[1.1rem] lg:px-5 lg:py-2 sm:mr-2 md:mr-3 lg:mr-4 font-semibold rounded transition-colors duration-[1000ms] ease-in-out whitespace-nowrap">
                  BOOK DEMO
                </button>
              </a>
            </div>

            {/* Hamburger Icon */}
            <div className="sm:hidden block">
              <button onClick={toggleMenu} className="text-white text-[6vw] focus:outline-none">
                {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
  <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md z-50">
    <ul className="flex flex-col items-center space-y-5 py-6 text-gray-800 font-semibold text-[4.5vw]">
      <li><a href="/" onClick={toggleMenu} className="hover:text-yellow-500">Home</a></li>
      <li><a href="/about" onClick={toggleMenu} className="hover:text-yellow-500">About Us</a></li>
      <li><a href="/test" onClick={toggleMenu} className="hover:text-yellow-500">Success Story</a></li>
      <li><a href="/courses" onClick={toggleMenu} className="hover:text-yellow-500">Courses</a></li>

      {/* School Program Dropdown */}
      <li className="w-full flex flex-col items-center">
        <button
          onClick={() => setIsSolutionOpen(!isSolutionOpen)}
          className="hover:text-yellow-500"
        >
          School Program ▾
        </button>
        {isSolutionOpen && (
          <ul className="mt-2 space-y-2 text-[4vw] text-gray-600 font-normal text-center">
            <li>
              <a href="/event" onClick={toggleMenu} className="hover:text-yellow-500">Event</a>
            </li>
            <li>
              <a
                href="https://vigyanpathshala.com/img/Vigyanpathshala_brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                Brochure
              </a>
            </li>
            <li>
              <a href="/lab-in-action" onClick={toggleMenu} className="hover:text-yellow-500">Lab in Action</a>
            </li>
          </ul>
        )}
      </li>

      {/* Resources Dropdown */}
      <li className="w-full flex flex-col items-center">
        <button
          onClick={() => setIsResourcesOpen(!isResourcesOpen)}
          className="hover:text-yellow-500"
        >
          Resources ▾
        </button>
        {isResourcesOpen && (
          <ul className="mt-2 space-y-2 text-[4vw] text-gray-600 font-normal text-center">
            <li>
              <a href="/event" onClick={toggleMenu} className="hover:text-yellow-500">Event</a>
            </li>
            <li>
              <a
                href="https://vigyanpathshala.com/img/Vigyanpathshala_brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                Brochure
              </a>
            </li>
            <li>
              <a href="/lab-in-action" onClick={toggleMenu} className="hover:text-yellow-500">Lab in Action</a>
            </li>
          </ul>
        )}
      </li>

      <li><a href="/contact" onClick={toggleMenu} className="hover:text-yellow-500">Contact</a></li>

      <li>
        <button className="bg-[#FBAF3F] hover:bg-yellow-500 text-white px-10 py-3 rounded-full font-semibold text-[4.5vw] transition-all duration-200">
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
