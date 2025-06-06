import React from "react";
import { motion } from "framer-motion";
import { FaMicrochip, FaLaptopCode, FaDraftingCompass } from "react-icons/fa";

const programs = [
  {
    title: "Embedded Systems & IoT",
    icon: <FaMicrochip />,
    color: "bg-teal-500",
  },
  {
    title: "PCB Design & Hardware",
    icon: <FaLaptopCode />,
    color: "bg-blue-500",
  },
  {
    title: "Mechanical Drawings & CAD",
    icon: <FaDraftingCompass />,
    color: "bg-indigo-500",
  },
  // Add more items here if needed
];

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export default function ProgramsSection() {
  return (
    // <section className="w-full bg-white px-4 sm:px-6 md:px-10 pt-20 pb-48 id="get-involved">
    
    <section
  id="get-involved"
  className="w-full bg-white px-4 sm:px-6 md:px-10 pt-20 pb-48"
>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* LEFT – Sticky title (desktop) */}
        <div className="flex justify-center md:justify-start md:sticky md:top-[30vh] h-fit">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-br from-green-700 via-teal-600 to-blue-600 leading-tight text-center md:text-left pb-4">
            Programs
          </h2>
        </div>

        {/* RIGHT – Scrollable and animated circles */}
        <div className="flex flex-col items-center space-y-24">
          {programs.map((item, idx) => (
            <motion.div
              key={idx}
              className={`
                w-[80vw] max-w-[300px] h-[80vw] max-h-[300px]
                rounded-full flex flex-col items-center justify-center text-center
                shadow-xl border border-gray-200 bg-white mx-auto
                transition-transform duration-300 ease-in-out
                hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.15)]
              `}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className={`
                relative text-4xl sm:text-5xl text-white p-6 mb-4 rounded-full
                ${item.color}
                before:content-[''] before:absolute before:inset-0 before:rounded-full
                before:border-4 before:border-white/20 before:animate-ping
              `}>
                {item.icon}
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-700 px-6">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
