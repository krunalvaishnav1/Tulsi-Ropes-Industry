import React from "react";
import assets from "../assets/assets";
import { FaPhoneAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Contant */}
      <section
        className="relative h-96 w-full bg-center bg-cover border-b"
        style={{
          backgroundImage: `url(${assets.main1})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center px-6 md:px-12 max-w-3xl">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-wide">
              Top Grade Quality Ropes for Every Industry Need
            </h1>
            {/* Subheadline */}
            <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Delivering strength and durability with ropes crafted to meet the
              highest standards.
            </p>
            {/* Call to Actions */}
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
              <a
                href="/product"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                View Our Products
              </a>
              <a
                href="/contact"
                className="bg-gray-100 hover:bg-gray-200 text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* features*/}
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black border-b py-16">
        <h1 className="text-center font-bold text-2xl text-gray-300 mb-12">
          Committed to excellence, we produce and supply premium ropes for
          various industries.
        </h1>

        {/* Four Sections in a Row with Card Layout */}
        <section className="px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Manufacturing Excellence Section */}
            <div className="bg-indigo-800 p-6 rounded-lg text-center shadow-xl flex flex-col justify-between h-full overflow-hidden border-b-4 border-indigo-800 hover:border-white transform transition-transform duration-300 hover:translate-x-2">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Manufacturing Excellence
              </h3>
              <p className="text-lg text-white leading-relaxed overflow-hidden text-ellipsis">
                Our ropes are made in a state-of-the-art facility with advanced
                technology and stringent quality controls for superior strength
                and durability.
              </p>
            </div>

            {/* Versatile Applications Section */}
            <div className="bg-blue-800 p-6 rounded-lg text-center shadow-xl flex flex-col justify-between h-full overflow-hidden border-b-4 border-blue-800 hover:border-white transform transition-transform duration-300 hover:translate-x-2">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Versatile Applications
              </h3>
              <p className="text-lg text-white leading-relaxed overflow-hidden text-ellipsis">
                Our premium ropes are designed for a wide range of uses, from
                secure packaging to industrial and construction needs, ensuring
                reliable performance in all environments.
              </p>
            </div>

            {/* Uncompromising Quality Section */}
            <div className="bg-sky-800 p-6 rounded-lg text-center shadow-xl flex flex-col justify-between h-full overflow-hidden border-b-4 border-sky-800 hover:border-white transform transition-transform duration-300 hover:translate-x-2">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Uncompromising Quality
              </h3>
              <p className="text-lg text-white leading-relaxed overflow-hidden text-ellipsis">
                Each rope is rigorously tested for durability, tensile strength,
                and weather resistance, delivering industry-leading quality and
                reliability with certifications.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* pp rope explnation */}
      <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black border-b text-white py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
          {/* Right Side - Image */}
          <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0 order-1 lg:order-2">
            <img
              src={assets.h33}
              alt="Polypropylene Ropes"
              className="w-60 sm:w-3/4 lg:w-3/4 rounded-lg shadow-lg"
            />
          </div>

          {/* Left Side - Content */}
          <div className="lg:w-1/2 text-left mb-8 lg:mb-0 order-2 lg:order-1">
            <h2 className="font-bold text-2xl text-gray-300 mb-6">
              Polypropylene Ropes - Quality You Can Trust
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              We offer PP ropes made for multiple applications. Our products
              feature excellent durability, strength, and versatility, making us
              one of the best Polypropylene Rope Manufacturers in India.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Our offerings include PP Danline ropes, baler twine, multi and
              mono filament ropes, and PP packaging materials, available in
              diverse colors to suit various industrial needs.
            </p>

            {/* Contact Us Button */}
            <div className="mt-8 flex items-left mb:item-center ">
              <a
                href="tel:+919723725109"
                className="flex items-center bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 "
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
    </div>
  );
};

export default Home;
