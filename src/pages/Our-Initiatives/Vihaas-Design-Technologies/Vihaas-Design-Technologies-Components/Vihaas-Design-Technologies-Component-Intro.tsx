import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, Star } from "lucide-react";

const VihaasDesignTechnologiesComponentIntro: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-green-100 via-white to-blue-100 py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Animated background bubbles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute w-72 h-72 bg-green-200 rounded-full opacity-30 animate-pulse -top-10 -left-10 blur-2xl" />
        <div className="absolute w-60 h-60 bg-blue-200 rounded-full opacity-30 animate-ping -bottom-10 right-10 blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center gap-10 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          whileHover={{ scale: 1.1, y: -6 }}
          className="flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white w-20 h-20 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <Sparkles size={36} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-cyan-500 to-blue-400 hover:brightness-110 transition duration-300"
        >
          Skill Development Initiative
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-blue-900 max-w-2xl hover:scale-[1.03] transition-transform duration-300"
        >
          Empowering Youth in Himachal Pradesh with Skills, Innovation & Opportunity
        </motion.p>

        {/* Floating Journey Path */}
        <div className="relative w-full mt-12 max-w-md">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-cyan-400 to-blue-400 animate-pulse" />
          <div className="relative z-10 flex flex-col gap-16">
            {[{
              icon: <Users size={36} />, title: "Empowering Communities"
            }, {
              icon: <Star size={36} />, title: "Fostering Excellence"
            }].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 mx-auto w-full max-w-sm hover:ring-2 hover:ring-blue-300"
              >
                <div className="flex flex-col items-center text-blue-700">
                  <motion.div whileHover={{ y: -5 }} className="mb-2">
                    {item.icon}
                  </motion.div>
                  <span className="text-lg font-medium text-center text-blue-900">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VihaasDesignTechnologiesComponentIntro;
