import React from "react";
import { motion } from "framer-motion";
import {
  FaHandsHelping, FaStar, FaLightbulb, FaUserFriends, FaRocket, FaBook, FaMapMarkerAlt
} from "react-icons/fa";

// -- Chips Data --
const chips = [
  { text: "Best NGO in Himachal Pradesh", icon: <FaStar className="text-yellow-500" />, color: "from-fuchsia-200 to-fuchsia-100 text-fuchsia-800 border-none" },
  { text: "Solan Based Non-Profit", icon: <FaMapMarkerAlt className="text-pink-500" />, color: "from-pink-200 to-pink-100 text-pink-800 border-none" },
  { text: "Technical Education", icon: <FaBook className="text-indigo-500" />, color: "from-indigo-200 to-indigo-100 text-indigo-800 border-none" },
  { text: "Women Empowerment", icon: <FaHandsHelping className="text-emerald-500" />, color: "from-emerald-200 to-emerald-100 text-emerald-800 border-none" },
  { text: "Community Upliftment", icon: <FaUserFriends className="text-blue-400" />, color: "from-blue-200 to-blue-100 text-blue-800 border-none" },
  { text: "Innovation-Driven Initiatives", icon: <FaLightbulb className="text-yellow-400" />, color: "from-yellow-100 to-yellow-50 text-yellow-900 border-none" },
  { text: "Join the Movement!", icon: <FaRocket className="text-orange-500" />, color: "from-orange-200 to-orange-100 text-orange-800 border-none" },
];

// -- Animation for subtle float --
const floatVariants = {
  animate: (i: number) => ({
    y: [0, -8, 0, 6, 0],
    x: [0, 6 * ((i % 2 === 0) ? 1 : -1), 0, -6 * ((i % 3 === 0) ? 1 : -1), 0],
    transition: {
      duration: 4 + (i % 2),
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
      delay: i * 0.12,
    },
  }),
};

function FloatingChipsArc() {
  return (
    <div className="relative flex w-full justify-center mb-[-42px] z-10 pointer-events-none select-none">
      <div className="flex flex-wrap justify-center gap-2"
        style={{
          transform: "translateY(8px)", // so they sit *over* the hero
        }}>
        {chips.map((chip, i) => (
          <motion.div
            key={chip.text}
            className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md bg-gradient-to-br font-semibold text-base ${chip.color}
            hover:scale-105 hover:shadow-lg transition-transform duration-200 cursor-pointer`}
            style={{
              filter: "blur(0.2px)", // slight blend
              boxShadow: "0 3px 14px 0 rgba(140,98,255,0.07)",
              opacity: 0.98
            }}
            variants={floatVariants}
            animate="animate"
            custom={i}
            whileHover={{ scale: 1.09, rotate: 1 }}
            tabIndex={-1}
          >
            <span className="text-lg">{chip.icon}</span>
            <span>{chip.text}</span>
          </motion.div>
        ))}
      </div>
      {/* Blurred background arc behind chips */}
      <div className="absolute w-[80vw] h-24 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 70%, #fff0f3 70%, transparent 100%)",
          filter: "blur(18px)",
        }}
      />
    </div>
  );
}

export default function ContactUsComponentIntro() {
  return (
    <section
      className="
        relative w-full flex flex-col items-center justify-center
        bg-gradient-to-br from-indigo-50 via-pink-50 to-emerald-50
        min-h-[40vh] md:min-h-[60vh] lg:min-h-[62vh]
      "
      style={{
        minHeight: "clamp(330px, 45vh, 700px)", // Mobile: ~45vh, Desktop: up to 700px
        paddingTop: "max(env(safe-area-inset-top, 0px), 3.5rem)",
        paddingBottom: "max(env(safe-area-inset-bottom, 0px), 2.5rem)",
      }}
    >
      {/* Chips now float *on* the hero */}
      <FloatingChipsArc />

      {/* Big Faint Bokeh Circles */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[300px] h-[140px] rounded-full bg-fuchsia-100 opacity-30 blur-2xl z-0 pointer-events-none" />
      <div className="absolute top-[36%] left-1/4 w-[120px] h-[80px] rounded-full bg-emerald-100 opacity-25 blur-xl z-0 pointer-events-none" />
      <div className="absolute top-[36%] right-1/4 w-[110px] h-[60px] rounded-full bg-indigo-100 opacity-25 blur-lg z-0 pointer-events-none" />

      {/* Section Title */}
      <div className="relative z-10 pt-16 md:pt-28 pb-4 flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="mb-2 flex gap-2">
            <motion.span
              initial={{ scale: 0.7, rotate: -18, opacity: 0 }}
              animate={{ scale: [0.7, 1.1, 1], rotate: [-18, 0, -7, 0], opacity: 1 }}
              transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse" }}
              className="text-[2.3rem] md:text-4xl text-fuchsia-500 drop-shadow-lg"
            >
              <FaHandsHelping />
            </motion.span>
          </span>
          <h1 className="text-4xl pb-4  md:text-5xl font-black text-center bg-gradient-to-r from-fuchsia-600 via-indigo-700 to-emerald-500 bg-clip-text text-transparent drop-shadow-md mb-1">
            Let's Connect with Naipunayam Foundation
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{
              opacity: 1,
              y: [0, -6, 0, 5, 0],         // gentle up/down float
              scale: [1, 1.01, 0.99, 1],   // very light scale pulse
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="
              max-w-2xl text-center text-base md:text-lg font-semibold
              px-4 py-2
              bg-gradient-to-r from-white/90 to-emerald-50/90
              rounded-xl shadow-sm
              tracking-wide border border-fuchsia-100/40
              flex items-center justify-center gap-2
              mx-auto mt-2
              bg-clip-padding
            "
            style={{
              background: "linear-gradient(120deg,#f5f3ffcc,#e0f2f1cc 100%)",
              boxShadow: "0 1px 12px 0 rgba(99,102,241,0.08)",
              backdropFilter: "blur(5px)",
            }}
          >
            <motion.span
              className="animate-pulse text-xl"
              animate={{
                rotate: [0, 10, -10, 0],
                transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
              }}
            >🤝</motion.span>
              <span className="font-extrabold bg-gradient-to-r from-fuchsia-600 via-emerald-600 to-indigo-600 bg-clip-text text-transparent drop-shadow">
                We’re here to help you.
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-emerald-500 font-bold drop-shadow-sm ml-1">
                Whether you want to <span className="text-emerald-500 font-extrabold hover:animate-pulse transition">volunteer</span>, <span className="text-fuchsia-600 font-extrabold hover:animate-pulse transition">collaborate</span>,
                or have any <span className="text-indigo-600 font-extrabold hover:animate-pulse transition">questions</span>,
                our team is eager to <span className="text-pink-500 font-extrabold hover:animate-pulse transition">connect</span> and <span className="text-emerald-500 font-extrabold hover:animate-pulse transition">support</span> you.
              </span>
            <motion.span
              className="animate-pulse text-xl"
              animate={{
                rotate: [0, -10, 10, 0],
                transition: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }
              }}
            >✨</motion.span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
