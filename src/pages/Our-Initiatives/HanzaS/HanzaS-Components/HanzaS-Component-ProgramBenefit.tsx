import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: "🎁",
    title: "Free Training",
    desc: "Completely free training – no cost at all to participants.",
  },
  {
    icon: "💰",
    title: "Monthly Stipend",
    desc: "Financial support to encourage consistent participation.",
  },
  {
    icon: "✂️",
    title: "Practical Sewing Skills",
    desc: "Hands-on learning including cutting, stitching, and finishing.",
  },
  {
    icon: "🧕",
    title: "Mentor Support",
    desc: "Safe space guided by experienced women mentors.",
  },
];

const HanzaSComponentProgramBenefit: React.FC = () => {
  return (
    <motion.section
      className="snap-start min-h-screen w-full bg-gray-800 px-4 py-20 flex flex-col items-center justify-center relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-[60vw] h-[60vw] bg-purple-500/10 rounded-full blur-[120px] top-1/3 left-1/4 opacity-30"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold font-serif text-white text-center z-10 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What Makes It Unique?
      </motion.h2>

      {/* Riverflow Cards */}
      <div className="z-10 flex flex-col gap-14 max-w-4xl w-full relative">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col sm:flex-row ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } items-center gap-6 sm:gap-12`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="text-4xl sm:text-5xl text-purple-300 drop-shadow">{item.icon}</div>
            <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg w-full sm:w-2/3 text-white">
              <h3 className="text-xl font-semibold mb-2 text-purple-200">{item.title}</h3>
              <p className="text-base sm:text-lg text-gray-200">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HanzaSComponentProgramBenefit;
