import React from "react";
import { motion } from "framer-motion";
import hanzaSMission from "@/assets/Our-Initiatives-Section/hanzas_mission.png";

const HanzaSComponentMission: React.FC = () => {
  return (
    <motion.section
      className="snap-start min-h-screen w-full relative flex items-center justify-center bg-gray-800 px-4 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-[80vw] h-[80vw] bg-white rounded-full blur-2xl opacity-5 hidden md:block"
          initial={{ scale: 0.8, y: 100 }}
          whileInView={{ scale: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-48 h-48 border-t-2 border-l-2 border-gray-300 rotate-12 opacity-20 hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 1 }}
        />
      </div>

      {/* Image and Overlay Content */}
      <div className="relative max-w-6xl w-full rounded-2xl overflow-hidden shadow-2xl group z-10 sm:min-h-[500px]">
        <img
          src={hanzaSMission}
          alt="HanzaS Mission"
          className="w-full h-full object-cover max-h-[768px] transition-transform duration-700 group-hover:scale-105"
        />

        {/* Scrollable Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-10 p-1">
          <motion.div
            className="bg-white/20 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-10 text-white text-center max-w-3xl shadow-lg border border-white/30 opacity-90 group-hover:opacity-100 transition-opacity duration-500 overflow-y-auto max-h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-4 drop-shadow-lg">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 text-gray-100 drop-shadow-sm font-semibold">
              At HanzaS, we are dedicated to sustainable fashion and craftsmanship, offering a wide
              range of eco-friendly and organic materials like raw silk, banana silk, lotus silk,
              Pashmina, hemp, and handwoven cotton. Our collections are elevated with traditional
              handwork techniques such as Kantha, Phulkari, Bandhani, Ikat, Kalamkari, and more.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-100 drop-shadow-sm font-semibold">
              Beyond textiles, we celebrate India’s rich artisanal heritage through a curated selection
              of handcrafted home décor, jewelry, pottery, metalwork, wood and stone carvings, and
              bamboo crafts. Each piece is a reflection of cultural tradition, sustainability, and the
              skilled hands of local artisans — bringing authenticity and elegance to your wardrobe
              and home.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HanzaSComponentMission;
