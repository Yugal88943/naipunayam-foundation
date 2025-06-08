import React from "react";
import { motion } from "framer-motion";

const impacts = [
  {
    number: "900+",
    description: "Women Empowered with Vocational Training",
  },
  {
    number: "500+",
    description: "Students Skilled and Empowered in Technology",
  },
  {
    number: "200+",
    description: "Youth Trained in Digital and Technical Competencies with Exposure to R&D",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AboutComponentImpactAchieved: React.FC = () => {
  return (
    <motion.section
      className="w-full bg-[#f8f8f8] py-12 md:py-20 overflow-x-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Headline */}
        <motion.div
          className="w-full md:w-2/5 text-center md:text-right"
          variants={itemVariants}
        >
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold uppercase leading-tight bg-gradient-to-r from-green-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-xl tracking-wide">
            Impact<br />Achieved
          </h2>
        </motion.div>

        {/* Impact List */}
        <div className="w-full flex flex-col gap-8 md:gap-12">
          {impacts.map(({ number, description }, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="grid grid-cols-[auto,1fr] items-start gap-4 md:gap-8"
            >
              <span className="text-yellow-400 font-extrabold text-4xl sm:text-5xl md:text-6xl leading-none whitespace-nowrap">
                {number}
              </span>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#223159] leading-snug">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutComponentImpactAchieved;
