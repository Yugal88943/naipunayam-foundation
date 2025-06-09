import React from "react";
import { FaBuilding, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, type: "spring", bounce: 0.3 },
  },
};

const PartnerWithUsComponentIntro: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-3 md:px-10 overflow-x-clip bg-gradient-to-br from-white to-gray-50">

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute left-[-120px] top-0 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-blue-100/70 via-blue-200/40 to-purple-100/30 blur-2xl opacity-70" />
        <div className="absolute right-[-80px] bottom-0 w-[250px] h-[200px] rounded-full bg-gradient-to-tr from-green-100/60 to-blue-100/30 blur-2xl opacity-60" />
      </div>

      {/* Banner */}
      <div className="relative w-fit mx-auto mb-12">
        <div className="absolute inset-0 skew-x-[-18deg] bg-gradient-to-r from-blue-600 via-indigo-400 to-green-400 opacity-80 rounded-xl blur-sm" />
        <h1 className="relative text-2xl md:text-3xl font-extrabold text-white px-10 py-4 tracking-wide z-10 shadow-md select-none animate-pulse">
          Driving Sustainable Impact Together
        </h1>
      </div>

      {/* Why Partner Card */}
      <motion.div
        className="group max-w-2xl mx-auto bg-white/30 border border-white/40 shadow-2xl backdrop-blur-lg rounded-3xl px-8 py-10 mb-10 text-center relative overflow-hidden hover:scale-[1.02] transition-transform duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={cardVariants}
        whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
      >
        {/* Glow ring on hover */}
        <div className="absolute inset-0 rounded-3xl z-0 border-2 border-transparent group-hover:border-indigo-300/30 group-hover:animate-pulse" />
        <div className="absolute -top-4 -right-10 w-40 h-24 bg-gradient-to-tr from-indigo-200/30 via-blue-100/40 to-transparent rounded-full blur-lg" />
        
        <motion.h2
          className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-green-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Why Partner with Us?
        </motion.h2>
        <p className="mb-5 text-gray-700 font-medium text-justify leading-relaxed">
          At <strong className="text-indigo-700">Naipunayam Foundation</strong>, collective action fuels real change. Join our movement
          dedicated to education, skill development, and sustainable growth—where every partnership is a catalyst for impact.
        </p>

        <ul className="flex flex-col gap-2 items-start text-base font-semibold text-blue-900/90">
          {[
            { iconColor: "text-green-500", text: "Access to Community Outreach Programs" },
            { iconColor: "text-pink-500", text: "Women Empowerment Initiatives" },
            { iconColor: "text-blue-400", text: "Technology Education in Rural Areas" },
          ].map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.08, x: 4 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="grid grid-cols-[auto,1fr] gap-2 items-start text-left"
            >
              <span className={`text-lg ${item.iconColor}`}>✔️</span>
              {item.text}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Opportunity Cards */}
      <div className="max-w-4xl mx-auto grid gap-7 md:grid-cols-2 mb-14">
        {[
          {
            title: "Corporate Partnerships",
            desc:
              "Join us for CSR projects, tech education, and women empowerment initiatives across Himachal and beyond.",
            icon: <FaBuilding className="text-4xl text-blue-700" />,
            bg: "from-white/90 via-blue-50/50 to-blue-100/50",
            glow: "from-blue-300/20 via-indigo-300/20",
          },
          {
            title: "International Partnerships",
            desc:
              "Bring global expertise and innovation to rural regions. Help us empower communities with world-class standards.",
            icon: <FaGlobe className="text-4xl text-green-700" />,
            bg: "from-white/90 via-green-50/50 to-green-100/60",
            glow: "from-green-300/20 via-blue-300/10",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className={`bg-gradient-to-tr ${card.bg} rounded-2xl shadow-xl border border-white/70 flex flex-col items-center p-7 group hover:scale-105 transition-transform duration-300 relative overflow-hidden`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={cardVariants}
            whileHover={{ rotateX: 3, rotateY: -3, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            {/* Glow ring on hover */}
            <div className="absolute inset-0 rounded-2xl z-0 border-2 border-transparent group-hover:border-blue-300/30 group-hover:animate-pulse" />

            {/* Icon */}
            <motion.div
              className="mb-4 p-3 rounded-full bg-white/50 shadow-inner z-10"
              whileHover={{ rotate: i === 0 ? 5 : -6, scale: 1.17 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              {card.icon}
            </motion.div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-2 text-center z-10">{card.title}</h3>
            <p className="text-gray-700 text-center z-10">{card.desc}</p>

            {/* Bottom glow */}
            <div
              className={`absolute -bottom-2 ${i === 0 ? "-left-3" : "-right-3"} w-24 h-12 bg-gradient-to-br ${card.glow} to-transparent blur-lg rounded-full z-0`}
            />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="max-w-xl mx-auto text-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={cardVariants}
      >
        <h2 className="text-2xl font-bold mb-2 text-blue-900">Ready to stand with us?</h2>
        <p className="mb-5 text-gray-800 font-medium">
          Join our mission for lasting change. Let’s build a brighter future, together.
        </p>
        <Link
          to="/contact-us"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-green-400 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span>🌏</span> Partner with Us
          </span>
          <span
            className="absolute left-0 top-0 w-full h-full rounded-full pointer-events-none animate-pulse"
            style={{
              background:
                "linear-gradient(100deg, transparent 60%, #fff8 80%, transparent 95%)",
              opacity: 0.25,
            }}
          />
        </Link>
      </motion.div>
    </section>
  );
};

export default PartnerWithUsComponentIntro;
