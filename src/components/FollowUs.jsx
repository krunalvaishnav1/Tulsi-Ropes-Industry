import React from "react";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion
import assets from "../assets/FollowUs/followusAssets.js";

const FollowUs = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 border-b text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h2
            className="text-4xl font-semibold mb-4 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            For More Information
          </motion.h2>
          <motion.h3
            className="text-2xl font-semibold mb-4 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Follow On
            <div className="flex space-x-6 mt-4 justify-center lg:justify-start">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-gray-100 transition-all duration-300"
                aria-label="Facebook"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-gray-100 transition-all duration-300"
                aria-label="Twitter"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-gray-100 transition-all duration-300"
                aria-label="Instagram"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-gray-100 transition-all duration-300"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>
          </motion.h3>
          <motion.p
            className="text-lg mb-4 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            @tulsiropesindustry
          </motion.p>
          <motion.p
            className="text-base text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            Discover the Strength and Versatility of Tulsi Ropes Industry's PP
            Ropes, available in both Hank Type (2 to 3.5 Width) and Coil Type
            (2.5 to 3.5 Width). Our Products Deliver Unmatched Strength and
            Quality!
          </motion.p>
          <motion.p
            className="text-base text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
          >
            Get in touch to discuss our products and competitive pricing! Let's
            chat.
          </motion.p>

          <motion.a
            href="https://wa.me/919723725109"
            className="flex items-center bg-green-500 hover:bg-green-600 w-44 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaWhatsapp className="text-2xl" />
            <span className="ml-3">Let's Chat</span>
          </motion.a>
        </div>

        {/* Right Section (Product Images) */}
        <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <motion.img
            src={assets.f1}
            alt="Product 1"
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 1 }}
          />
          <motion.img
            src={assets.f2}
            alt="Product 2"
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
          />
          <motion.img
            src={assets.f3}
            alt="Product 3"
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.4, duration: 1 }}
          />
          <motion.img
            src={assets.f4}
            alt="Product 4"
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.6, duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
