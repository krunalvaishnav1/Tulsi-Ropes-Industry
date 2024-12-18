import React from "react";
import assets from "../assets/Gallary/gallaryAssets"; // Adjust the path if necessary
import { motion } from "framer-motion";

function IndustryGallary() {
  const images = Object.keys(assets);

  return (
    <section className="">
      <div className="pt-32 pb-1 mb-10 bg-gradient-to-r from-black via-slate-800 to-gray-950">
        <motion.h1
          className="text-4xl font-bold text-center text-white mb-6"
          initial={{ y: 50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Industry Gallery
        </motion.h1>
        <motion.p
          className="text-xl text-center text-white mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          {" "}
          A Small Glimpse Of Our Industry{" "}
        </motion.p>
      </div>

      <div className="p-10 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={assets[image]} // Access the corresponding path from assets.js
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustryGallary;
