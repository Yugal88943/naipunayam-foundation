
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import vihaasDesign from "@/assets/Home-Section/home-section-ourinitiatives-vihaasdesigntechnologies.jpg";
import vihaasTech from "@/assets/Home-Section/home-section-ourinitiatives-vihaastechpro.jpg";
import hansaz from "@/assets/Home-Section/home-section-ourinitiatives-hanzas.jpg";

const INITIATIVES = [
  {
    link: "initiatives/vihaas-design-technologies",
    image: vihaasDesign,
    alt: "Vihaas Design Technologies",
    title: "Vihaas Design Technologies",
    subtitle: "Empowered by Technology & Innovation"
  },
  {
    link: "initiatives/vihaas-tech-pro",
    image: vihaasTech,
    alt: "Vihaas Tech Pro",
    title: "Vihaas Tech Pro",
    subtitle: "Technology-driven education for the future."
  },
  {
    link: "/initiatives/hanzaS",
    image: hansaz,
    alt: "HanzaS",
    title: "HanzaS",
    subtitle: "Empowering women with skills and opportunities."
  }
];

const getSlideIn = (idx: number) =>
  idx % 2 === 0
    ? { opacity: 0, x: -32 }
    : { opacity: 0, x: 32 };

export default function HomeComponentOurInitiatives() {
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <section className="w-full py-10 md:py-14 xl:py-16 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 flex flex-col items-center relative overflow-x-hidden">
      <motion.h2
        className="text-center text-2xl md:text-4xl font-black font-serif text-slate-900 mb-10 md:mb-16 tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }} // 👈 Enables reverse scroll animation
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Our Key Initiatives
      </motion.h2>

      <div className="relative w-full max-w-2xl mx-auto">
        {/* Timeline Line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-2 z-0 rounded-full
          bg-gradient-to-b from-indigo-400 via-fuchsia-400 to-pink-300
          animate-gradientMove [background-size:200%_200%]
          [animation:gradientMove_4s_linear_infinite_alternate]
          pointer-events-none -translate-x-1/2"
        />

        <div className="flex flex-col gap-24">
          {INITIATIVES.map((item, idx) => (
            <motion.div
              key={item.title}
              className={`relative w-full flex ${
                idx % 2 === 0 ? "justify-start" : "justify-end"
              } z-10`}
              initial={getSlideIn(idx)}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.65 }} // 👈 enables reverse and on-scroll animations
              transition={{
                duration: 1.2,
                delay: idx * 0.19,
                ease: [0.16, 1, 0.29, 0.99]
              }}
            >
              {/* Timeline Marker */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center z-20 pointer-events-none">
                <span
                  className={`
                    w-9 h-9 flex items-center justify-center rounded-full border-4 border-white
                    bg-gradient-to-br from-indigo-400 via-fuchsia-400 to-pink-300 shadow
                    transition-all duration-200
                    ring-0 ${hovered === idx ? "animate-timeline-pulse" : ""}
                  `}
                >
                  <span className="w-4 h-4 bg-white rounded-full" />
                </span>
              </div>

              {/* Clickable Card as Link */}
              <Link
  to={item.link}
  onMouseEnter={() => setHovered(idx)}
  onMouseLeave={() => setHovered(null)}
  tabIndex={0}
  className={`
    group bg-white/95 rounded-3xl shadow-xl
    px-6 py-8 flex flex-col items-center border border-indigo-100/70
    transition-all duration-300
    w-[92vw] max-w-[340px] sm:max-w-[400px] md:max-w-[360px]
    ${idx % 2 === 0 ? "ml-0 md:ml-12 lg:ml-20" : "mr-0 md:mr-12 lg:mr-20"}
    mt-2 will-change-transform
    focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-300
    md:hover:scale-[1.045] md:hover:shadow-[0_4px_40px_0_rgba(232,121,249,0.16)]
  `}
>
  <div className="relative w-full flex justify-center mb-3">
    <img
      src={item.image}
      alt={item.alt}
      className="w-[min(92vw,240px)] h-[min(92vw,240px)] md:w-[200px] md:h-[200px] xl:w-[230px] xl:h-[230px] object-cover rounded-2xl shadow-lg border-2 border-fuchsia-100
        md:group-hover:border-fuchsia-400 md:group-hover:shadow-[0_0_24px_0_rgba(232,121,249,0.20)] bg-white"
      loading="lazy"
      draggable={false}
    />
    <span className="absolute inset-0 rounded-2xl opacity-0 md:group-hover:opacity-40 bg-gradient-to-br from-fuchsia-400 via-indigo-300 to-pink-200 pointer-events-none transition" />
  </div>
  <h3 className="text-lg md:text-2xl font-extrabold text-center mt-2 text-indigo-900 md:group-hover:text-fuchsia-700 transition">
    {item.title}
  </h3>
  <p className="text-base md:text-lg text-center mt-2 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-indigo-500 to-emerald-500 font-semibold md:group-hover:from-fuchsia-700">
    {item.subtitle}
  </p>
</Link>

            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes timeline-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(232,121,249,0.26), 0 1.5px 12px 0 #a78bfa66;}
          50% { box-shadow: 0 0 0 16px rgba(232,121,249,0.14), 0 1.5px 12px 0 #a78bfa66;}
        }
        .animate-timeline-pulse {
          animation: timeline-pulse 1.25s infinite;
        }
      `}</style>
    </section>
  );
}
	