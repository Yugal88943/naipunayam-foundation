import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaGift, FaMoneyBillWave, FaUserFriends } from "react-icons/fa";

const VihaasDesignTechnologiesComponentProgramIntro: React.FC = () => (
  <section className="w-full bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 py-24 px-6 font-serif">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <motion.h2
        className="text-5xl font-extrabold text-indigo-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-500 to-cyan-400 animate-gradient-x pb-5"
      >
        About the Program
      </motion.h2>
      <motion.p
        className="text-lg text-blue-800 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Discover how our free soldering training initiative empowers youth with skills, guidance, and real-world opportunities in Solan.
      </motion.p>
    </motion.div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {[{
        icon: <FaTools size={32} className="text-indigo-600 mb-3 group-hover:scale-110 transition-transform duration-300" />,
        title: "About the Program",
        content: "🔧 Free Soldering Training for Youth – Learn, Build, Empower! 💥 100% free, hands-on training in Solan empowering youth to gain confidence and practical skills."
      }, {
        icon: <FaGift size={32} className="text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" />,
        title: "Free Training",
        content: "Completely Free Training – no cost to learners, ensuring accessible skill-building for all."
      }, {
        icon: <FaMoneyBillWave size={32} className="text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300" />,
        title: "Stipend",
        content: "Monthly Stipend to support participation – earn while you learn!"
      }, {
        icon: <FaUserFriends size={32} className="text-cyan-600 mb-3 group-hover:scale-110 transition-transform duration-300" />,
        title: "Mentor Support",
        content: "Empowering environment led by skilled mentors to guide youth throughout the program."
      }].map(({ icon, title, content }, idx) => (
        <motion.div
          key={idx}
          className="[perspective:1000px] group"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="relative h-64 w-full rounded-xl shadow-2xl bg-white text-blue-900 [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 p-6 flex flex-col items-center justify-center font-bold text-center text-lg">
              {icon}
              <span className="mt-2">{title}</span>
            </div>
            <div className="absolute inset-0 p-5 bg-blue-100 text-sm text-blue-900 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center rounded-xl shadow-inner">
              {content}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default VihaasDesignTechnologiesComponentProgramIntro;
