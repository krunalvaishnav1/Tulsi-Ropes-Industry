import React from "react";
import assets, { desc } from "../assets/assets"; 

const Product = () => {
  return (
    <section className="">
      <div className="p-10 mb-10 bg-gradient-to-r from-black via-slate-800 to-gray-950">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Product
        </h1>
        <p className="text-xl text-center text-white mb-12">
          Crafted for Strength, Trusted for Quality – Explore Our Range of Ropes
        </p>
      </div>

      <div className="container mx-auto px-4 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {desc.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105"
            >
              <img
                src={assets[product.image]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h2>
              </div>

              {/* Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-100">
                <p className="px-4 text-center text-lg">
                  {product.description}
                </p>

                <a href="/contact">
                  <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
                    Inquiry
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
