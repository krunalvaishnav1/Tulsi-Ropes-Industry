  import React from "react";
  import assets from "../assets/assets";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import { motion } from "framer-motion";
  import FollowUs from "../components/FollowUs";
  import OrderGuidelines from "../components/OrderGuidelines";
  import RopeExplanation from "../components/RopeExplanation";
  import FeatureSection from "../components/FeatureSection";

  const Home = () => {
    return (
      <div>
        {/* Hero Section */}
        <motion.section
          className="relative h-screen w-full bg-center bg-cover"
          style={{ backgroundImage: `url(${assets.main1})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <div className="text-center px-6 md:px-12 max-w-4xl">
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-wide"
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
              >
                <span className="block">Top Grade Quality Ropes</span>
                <span className="block">for Every Industry Need</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
              >
                Delivering strength and durability with ropes crafted to meet the
                highest standards.
              </motion.p>

              <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
                <motion.a
                  href="/product"
                  className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg"
                  initial={{ x: -400, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                >
                  View Our Products
                </motion.a>
                <motion.a
                  href="/contact"
                  className="bg-gray-100 hover:bg-gray-200 text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg"
                  initial={{ x: -400, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

        <FeatureSection />
        <RopeExplanation />
        <OrderGuidelines />
        <FollowUs />
      </div>
    );
  };

  export default Home;
