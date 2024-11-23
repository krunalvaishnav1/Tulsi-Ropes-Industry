import React, { useState } from "react";
import assets from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-black via-slate-800 to-gray-950 p-5 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Business Name */}
        <a href="/" className="flex items-center space-x-4">
          <img src={assets.navlogo} alt="Logo" className="h-16 w-16 rounded-lg shadow-md" />
          <span className="text-2xl font-semibold text-white tracking-wide">
            Tulsi Ropes Industry
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-700">
            Home
          </a>
          <a href="/about-us" className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-700">
            About
          </a>
          <a href="/product" className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-700">
            Our Products
          </a>
          <a href="/contact" className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-700">
            Contact Us
          </a>
          <a href="/industry-gallary" className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-700">
            Industry Gallery
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-white focus:outline-none"
        >
          {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
        </button>

        {/* Full-Screen Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-gradient-to-r from-black via-slate-800 to-gray-950 bg-opacity-100 flex justify-center items-center z-50 transition-all duration-300">
            <div className="space-y-6 text-white font-semibold text-2xl">
              {/* Close Icon */}
              <button onClick={toggleMenu} className="absolute top-5 right-5 text-4xl text-white">
                &#10005;
              </button>

              {/* Mobile Menu Links */}
              <a href="/" className="block hover:text-yellow-300">Home</a>
              <a href="/about-us" className="block hover:text-yellow-300">About Us</a>
              <a href="/product" className="block hover:text-yellow-300">Our Products</a>
              <a href="/contact" className="block hover:text-yellow-300">Contact Us</a>
              <a href="/industry-gallary" className="block hover:text-yellow-300">Industry Gallery</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
