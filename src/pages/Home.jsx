import React from "react";
import assets from "../assets/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import FollowUs from "../components/FollowUs";
import OrderGuidelines from "../components/OrderGuidelines";
import RopeExplanation from "../components/RopeExplanation";



const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <motion.section
        className="relative h-screen w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${assets.main1})` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="text-center px-6 md:px-12 max-w-4xl">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="block">Top Grade Quality Ropes</span>
              <span className="block">for Every Industry Need</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Delivering strength and durability with ropes crafted to meet the
              highest standards.
            </motion.p>

            <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
              <motion.a
                href="/product"
                className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              >
                View Our Products
              </motion.a>
              <motion.a
                href="/contact"
                className="bg-gray-100 hover:bg-gray-200 text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      
      {/* Features Section */};
      <section className="py-10 border-b">
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
          {[
            {
              title: "State-of-the-Art Manufacturing",
              content:
                "Our ropes are crafted in a modern facility with cutting-edge technology and strict quality controls.",
              icon: "🏭",
              bgColor: "bg-indigo-600",
            },
            {
              title: "Wide Range of Applications",
              content:
                "From industrial to packaging needs, our ropes offer reliability and adaptability in every environment.",
              icon: "⚙️",
              bgColor: "bg-blue-600",
            },
            {
              title: "Guaranteed Quality",
              content:
                "Every product undergoes rigorous testing to ensure top-notch durability and tensile strength.",
              icon: "☑",
              bgColor: "bg-teal-600",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.bgColor} p-6 rounded-xl shadow-lg hover:shadow-2xl text-center text-white transform transition-transform hover:scale-105`}
              initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slight downward position
              whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and normal position when in view
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-base">{feature.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PP Rope Explanation */}
      <RopeExplanation/>
      <FollowUs/>
      <OrderGuidelines/>
    </div>
  );
};

export default Home;
