import aboutUs2 from "@/assets/About-Section/about-2.jpg";
import vihaasTech2 from "@/assets/About-Section/vihaas-tech-2.jpg";
import vihaasTech9 from "@/assets/About-Section/vihaas-tech-9.jpeg";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineSections = [
  {
    img: aboutUs2,
    imgAlt: "Skill development",
    title: "Who We Are",
    text: "Naipunayam Foundation is a registered Public Charitable Trust dedicated to uplifting communities through skill development, education, and social welfare.",
    features: [
      "Empowering marginalized communities in Solan, Himachal Pradesh, and the Tricity.",
      "Registered Public Charitable Trust"
    ]
  },
  {
    img: vihaasTech2,
    imgAlt: "Registration date",
    title: "Our Milestone",
    text: "We officially registered on 22/07/2022 as a recognized Public Charitable Trust.",
    features: [
      "Registered: 22/07/2022",
      "Area: Solan, HP (India)"
    ]
  },
  {
    img: vihaasTech9,
    imgAlt: "Community Impact",
    title: "What We Do",
    text: "We foster community growth through education, skill training, and social welfare programs, creating a lasting impact for marginalized sections.",
    features: [
      "Focused on sustainable growth",
      "Hands-on education and support"
    ]
  }
];

type TimelineSectionProps = {
  section: {
    img: string;
    imgAlt: string;
    title: string;
    text: string;
    features: string[];
  };
  index: number;
  isActive: boolean;
};

const TimelineSection: React.FC<TimelineSectionProps> = ({ section, index, isActive }) => {
  const isLeft = index % 2 === 0;
  const variants = {
    hidden: { opacity: 0.4, x: isLeft ? -60 : 60, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, type: "spring" }
    }
  };

  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-between my-12 md:my-24 z-10">
      {/* TEXT FIRST ON MOBILE */}
      <motion.div
        className={`
          w-full md:w-5/12 flex flex-col gap-3 px-2
          order-1
          ${isLeft ? "md:pl-8 md:order-3" : "md:pr-8 md:order-1"}
        `}
        variants={variants}
        animate={isActive ? "visible" : "hidden"}
        initial="hidden"
      >
        <h3 className="font-extrabold text-2xl sm:text-3xl text-blue-700 mb-3 text-center">
          {section.title}
        </h3>

        <p className="text-base sm:text-lg font-medium text-gray-800 mb-2 text-center">
          {section.text}
        </p>

        <ul className="mt-4 space-y-2 mb-4 flex flex-col items-center text-center">
          {section.features.map((feat, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-blue-800 font-medium text-sm sm:text-base"
            >
              <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Dot - HIDDEN on mobile, visible on md+ */}
      <div className="hidden md:flex relative z-20 md:order-2 flex-col items-center order-2">
        <span
          className={`block w-7 h-7 rounded-full border-4 border-white shadow-lg ${
            isActive
              ? "bg-gradient-to-br from-blue-600 to-cyan-400"
              : "bg-gradient-to-br from-blue-500 to-cyan-400 opacity-60"
          }`}
        />
      </div>

      {/* IMAGE LAST ON MOBILE */}
      <motion.div
        className={`
          w-full md:w-5/12 flex justify-center items-center mb-6 md:mb-0
          order-3
          ${isLeft ? "md:order-1" : "md:order-3"}
        `}
        variants={variants}
        animate={isActive ? "visible" : "hidden"}
        initial="hidden"
      >
        <div className="bg-white rounded-2xl shadow-xl border-2 border-cyan-100 p-2 w-full max-w-xs sm:max-w-sm md:max-w-full aspect-[4/3] flex items-center">
          <img
            src={section.img}
            alt={section.imgAlt}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </motion.div>
    </div>
  );
};

const AboutTimeline = () => {
  const containerRef = useRef(null);

  // Ensure container is relative (fixes Framer Motion scroll warning)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20
  });

  const sectionRefs = timelineSections.map(() => useRef(null));
  const inViews = sectionRefs.map((ref) =>
    useInView(ref, { amount: 0.6, once: false })
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-12 px-2 sm:px-4 bg-gradient-to-br from-blue-100 via-white to-cyan-100 overflow-x-hidden"
    >
      <div className="relative w-full max-w-2xl md:max-w-5xl mx-auto">
        {/* Timeline Line */}
        <motion.div
          className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-2 bg-gradient-to-b from-cyan-300 to-blue-300 rounded-full z-0"
          aria-hidden
        >
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-2 bg-gradient-to-b from-blue-600 to-cyan-400 rounded-full origin-top"
            style={{ height: "100%", scaleY }}
          />
        </motion.div>

        {/* Timeline Sections */}
        {timelineSections.map((section, idx) => (
          <div ref={sectionRefs[idx]} key={idx} className="relative">
            <TimelineSection
              section={section}
              index={idx}
              isActive={inViews[idx]}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTimeline;
