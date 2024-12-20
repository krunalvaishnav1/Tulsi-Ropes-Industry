import assets, { desc } from "../assets/Product/productAssets.js";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <section>
      {/* Header */}
      <div className="pt-32 pb-1 mb-10 bg-gradient-to-r from-black via-slate-800 to-gray-950">
        <motion.h1
          className="text-4xl font-bold text-center text-white mb-6"
          initial={{ y:50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Product
        </motion.h1>
        <motion.p
          className="text-xl text-center text-white mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          Crafted for Strength, Trusted for Quality – Explore Our Range of Ropes
        </motion.p>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {desc.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden bg-white rounded-lg transform transition duration-500 hover:scale-105"
            >
              <img
                src={assets[product.image]}
                alt={product.name}
                className="w-full h-80 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 mt-2">
                  <strong>Range (Width):</strong> {product.range}
                </p>
                <a href="/contact" target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                    Inquiry Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
