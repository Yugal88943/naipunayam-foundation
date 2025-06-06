import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Naipunyam Foundation helped me land an Embedded Development internship, where I gained hands-on skills and invaluable learning.",
    author: "Deepak Dhiman ~JNGEC Sunder Nagar"
  },
  {
    text: "Thanks to Naipunyam Foundation, I got an internship in PCB Designing—now I’m working as a PCB Designer at Vihaas Design Technologies!",
    author: "Diya Sharma ~JNGEC Sunder Nagar"
  },
  {
    text: "Naipunyam Foundation guided me to a Software Engineer internship, where I built real-world skills and kickstarted my tech career.",
    author: "Arpit Bhardwaj ~Chitkara University",
  },
  {
    text: "With Naipunyam Foundation's support, I secured an Embedded Developer internship that gave me practical experience and boosted my confidence.",
    author: "Rajendra Kumar ~IIT Mandi",
  }
];

export default function AboutComponentWhatPeopleSay() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 px-2 sm:px-6 md:px-12 lg:px-32 bg-gradient-to-br from-blue-50 via-emerald-50 to-blue-100">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-sky-600 to-emerald-500 text-transparent bg-clip-text drop-shadow-lg">
        What People Say About Us
      </h2>
      <div className="flex flex-col items-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            className="relative rounded-3xl w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-4 py-10 md:px-12 md:py-14 bg-white/80 shadow-2xl border-4 border-transparent bg-clip-padding backdrop-blur-xl transition-all"
            style={{
              borderImage: "linear-gradient(90deg, #6ee7b7 10%, #60a5fa 70%) 1",
            }}
            initial={{ opacity: 0, scale: 0.97, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            {/* Quote Icon Top Left */}
            <FaQuoteLeft className="absolute -top-6 left-8 text-4xl md:text-5xl text-emerald-200 drop-shadow-md opacity-70 pointer-events-none" />
            {/* Decorative Gradient Blob Behind Card */}
            <span className="pointer-events-none absolute -z-10 inset-0 rounded-3xl bg-gradient-to-br from-sky-100 via-emerald-100 to-transparent blur-2xl opacity-60" />
            <p className="italic text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-6 transition-colors">
              "{testimonials[idx].text}"
            </p>
            <div className="mt-3 text-right">
              <span className="text-base md:text-lg font-bold text-emerald-700 tracking-wide">
                — {testimonials[idx].author}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Indicators */}
        <div className="flex gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`
                w-4 h-4 md:w-5 md:h-5 rounded-full
                ring-2 ring-emerald-300
                transition-all duration-200
                focus:outline-none focus:ring-4 focus:ring-sky-300
                ${i === idx
                  ? "bg-gradient-to-tr from-sky-400 to-emerald-400 scale-110 shadow-lg"
                  : "bg-emerald-100 hover:bg-emerald-300"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
