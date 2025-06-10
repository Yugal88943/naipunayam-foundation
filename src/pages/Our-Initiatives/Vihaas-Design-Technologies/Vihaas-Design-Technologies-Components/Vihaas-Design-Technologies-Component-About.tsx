import React from "react";
import { motion } from "framer-motion";
import { Cpu, Users, Settings, Star } from "lucide-react";
import vihaasDesignIntro from "@/assets/Our-Initiatives-Section/vihaas-design-intro.webp";

const VihaasDesignTechnologiesComponentAbout: React.FC = () => {
  const features = [
    {
      icon: <Cpu size={32} />, color: "text-green-600", title: "Telecom Innovation", desc: "Building secure, indigenous communication solutions for India."
    },
    {
      icon: <Settings size={32} />, color: "text-teal-500", title: "Product Engineering", desc: "From concept to turnkey deployment, all under one roof."
    },
    {
      icon: <Users size={32} />, color: "text-blue-500", title: "Local Empowerment", desc: "Creating jobs and nurturing talent across Himachal Pradesh."
    },
    {
      icon: <Star size={32} />, color: "text-yellow-500", title: "Excellence in R&D", desc: "Driving cutting-edge telecom research and development."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-green-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-cyan-500 to-blue-400 pb-5 text-center">
            About Vihaas Design Technologies
          </h2>
          <p className="text-lg text-green-900 text-justify leading-relaxed">
            Vihaas Design Technologies, founded in 2017 in Solan, Himachal Pradesh, is a pioneering telecommunications R&D company committed to the 'Make in India' initiative.
          </p>
          <p className="text-lg text-green-900 text-justify leading-relaxed">
            The company excels in designing and manufacturing telecom systems such as EPABX, media gateways, IP & analog phones, and also delivers EMS, software development, and PCB design services.
          </p>
          <p className="text-lg text-green-900 text-justify leading-relaxed">
            Vihaas fosters a collaborative, innovation-driven culture with a flat hierarchy—empowering local talent and shaping the future of Indian telecom.
          </p>
          <motion.a
            href="http://www.vihaasdtech.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 text-green-700 font-semibold hover:underline hover:text-green-900 transition-all duration-300"
          >
            🔗 Visit Vihaas Design Technologies
          </motion.a>
          <img src={vihaasDesignIntro} alt="Vihaas Design Intro" className="rounded-xl shadow-md mt-6 object-contain object-center" />
        </motion.div>

        <div className="relative pl-6 border-l-4 border-green-300 mt-16 lg:mt-24">
          {features.map(({ icon, color, title, desc }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative mb-10 ml-4"
            >
              <div className="absolute -left-6 top-2 w-4 h-4 rounded-full bg-green-400 border-4 border-white"></div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className={`mb-3 ${color}`}>{icon}</div>
                <h3 className="font-semibold text-green-800 mb-1">{title}</h3>
                <p className="text-sm text-green-700 text-justify leading-snug">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VihaasDesignTechnologiesComponentAbout;
