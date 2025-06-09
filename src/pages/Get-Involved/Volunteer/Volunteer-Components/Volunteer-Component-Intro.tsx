import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaLaptop, FaPeopleCarry } from "react-icons/fa";
import { Link } from "react-router-dom";

const opportunities = [
  {
    icon: <FaHandsHelping className="text-cyan-600 drop-shadow-lg text-4xl md:text-5xl animate-pulse" />,
    title: "Mentor & Train",
    desc: "Guide students in tech or soldering, helping them develop real-world skills for a brighter future.",
  },
  {
    icon: <FaLaptop className="text-blue-600 drop-shadow-lg text-4xl md:text-5xl animate-pulse" />,
    title: "Remote Volunteering",
    desc: "Help with content creation, design, or admin tasks from anywhere in the world.",
  },
  {
    icon: <FaPeopleCarry className="text-emerald-600 drop-shadow-lg text-4xl md:text-5xl animate-pulse" />,
    title: "Field Events & Drives",
    desc: "Join our field events in Himachal to bring change directly to the community.",
  },
];

export default function VolunteerTimeline() {
  return (
    <section className="relative w-full flex justify-center items-center py-14 md:py-24 bg-gradient-to-br from-blue-100 via-emerald-100 to-cyan-100 overflow-x-clip">
      {/* <BubbleBG /> */}

      <div className="relative w-full max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto z-10">
        <motion.div
          className="flex flex-col items-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.h2
            className="text-[clamp(2.2rem,5vw,3.3rem)] font-extrabold text-center mb-2 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent drop-shadow-xl"
            initial={{ letterSpacing: "-0.04em" }}
            whileInView={{ letterSpacing: "0.01em" }}
            transition={{ duration: 1.2 }}
          >
            Volunteer <span className="text-blue-700 drop-shadow-lg">With Us</span>
          </motion.h2>
          <motion.p
            className="text-[1.2rem] md:text-[1.36rem] text-center font-semibold bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1 }}
          >
            Be the change in someone's life today.
          </motion.p>
        </motion.div>

        <div className="hidden sm:block absolute left-1/2 top-32 bottom-32 w-2 -translate-x-1/2 z-0 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 4 800" fill="none" preserveAspectRatio="none">
            <motion.path
              d="M2 0 Q4 100 2 200 Q0 300 2 400 Q4 500 2 600 Q0 700 2 800"
              stroke="url(#grad)"
              strokeWidth="4"
              fill="none"
              initial={{ strokeDasharray: 900, strokeDashoffset: 900 }}
              whileInView={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.3, delay: 0.13, type: "spring" }}
            />
            <defs>
              <linearGradient id="grad" x1="0" x2="0" y1="0" y2="800" gradientUnits="userSpaceOnUse">
                <stop stopColor="#06b6d4" />
                <stop offset="0.6" stopColor="#3b82f6" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col gap-16 md:gap-28 lg:gap-32">
          {opportunities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.24, type: "spring", stiffness: 64 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className={`
                relative group bg-white/90 backdrop-blur-xl
                rounded-3xl shadow-2xl border border-cyan-200 p-8 sm:p-12 flex flex-col items-center
                w-full max-w-[90vw] sm:max-w-[410px] md:max-w-[570px] lg:max-w-[740px] mx-auto
                transition-all duration-200
                hover:shadow-[0_18px_40px_0_rgba(56,189,248,0.14)]
                hover:brightness-105
                ${i === 0 ? "mt-16" : "mt-10"}
              `}
            >
              <motion.div
                className="absolute left-1/2 -top-12 sm:-top-14 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-xl flex items-center justify-center ring-4 ring-cyan-200 group-hover:scale-110 transition-all duration-200"
                whileHover={{ scale: 1.12, rotate: 8 }}
                style={{ zIndex: 2 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-500 bg-clip-text mb-2 mt-9 text-center drop-shadow-md">
                {item.title}
              </h3>
              <p className="text-gray-800 text-lg md:text-xl text-center font-semibold bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-500 bg-clip-text text-transparent">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
        >
          <Link
            to="/contact-us"
            className="inline-block px-10 py-4 rounded-full font-bold text-white text-lg md:text-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 shadow-lg hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200 animate-bounce-slow"
            style={{ boxShadow: "0 8px 36px 0 rgba(59,130,246,0.14)" }}
          >
            Join as a Volunteer
          </Link>
        </motion.div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-13px); }
        }
        .animate-bounce-slow { animation: bounce-slow 1.7s infinite; }
      `}</style>
    </section>
  );
}
