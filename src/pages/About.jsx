import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative h-screen w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${assets.aboutHero})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="text-center px-6 md:px-12 max-w-4xl">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-wide"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              About Tulsi Rope Industry
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              Dedicated to manufacturing premium-quality ropes tailored for
              industrial and export needs. Tulsi Rope Industry combines
              craftsmanship with innovation to deliver products that stand the
              test of time.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Company Image */}
            <motion.img
              src={assets.companyPhoto}
              alt="Tulsi Rope Industry"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            />

            {/* Company Details */}
            <div>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                Our Story
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 mb-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                Tulsi Rope Industry has been a pioneer in the rope manufacturing
                business for over a decade. We specialize in creating
                high-quality ropes for various industrial applications, ensuring
                strength, durability, and reliability in every strand.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            At Tulsi Rope Industry, our mission is to provide high-quality,
            durable ropes that meet the diverse needs of various industries. We
            aim to be the leading provider of industrial-grade ropes,
            prioritizing customer satisfaction and innovation in all our
            products and processes.
          </motion.p>
        </div>
      </section>

      {/* Routes Available Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Routes Available
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            We deliver our high-quality ropes to various industries worldwide.
            Our routes include direct shipping to major cities across the globe,
            with a particular focus on bulk orders and export shipments. We
            ensure timely and reliable delivery for all our customers.
          </motion.p>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Our Success Story
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Over the years, Tulsi Rope Industry has gained the trust of numerous
            clients due to our unwavering commitment to quality and service. Our
            ropes are trusted by large-scale industries, and we've built a
            reputation for excellence, providing top-notch products and timely
            deliveries.
          </motion.p>
        </div>
      </section>

      {/* Our Process of Making Rope Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Our Process of Making Rope
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            The process of making our ropes involves high-quality materials,
            state-of-the-art machinery, and skilled craftsmanship. We start with
            carefully selecting the raw materials, which are then spun into
            strong, durable threads. These threads are twisted and braided under
            controlled conditions to create ropes that meet the highest
            standards of strength and reliability.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Each step in the process is monitored for quality, ensuring that
            every rope we produce is ready for demanding applications in various
            industries.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default About;
