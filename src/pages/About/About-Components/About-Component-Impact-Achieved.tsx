import React from "react";
import { motion } from "framer-motion";

const impacts = [
  {
    number: "900+",
    description: "Women Empowered with Vocational Training"
  },
  {
    number: "500+",
    description: "Students Skilled and Empowered in Technology"
  },
  {
    number: "200+",
    description: "Youth Trained in Digital and Technical Competencies with Exposure to R&D"
  }
];

const yellow = "#efd788";
const navy = "#223159";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15
    }
  }
};
const impactVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const AboutComponentImpactAchieved: React.FC = () => (
  <motion.section
    className="w-full bg-[#f8f8f8] py-8 md:py-20 overflow-x-hidden"
    style={{ fontFamily: "inherit" }}
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
  >
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-y-10 md:gap-x-16">
      {/* LEFT: HEADLINE */}
      <motion.div
        className="w-full md:w-2/5 flex flex-col items-center md:items-end"
        variants={impactVariants}
      >
        <h2
          className="
            text-[clamp(2rem,6vw,4.5rem)]
            font-extrabold uppercase leading-tight
            bg-gradient-to-r from-green-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent
            drop-shadow-xl text-center w-full max-w-[430px]
          "
          style={{
            letterSpacing: "0.02em",
            lineHeight: 1.08,
            margin: 0,
            padding: 0,
            wordBreak: "break-word",
          }}
        >
          Impact<br />Achieved
        </h2>
      </motion.div>
      {/* RIGHT: IMPACTS */}
      <div className="flex-1 flex flex-col gap-7 md:gap-12 justify-center w-full">
        {impacts.map((item) => (
          <motion.div
            key={item.number}
            className="grid grid-cols-[auto,1fr] items-start gap-x-3 md:gap-x-8 w-full"
            variants={impactVariants}
          >
            <span
              className="font-extrabold text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3.2rem] text-right"
              style={{
                color: yellow,
                lineHeight: 1,
                letterSpacing: "0.01em",
                whiteSpace: "nowrap"
              }}
            >
              {item.number}
            </span>

            <span
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold break-words"
              style={{
                color: navy,
                lineHeight: 1.28,
                fontWeight: 600,
              }}
            >
              {item.description}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default AboutComponentImpactAchieved;
