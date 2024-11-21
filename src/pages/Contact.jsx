import React from "react";
import {
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="">
      <div className="p-10 bg-gradient-to-r from-black via-slate-800 to-gray-950">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-center text-white mb-12">
          If you have any general inquiries, we'd love to hear from you.
        </p>
      </div>

      <div className="container mx-auto px-4 mb-8 mt-8">
        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <div className="mb-4 flex items-center">
              <FaPhoneAlt className="text-gray-600 text-xl mr-3" />
              <p className="text-lg">
                <a
                  href="tel:+919723725109"
                  className="text-red-600 font-semibold hover:text-red-800"
                >
                  +91 97237 25109
                </a>
              </p>
            </div>
            <div className="mb-4 flex items-center">
              <BiLogoGmail className="text-gray-600 text-xl mr-3" />
              <p className="text-lg">
                <a
                  href="mailto:tulsiropesindustry.info@gmail.com"
                  className="text-red-600 font-semibold hover:text-red-800"
                >
                  tulsiropesindustry.info@gmail.com
                </a>
              </p>
            </div>
            <div className="mb-4 flex items-center">
              <FaLocationDot className="text-gray-600 text-xl mr-3" />
              <p className="text-lg text-red-600 font-semibold hover:text-red-800">
                OPP.Atul Oil Cake, Jetpur Road,
                Dhoraji, 360410, Gujarat, India
              </p>
            </div>
          </div>

          {/* WhatsApp and Social */}
          <div className="flex flex-col justify-center items-start md:items-center space-y-8">
            <p className="text-lg text-gray-600 text-center">
              If you have any questions about our services, simply send a
              message on WhatsApp or email. We aim to respond within 24 hours.
            </p>
            <div className="w-full">
              <a
                href="https://wa.me/919723725109"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full md:w-auto bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
              >
                <FaPhoneAlt className="mr-3 text-xl" /> Chat with us on WhatsApp
              </a>
            </div>

            {/* Social Icons */}
            {/* <div className="flex space-x-6 justify-center">
              <a
                href="https://www.facebook.com/tulsirope"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-700 text-3xl transition duration-300 transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/tulsirope"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-700 text-3xl transition duration-300 transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/tulsirope"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-700 text-3xl transition duration-300 transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/tulsirope"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-700 text-3xl transition duration-300 transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div> */}
          </div>
        </div>

        {/* Google Map */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mt-5 text-center text-gray-800 mb-4">
            Our Location
          </h2>
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Our Location"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.0516415593374!2d70.46706457426083!3d21.739523562989532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39581f058cd12ccd%3A0x189d2fb06ef525a3!2sTulsi%20Ropes%20Industry!5e0!3m2!1sen!2sin!4v1730910782745!5m2!1sen!2sin"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
