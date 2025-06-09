import React from "react";
import { motion } from "framer-motion";
import { FaMicrochip, FaProjectDiagram, FaCogs } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Blog_Vihaas_Tech_2 from "@/assets/Blog-News-Section/blog_vihaas_tech_4.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const moduleData = [
  {
    icon: <FaMicrochip className="text-indigo-500 text-3xl mb-2" />,
    title: "Embedded Systems & IoT",
    description:
      "Design, build, and test smart devices. Develop skills for today’s connected world through practical, project-based learning.",
    color: "from-blue-100 to-indigo-50",
  },
  {
    icon: <FaProjectDiagram className="text-green-500 text-3xl mb-2" />,
    title: "PCB & Hardware Engineering",
    description:
      "Master the full hardware lifecycle—from schematic to fabrication. Get hands-on with PCB layout and real-world debugging.",
    color: "from-green-100 to-emerald-50",
  },
  {
    icon: <FaCogs className="text-yellow-500 text-3xl mb-2" />,
    title: "Mechanical Design",
    description:
      "Explore CAD, precision engineering, and the creative process behind product development.",
    color: "from-yellow-50 to-orange-50",
  },
];

const BlogNewsDetailVihaasTechPro2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <article className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-xl px-4 py-8 md:p-14 my-12 relative overflow-visible">

      {/* Back Button */}
      <div className="mb-6 px-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-base md:text-lg font-semibold text-white bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-2 -mb-2"
        >
          <span className="text-lg">←</span> Back
        </button>
      </div>

      {/* Decorative gradient border */}
      <div className="hidden md:block absolute -left-7 top-10 h-[80%] w-3 bg-gradient-to-b from-blue-300/40 via-green-300/30 to-yellow-200/40 rounded-full blur-sm" />

      {/* Cover Image */}
      <motion.img
        src={Blog_Vihaas_Tech_2}
        alt="Vihaas Tech Pro student project"
        className="w-full h-64 object-cover rounded-2xl mb-10 shadow-md"
        draggable={false}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      />

      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-green-800 mb-2 leading-snug"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ delay: 0.12 }}
      >
        Building Future Innovators: <span className="text-blue-700">Vihaas Tech Pro’s Training Modules</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.div
        className="text-green-600 uppercase text-sm font-semibold mb-5 tracking-wide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ delay: 0.19 }}
      >
        Engineering Skills
      </motion.div>

      {/* Intro Paragraph */}
      <motion.p
        className="text-lg text-gray-700 font-serif mb-8 text-justify"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ delay: 0.23 }}
      >
        Vihaas Tech Pro isn’t just a set of workshops—it’s a dynamic learning journey designed to transform students into creators and innovators. Our hands-on modules are tailored to real-world industry needs.
      </motion.p>

      {/* Module Cards */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-10">
        {moduleData.map((module, idx) => (
          <motion.div
            key={module.title}
            className={`flex-1 bg-gradient-to-br ${module.color} rounded-2xl p-6 shadow-md flex flex-col items-start hover:scale-105 transition-transform duration-300 border border-white/60`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.29 + idx * 0.13 }}
          >
            {module.icon}
            <h3 className="font-bold text-lg mb-2">{module.title}</h3>
            <p className="text-gray-700 text-justify text-base leading-snug">{module.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Final Paragraphs */}
      <motion.p
        className="text-base md:text-lg text-gray-800 font-serif mb-6 text-justify"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ delay: 0.65 }}
      >
        Every participant works side by side with experienced mentors from Vihaas Design Technologies. Through group projects and live problem-solving sessions, students tackle challenges inspired by real industry needs.
      </motion.p>

      <motion.p
        className="text-base md:text-lg text-gray-800 font-serif mb-4 text-justify"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ delay: 0.74 }}
      >
        We believe that the best learning happens by doing. With Vihaas Tech Pro, students gain not just skills—but also confidence, creativity, and the vision to drive innovation wherever they go.
      </motion.p>

      {/* CTA Link */}
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.85, duration: 0.7 }}
      >
        <Link
          to="/initiatives/vihaas-tech-pro"
          className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white px-7 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
        >
          Explore Vihaas Tech Pro →
        </Link>
      </motion.div>
    </article>
  );
};

export default BlogNewsDetailVihaasTechPro2;
