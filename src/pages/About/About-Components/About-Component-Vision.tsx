import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const visionDescription = `
We envision a world where every individual—regardless of their background, gender, or economic status—has access to quality education, modern technology, and the tools to build a sustainable and dignified livelihood. We believe in breaking the cycle of poverty through skill-based training, digital literacy, and community-driven initiatives that spark innovation, self-reliance, and long-term impact. Our goal is not just empowerment—but true transformation, where each person becomes a catalyst for change in their family, community, and beyond.
`;

const AboutComponentVision: React.FC = () => {
  const descriptionRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: descriptionRef,
    offset: ["start end", "end start"],
  });

  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const scaleHeadline = useTransform(scrollYProgress, [0, 0.9], [1, 1.08]);
  const opacityHeadline = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);
  const blurHeadline = useTransform(scrollYProgress, [0, 0.8], [0, 6]);

  return (
    <div className="relative min-h-screen w-full bg-[#f8f8f8]">
      {/* SECTION 1: Sticky Headline */}
      <section className="sticky top-0 h-screen flex items-center justify-center z-10">
        <motion.h1
          style={{
            y: yHeadline,
            scale: scaleHeadline,
            opacity: opacityHeadline,
            filter: `blur(${blurHeadline.get()}px)`,
          }}
          className="text-[8vw] font-extrabold uppercase tracking-tight drop-shadow-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-cyan-500 to-blue-400"
        >
          Our Vision
        </motion.h1>
      </section>

      {/* SECTION 2: Pointed Curve with Content */}
      <section
        ref={descriptionRef}
        className="relative min-h-fit md:min-h-[60vh] flex flex-col items-center justify-start z-20 bg-white shadow-2xl"
        style={{
          marginTop: "-8rem",
          borderBottomLeftRadius: '1.5rem',
          borderBottomRightRadius: '1.5rem',
          overflow: 'hidden',
        }}
      >
        {/* SVG Pointed Arch */}
        <svg
          className="w-full"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: "100px",
            width: "100%",
            display: "block",
          }}
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="
              M0,160
              Q720,0 1440,160
              L1440,200
              L0,200
              Z
            "
          />
        </svg>

        {/* Content Box - Responsive width! */}
        <div
          className="
            flex flex-col items-center w-full
            max-w-3xl
            xl:max-w-2xl
            2xl:max-w-xl
            mx-auto px-8 py-10 md:py-12
          "
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-cyan-500 to-blue-400 drop-shadow text-center"
          >
            Our Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="
              text-2xl sm:text-1xl
              font-sans font-normal 
              text-blue-800
              leading-normal
              sectionacking-normal
              max-w-3xl mx-auto text-center
              [word-spacing:0.08em]
            "
          >
            {visionDescription}
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default AboutComponentVision;
