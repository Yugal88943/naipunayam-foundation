import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaTools, FaCheckCircle } from "react-icons/fa";
import Blog_Vihaas_Design_3 from "@/assets/Blog-News-Section/soldering-3.webp";
import Blog_Vihaas_Design_4 from "@/assets/Blog-News-Section/soldering-1.webp";

const transitionCommon = { duration: 0.6, ease: "easeOut" };

const BlogNewsDetailSolderingTraining: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-base md:text-lg font-semibold text-white bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-full shadow-md transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <span className="text-lg">←</span> Back
        </button>
      </div>

      {/* Content Block */}
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl shadow-xl p-6 sm:p-10 space-y-10">
        {/* HERO Block */}
        <motion.div
          layout
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionCommon}
          className="bg-green-50 rounded-3xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-8"
        >
          <img
            src={Blog_Vihaas_Design_3}
            alt="Soldering training"
            className="w-full max-w-[280px] h-56 object-cover rounded-2xl shadow-md border-2 border-white"
            draggable={false}
          />
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-800 mb-2">
              Free Soldering Training for Youth – Learn, Build, Empower!
            </h1>
            <div className="text-green-600 uppercase text-xs font-semibold mb-3 tracking-wider">
              Skill Development Initiative
            </div>
            <p className="text-base sm:text-lg text-gray-700 text-justify">
              The Naipunayam Foundation proudly announces a{" "}
              <span className="font-bold text-green-700">100% free soldering training program</span>{" "}
              for youth in Solan, Himachal Pradesh. This hands-on course is designed for anyone interested in practical skills—no previous experience required!
            </p>
          </div>
        </motion.div>

        {/* Twin Cards Block */}
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionCommon}
            className="bg-blue-50 rounded-2xl p-6 shadow w-full"
          >
            <h3 className="font-semibold text-blue-700 mb-3 text-lg flex items-center gap-2">
              <FaCheckCircle className="text-blue-500" /> Program Highlights
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800 text-base text-justify">
              <li>Free training—no costs for learners</li>
              <li>Monthly stipend to support attendance</li>
              <li>Practical, real-world soldering techniques</li>
              <li>Supportive mentorship in an empowering environment</li>
            </ul>
          </motion.div>

          <motion.div
            layout
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transitionCommon}
            className="bg-yellow-50 rounded-2xl p-6 shadow w-full flex items-center"
          >
            <img
              src={Blog_Vihaas_Design_4}
              alt="Mentor assisting student in soldering"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover mr-4 border-2 border-white shadow"
              draggable={false}
            />
            <div>
              <h3 className="font-semibold text-yellow-700 mb-2 text-lg flex items-center gap-2">
                <FaTools className="text-yellow-600" /> Who Can Join?
              </h3>
              <p className="text-base text-gray-700 text-justify">
                Any young person looking to learn and grow—no technical background necessary, just curiosity and commitment.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Final Message */}
        <motion.div
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionCommon}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <p className="text-lg text-gray-800 mb-3 text-justify">
            <strong>Our vision</strong> is to help Himachal’s youth become{" "}
            <strong>self-reliant</strong> by building in-demand skills and career confidence. If you or someone you know is interested in starting a new career or building hands-on expertise, this is the perfect place to begin.
          </p>
          <div className="text-green-800 font-semibold">Let’s build the future together!</div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogNewsDetailSolderingTraining;
