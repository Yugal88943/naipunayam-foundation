import React from "react";
import { motion } from "framer-motion";

const HanzaSComponentProgramIntro: React.FC = () => {
  const threadMarker = (
    <motion.div
      className="text-purple-400 text-xl sm:text-2xl"
      initial={{ rotate: -30, scale: 0, opacity: 0 }}
      whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 12,
      }}
    >
      🪡
    </motion.div>
  );

  return (
    <motion.section
      className="snap-start min-h-screen w-full bg-gray-800 flex items-center justify-center px-6 py-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 1 }}
    >
      {/* Content Flow */}
      <div className="max-w-2xl w-full z-10 flex flex-col items-center gap-14 text-white relative">
        {/* Block 1 */}
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {threadMarker}
          <h1 className="text-4xl sm:text-5xl font-bold font-serif">
            About the Program
          </h1>
        </motion.div>

        {/* Block 2 */}
        <motion.div
          className="flex flex-col items-center text-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {threadMarker}
          <p className="text-xl sm:text-2xl text-purple-300 font-medium">
            🧵 <span className="text-white">Free Sewing Training for Women</span> – Learn, Stitch, Empower!
          </p>
        </motion.div>

        {/* Block 3 */}
        <motion.div
          className="flex flex-col items-center text-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {threadMarker}
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            Naipunayam Foundation, in collaboration with{" "}
            <span className="text-indigo-400 font-semibold">HanzaS</span>, offers a{" "}
            <span className="text-white font-bold">100% free</span> hands-on sewing program
            for women in <span className="text-indigo-300 font-medium">Solan</span>.
          </p>
        </motion.div>

        {/* Block 4 */}
        <motion.div
          className="flex flex-col items-center text-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {threadMarker}
          <p className="text-sm sm:text-lg text-gray-300 italic leading-relaxed">
            This initiative empowers women with{" "}
            <span className="text-purple-200 font-medium">tailoring skills</span> that help
            them become <span className="text-purple-200 font-medium">independent</span>,{" "}
            <span className="text-purple-200 font-medium">confident</span>, and{" "}
            <span className="text-purple-200 font-medium">career-ready</span>.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HanzaSComponentProgramIntro;
