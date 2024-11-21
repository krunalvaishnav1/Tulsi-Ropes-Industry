import React, { useState } from "react";
import assets from "../assets/assets";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-black via-slate-800 to-gray-950 p-4 text-white">
      <div className="container mx-auto">
        {/* First Part */}
        <div className="flex justify-between items-center mb-4">
          {/* Logo and Business Name */}
          <a href="/" className="flex items-center space-x-4">
            <img src={assets.navlogo} alt="Logo" className="h-16 w-16" />
            <span className="text-2xl font-semibold tracking-wide">
              Tulsi Ropes Industry
            </span>
          </a>

          {/* Address and Phone Number */}
          <div className="hidden md:flex justify-end items-center space-x-8">
            {/* Phone Section */}
            <div className="flex items-center">
              <FaPhoneAlt className="text-gray-400 text-3xl mr-2" />
              <p className="font-medium">+91 97237 25109</p>
            </div>

            {/* Address Section */}
            <div className="flex items-center">
              <FaLocationDot className="text-gray-400 text-3xl mr-2" />
              <p className="font-medium"> Jetpur Road, Dhoraji, Gujarat</p>
            </div>
          </div>
        </div>

        {/* Second Part */}
        <div className="border-t border-gray-700 pt-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center space-x-8">
            <a
              href="/"
              className="font-bold hover:bg-gray-700 px-4 py-2 rounded"
            >
              Home
            </a>
            <a
              href="/about-us"
              className="font-bold hover:bg-gray-700 px-4 py-2 rounded"
            >
              About
            </a>
            <a
              href="/product"
              className="font-bold hover:bg-gray-700 px-4 py-2 rounded"
            >
              Our Products
            </a>
            <a
              href="/contact"
              className="font-bold hover:bg-gray-700 px-4 py-2 rounded"
            >
              Contact Us
            </a>
            <a
              href="/industry-gallary"
              className="font-bold hover:bg-gray-700 px-4 py-2 rounded"
            >
              Industry Gallary
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-full text-center mt-2 text-2xl focus:outline-none"
          >
            {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 space-y-2 text-center font-semibold">
              <a href="/" className="block hover:bg-gray-700 px-4 py-2 rounded">
                Home
              </a>
              <a
                href="/about-us"
                className="block hover:bg-gray-700 px-4 py-2 rounded"
              >
                About Us
              </a>
              <a
                href="/product"
                className="block hover:bg-gray-700 px-4 py-2 rounded"
              >
                Our Products
              </a>
              <a
                href="/contact"
                className="block hover:bg-gray-700 px-4 py-2 rounded"
              >
                Contact Us
              </a>
              <a
                href="/industry-gallary"
                className="block hover:bg-gray-700 px-4 py-2 rounded"
              >
                Industry Gallary
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
