import React from "react";
import { motion } from "framer-motion";
import hanzaSVision from "@/assets/Our-Initiatives-Section/hanzas_vision.png";

const HanzaSComponentVision: React.FC = () => {
  return (
    <motion.section
      className="snap-start min-h-screen w-full relative flex items-center justify-center bg-gray-800 px-4 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background Decoration */}
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

      {/* Image + Overlay */}
      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl group z-10 sm:min-h-[500px]">
        <img
          src={hanzaSVision}
          alt="HanzaS Vision"
          className="w-full h-full object-cover max-h-[768px] transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay with scroll support on small devices */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-10 p-1">
          <motion.div
            className="bg-white/20 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-10 text-white text-center max-w-3xl shadow-lg border border-white/30 opacity-90 group-hover:opacity-100 transition-opacity duration-500 overflow-y-auto max-h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-4 drop-shadow-lg">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 text-gray-100  drop-shadow-sm bold">
            <b> At HanzaS, fashion meets innovation with a deep respect for tradition. We are committed to
redefining style through a seamless fusion of contemporary trends and timeless elegance.
Every collection showcases high-quality materials, refined craftsmanship, and designs
that empower and inspire confidence.
Our passion lies in preserving the rich heritage of traditional craftsmanship. Each
handcrafted piece—whether fashion, home décor, or accessory—is thoughtfully created to
ensure originality, durability, and beauty. We believe every item tells a story—of culture,
artistry, and purpose.
  </b></p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-100 drop-shadow-sm">
             <b> With HanzaS, you don&#39;t just wear or own a product—you embrace a journey. A journey of
artistry, comfort, and elegance that celebrates individuality while honoring the legacy of
skilled artisans. Let your style speak with meaning, and your space reflect heritage—elevated
by the spirit of HanzaS.   </b> </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HanzaSComponentVision;
