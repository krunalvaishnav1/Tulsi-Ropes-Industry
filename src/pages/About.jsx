import React from "react";
import { motion } from "framer-motion";
import { FaHistory, FaBullseye, FaRoute, FaStar, FaCogs } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-32 pb-10  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-100 mb-6"
        initial={{ y: 50, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        About
      </motion.h1>
      <motion.p
        className="text-lg text-center text-gray-300 mb-12 px-4 md:px-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        Strong Ropes, Stronger Partnerships.
      </motion.p>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg mx-4 md:mx-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-200 mb-6 flex items-center gap-2"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <FaHistory /> Our Story
              </motion.h2>
              <motion.p
                className="text-lg text-gray-400 mb-4 leading-relaxed"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
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

      {/* Our Mission */}
      <section className="py-16 mt-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg mx-4 md:mx-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-200 mb-6 flex items-center gap-2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <FaBullseye /> Our Mission
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 leading-relaxed"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            At Tulsi Rope Industry, our mission is to provide high-quality,
            durable ropes that meet the diverse needs of various industries. We
            aim to be the leading provider of industrial-grade ropes,
            prioritizing customer satisfaction and innovation in all our
            products and processes.
          </motion.p>
        </div>
      </section>

      {/* Routes Available */}
      <section className="py-16 mt-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg mx-4 md:mx-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-200 mb-6 flex items-center gap-2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <FaRoute /> Routes Available
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 mb-4 leading-relaxed"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            We deliver our high-quality ropes to various industries worldwide.
            Our routes include direct shipping to major cities across the globe,
            with a particular focus on bulk orders and export shipments. We
            ensure timely and reliable delivery for all our customers.
          </motion.p>
        </div>
      </section>

      {/* Our Success Story */}
      <section className="py-16 mt-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg mx-4 md:mx-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-200 mb-6 flex items-center gap-2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <FaStar /> Our Success Story
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 leading-relaxed"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            Over the years, Tulsi Rope Industry has gained the trust of numerous
            clients due to our unwavering commitment to quality and service. Our
            ropes are trusted by large-scale industries, and we've built a
            reputation for excellence, providing top-notch products and timely
            deliveries.
          </motion.p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 mt-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg mx-4 md:mx-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-200 mb-6 flex items-center gap-2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <FaCogs /> Our Process of Making Rope
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 mb-4 leading-relaxed"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            The process of making our ropes involves high-quality materials,
            state-of-the-art machinery, and skilled craftsmanship. We start with
            carefully selecting the raw materials, which are then spun into
            strong, durable threads. These threads are twisted and braided under
            controlled conditions to create ropes that meet the highest
            standards of strength and reliability.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default About;
