import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHandsHelping, FaUserPlus } from "react-icons/fa";

export default function HomeComponentVolunteerSupport() {
  return (
    <section className="relative w-full py-14 md:py-24 px-3 bg-gradient-to-br from-pink-50 via-indigo-50 to-emerald-50 flex flex-col items-center overflow-hidden">
      
      {/* Heading */}
      <motion.h2
        className="text-center text-[clamp(2rem,6vw,3rem)] font-extrabold bg-gradient-to-r from-fuchsia-600 via-indigo-700 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm mb-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Join Hands with Us
      </motion.h2>

      {/* Subtext */}
      <p className="text-base md:text-lg text-slate-700 mb-8 max-w-2xl mx-auto text-center">
        We believe in <span className="font-bold text-indigo-600">collective growth</span>. Be a part of our mission by volunteering or supporting with us.
      </p>

      {/* CTA Buttons */}
      <motion.div
        className="relative flex flex-col sm:flex-row items-center gap-7 px-6 py-7 rounded-2xl bg-white/80 shadow-2xl border border-fuchsia-100"
        initial={{ opacity: 0, scale: 0.97, y: 32 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
      >
        {/* Volunteer Button */}
        <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }} className="transition-all duration-200">
          <Link
            to="/get-involved/volunteer"
            className="group relative flex items-center gap-2 px-8 py-3 rounded-xl font-bold bg-gradient-to-r from-fuchsia-500 to-pink-400 text-white shadow-md border-2 border-fuchsia-200 focus:outline-none focus:ring-4 focus:ring-fuchsia-100 text-base md:text-lg hover:from-pink-400 hover:to-fuchsia-500 hover:border-fuchsia-400 transition-all duration-200 min-w-[140px] text-center"
          >
            <FaUserPlus className="text-lg md:text-xl opacity-80" />
            Volunteer
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-fuchsia-400/20 to-white/10 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 pointer-events-none" />
          </Link>
        </motion.div>

        {/* Partner Button */}
        <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }} className="transition-all duration-200">
          <Link
            to="/get-involved/partner-with-us"
            className="group relative flex items-center gap-2 px-8 py-3 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-emerald-400 text-white shadow-md border-2 border-emerald-200 focus:outline-none focus:ring-4 focus:ring-emerald-100 text-base md:text-lg hover:from-emerald-400 hover:to-cyan-500 hover:border-emerald-400 transition-all duration-200 min-w-[160px] text-center"
          >
            <FaHandsHelping className="text-lg md:text-xl opacity-80" />
            Partner With Us
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-300/20 to-white/10 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 pointer-events-none" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative Wave */}
      <svg
        viewBox="0 0 1440 150"
        className="absolute left-0 bottom-0 w-full h-20 md:h-32 z-0"
        preserveAspectRatio="none"
        aria-hidden="true"
        role="presentation"
      >
        <defs>
          <linearGradient id="curveGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.18" />
            <stop offset="40%" stopColor="#a5b4fc" stopOpacity="0.17" />
            <stop offset="100%" stopColor="#bbf7d0" stopOpacity="0.21" />
          </linearGradient>
        </defs>
        <path
          fill="url(#curveGradient)"
          d="M0,40 C360,150 1080,0 1440,110 L1440,150 L0,150 Z"
        />
      </svg>
    </section>
  );
}
