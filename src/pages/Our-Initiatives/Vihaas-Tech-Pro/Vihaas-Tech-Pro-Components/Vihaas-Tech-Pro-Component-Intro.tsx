import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaUserGraduate, FaBolt } from "react-icons/fa";
import vihaasTechImage from "@/assets/Our-Initiatives-Section/vihaas-tech-13.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const boxHover = {
  whileHover: {
    scale: 1.05,
    boxShadow: "0 12px 30px rgba(16, 185, 129, 0.15)",
    transition: { duration: 0.3 },
  },
};

const iconHover = {
  whileHover: {
    rotate: [0, 10, -10, 0],
    transition: { duration: 0.6 },
  },
};

export default function VihaasTechProUniqueIntro() {
  return (
    <section className="relative w-full bg-[#f9fafb] px-6 sm:px-10 lg:px-20 pt-28 pb-12 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[url('/pattern.svg')] bg-center bg-repeat opacity-[0.04]" />

      {/* <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"> */}
      <div className="max-w-7xl mx-auto grid xl:grid-cols-2 gap-10 xl:gap-14 items-center">

        {/* LEFT – Image */}
        {/* <motion.div
          className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1 w-full max-w-xl mx-auto"
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <img
            src={vihaasTechImage}
            alt="Tech training in action"
            className="w-full h-full object-cover"
          />
        </motion.div> */}

<motion.div
  className="rounded-2xl overflow-hidden shadow-xl order-last xl:order-first w-full max-w-xl mx-auto"
  variants={fadeIn}
  initial="initial"
  whileInView="whileInView"
  viewport={{ once: true }}
>
  <img
    src={vihaasTechImage}
    alt="Tech training in action"
    className="w-full h-full object-cover"
  />
</motion.div>

        {/* RIGHT – Text */}
        <motion.div
          className="space-y-10 order-1 lg:order-2 px-2 sm:px-4"
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {/* Title */}
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif bg-gradient-to-r from-green-700 via-teal-600 to-blue-600 text-transparent bg-clip-text">
              Vihaas Tech Pro
            </h1>
            <h3 className="text-xs sm:text-sm tracking-wide font-semibold uppercase text-emerald-700">
              Where Innovation Meets Ambition
            </h3>
            <p className="text-cyan-900 text-base sm:text-lg font-medium leading-relaxed text-justify max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              Vihaas Tech Pro is not just a program — it's a launchpad for the engineers, designers, and tech leaders of tomorrow.
              A joint initiative by <strong className="text-teal-700">Naipunayam Foundation</strong> and <strong className="text-blue-700">Vihaas Design Technologies</strong>,
              this platform redefines technical learning through real-world projects, cutting-edge tools, and industry mentorship.
            </p>
          </div>

          {/* Feature Box Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {[
              {
                Icon: FaCogs,
                color: "text-emerald-600",
                title: "Real Tools",
                desc: "Industry-grade labs and systems",
              },
              {
                Icon: FaBolt,
                color: "text-yellow-500",
                title: "Fast-Track Learning",
                desc: "Project-based tech training",
              },
              {
                Icon: FaUserGraduate,
                color: "text-indigo-600",
                title: "Student First",
                desc: "Made for early-career creators",
              },
            ].map(({ Icon, color, title, desc }, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl p-5 shadow-md border border-gray-100 text-center cursor-default"
                variants={fadeIn}
                whileHover={boxHover.whileHover}
              >
                <motion.div
                  className={`text-2xl mb-3 mx-auto ${color}`}
                  whileHover={iconHover.whileHover}
                >
                  <Icon />
                </motion.div>
                <h4 className="font-semibold font-serif text-lg text-teal-800 ">
                  {title}
                </h4>
                <p className="text-base text-teal-600 text-center">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <a
              href="#get-involved"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
            >
              Explore Programs →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
