import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaGlobe, FaStore } from "react-icons/fa"; // Import icons

const OrderGuidelines = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8 md:py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-4 sm:mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Order Guidelines
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We specialize in bulk and export orders. Please review our order guidelines below.
        </motion.p>

        <div className="space-y-4 sm:space-y-6">
          {/* Bulk Orders */}
          <motion.div
            className="flex items-center text-base sm:text-lg text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FaTruck className="text-6xl sm:text-2xl mr-3 " /> {/* Icon */}
            <span>
              <strong>Bulk Orders:</strong> We only process large-scale orders for industries and businesses. Please contact us for pricing and further details.
            </span>
          </motion.div>

          {/* Export Orders */}
          <motion.div
            className="flex items-center text-base sm:text-lg text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <FaGlobe className="text-5xl sm:text-2xl mr-3 " /> {/* Icon */}
            <span>
              <strong>Export Orders:</strong> We offer global shipping for bulk orders. Get in touch with us to discuss export requirements and pricing.
            </span>
          </motion.div>

          {/* Small Retail Restrictions */}
          <motion.div
            className="flex items-center text-base sm:text-lg text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <FaStore className="text-4xl sm:text-2xl mr-3 pb-0" /> {/* Icon */}
            <span>
              <strong>Not for Small Retail:</strong> Unfortunately, we do not cater to small shops or individual buyers.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrderGuidelines;
