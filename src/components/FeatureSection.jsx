import React from "react";
import { motion } from "framer-motion";

const FeatureSection = () => {
  const features = [
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
  ];

  return (
    <section className=" py-10 border-b bg-gradient-to-r from-gray-950 via-gray-800 to-gray-800 text-white">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`${feature.bgColor} p-6 rounded-xl shadow-lg hover:shadow-2xl text-center text-white transform transition-transform hover:scale-105`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
  );
};

export default FeatureSection;
