import React from "react";
import assets from "../assets/assets";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-slate-800 to-gray-950 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* First Part */}
        <div className="flex flex-col md:flex-row justify-between md:space-x-8 items-center">
          {/* Availability and Phone */}
          <div className="mb-8 md:mb-0 w-full md:w-auto flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
            <p className="text-gray-400">We Are Available At 8:00am – 8:00pm</p>
            <a
              href="tel:+919723725109"
              className="text-gray-400 hover:text-gray-100 flex items-center space-x-2"
            >
              <FaPhoneAlt className="text-gray-400" />
              <span>+91 97237 25109</span>
            </a>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-100"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-100"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-100"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-100"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Second Part */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between py-8 px-8 mt-8 border-t border-gray-700 space-y-8 md:space-y-0 md:space-x-8">
          {/* Logo */}
          <div className="flex justify-center mb-6 md:mb-0 md:w-1/4">
            <img
              src={assets.logo}
              alt="Tulsi Rope Industry Logo"
              className="w-48 md:w-96"
            />
          </div>

          {/* Links and Contact */}
          <div className="flex flex-col md:flex-row md:w-3/4 justify-center md:justify-start gap-12">
            {/* Quick Links */}
            <div className="flex-1 text-left">
              <h2 className="font-semibold text-lg text-white mb-4 border-b-2 border-red-500 inline-block">
                Quick Links
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="relative text-gray-400 hover:text-gray-100 group transition-colors"
                  >
                    Home
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="relative text-gray-400 hover:text-gray-100 group transition-colors"
                  >
                    About Us
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/product"
                    className="relative text-gray-400 hover:text-gray-100 group transition-colors"
                  >
                    Products
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="relative text-gray-400 hover:text-gray-100 group transition-colors"
                  >
                    Contact
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Products */}
            <div className="flex-1 text-left">
              <h2 className="font-semibold text-lg text-white mb-4 border-b-2 border-red-500 inline-block">
                Our Products
              </h2>
              <ul className="space-y-2">
                {[
                  "PP Danline Ropes",
                  "Polypropylene Ropes",
                  "Mono Filament Ropes",
                  "Multi Filament Ropes",
                  "PP Baler Twine",
                  "Nylon Rope",
                  "PP Rope",
                  "Baler Twine",
                  "Fencing Polywire",
                ].map((product) => (
                  <li key={product}>
                    <a
                      href="/product"
                      className="relative text-gray-400 hover:text-gray-100 group transition-colors"
                    >
                      {product}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex-1 text-left">
              <h2 className="font-semibold text-lg text-white mb-4 border-b-2 border-red-500 inline-block">
                Contact Us
              </h2>
              <ul className="space-y-4">
                {/* Address */}
                <li className="flex items-center space-x-2">
                  <FaLocationDot className="text-gray-400" size={27} />
                  <a
                    href="https://maps.app.goo.gl/N6zZozpDxy2UoojC8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-gray-400 hover:text-gray-100 group transition-colors"
                  >
                    OPP.Atul Oil Cake, Jetpur Road, Dhoraji, Rajkot, 360410,
                    Gujarat, India
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
                {/* Phone Number */}
                <li className="flex items-center space-x-2">
                  <FaPhoneAlt className="text-gray-400" size={16} />
                  <a
                    href="tel:+919723725109"
                    className="relative text-gray-400 hover:text-gray-100 group transition-colors"
                  >
                    +91 97237 25109
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
                {/* Email */}
                <li className="flex items-center space-x-2">
                  <BiLogoGmail className="text-gray-400" size={20} />
                  <a
                    href="mailto:tulsiropesindustry.info@gmail.com"
                    className="relative text-gray-400 hover:text-gray-100 group transition-colors"
                  >
                    tulsiropesindustry.info@gmail.com
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third Part */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 Tulsi Ropes Industry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
