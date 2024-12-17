import React from "react";
import assets from "../assets/assets.js";
import { FaPhoneAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const images = [assets.h33, assets.h32, assets.h31, assets.h34];

const RopeExplanation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black border-b text-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0 order-1 lg:order-2">
          <Slider {...settings} className="w-60 sm:w-3/4 lg:w-3/4">
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="lg:w-1/2 text-left mb-8 lg:mb-0 order-2 lg:order-1">
          <motion.h2
            className="font-bold text-2xl text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Polypropylene Ropes - Quality You Can Trust
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We offer PP ropes made for multiple applications. Our products
            feature excellent durability, strength, and versatility, making us
            one of the best Polypropylene Rope Manufacturers in India.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our offerings include PP Danline ropes, baler twine, multi and mono
            filament ropes, and PP packaging materials, available in diverse
            colors to suit various industrial needs.
          </motion.p>

          <motion.p
            className="text-lg font-bold text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Would you like to discuss about our products and pricing?
          </motion.p>

          <div className="mt-8 flex items-left mb:item-center">
            <a
              href="tel:+919723725109"
              className="flex items-center bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <div className="flex items-center justify-center bg-blue-600 text-white w-12 h-12 rounded-full">
                <FaPhoneAlt className="text-2xl" />
              </div>
              <span className="ml-4 text-lg font-semibold text-black hover:text-gray-700">
                +91 97237 25109
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RopeExplanation;
