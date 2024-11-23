import React from "react";
import assets from "../assets/assets";
import { FaPhoneAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [assets.h33, assets.h32, assets.h31, assets.h34];

const SectionWithSlider = () => {
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
        <div className="lg:w-1/2 flex justify-center  mb-8 lg:mb-0 order-1 lg:order-2">
          <Slider {...settings} className="w-60 sm:w-3/4 lg:w-3/4">
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full  rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

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
            Our offerings include PP Danline ropes, baler twine, multi and mono
            filament ropes, and PP packaging materials, available in diverse
            colors to suit various industrial needs.
          </p>
          <p className="text-lg font-bold text-gray-300 mb-6">
            Would you like to discuss about our products and pricing?
          </p>

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

//  Home
const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      {/* Hero  */}
      <section
        className="relative h-screen w-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${assets.main1})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="text-center px-6 md:px-12 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-wide">
              <span className="block animate-fadeUp opacity-0 delay-100">
                Top Grade Quality Ropes
              </span>
              <span className="block animate-fadeUp opacity-0 delay-200">
                for Every Industry Need
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fadeUp opacity-0 delay-300">
              Delivering strength and durability with ropes crafted to meet the
              highest standards.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6 justify-center animate-fadeUp opacity-0 delay-400">
              <a
                href="/product"
                className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:translate-y-1"
              >
                View Our Products
              </a>
              <a
                href="/contact"
                className="bg-gray-100 hover:bg-gray-200 text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:translate-y-1"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 pointer-events-none"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 border-b">
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
            <div
              key={index}
              className={`${feature.bgColor} p-6 rounded-xl shadow-lg hover:shadow-2xl text-center text-white transform transition-transform hover:scale-105`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-base">{feature.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PP Rope Explanation */}
      <SectionWithSlider />
    </div>
  );
};

export default Home;
