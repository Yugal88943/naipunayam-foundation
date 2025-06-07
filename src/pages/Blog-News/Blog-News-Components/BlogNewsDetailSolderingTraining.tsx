// import React from "react";
// import { motion } from "framer-motion";
// import Blog_Vihaas_Design_3 from "@/assets/Blog-News-Section/soldering-3.jpeg";
// import Blog_Vihaas_Design_4 from "@/assets/Blog-News-Section/soldering-1.jpeg";

// const fadeFromLeft = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
// };
// const fadeFromRight = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
// };
// const fadeFromBottom = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
// };

// const BlogNewsDetailSolderingTraining: React.FC = () => (
//   <section className="relative max-w-4xl mx-auto py-10 px-2 md:px-8 my-16">
//     {/* HERO/Feature Block */}
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.6 }}
//       variants={fadeFromLeft}
//       className="bg-green-50 rounded-3xl shadow-lg p-7 md:p-12 mb-10 flex flex-col md:flex-row items-center gap-8"
//     >
//       <img
//         src={Blog_Vihaas_Design_3}
//         alt="Soldering training"
//         className="w-full max-w-[240px] md:max-w-[300px] h-48 sm:h-56 md:h-60 object-cover rounded-2xl shadow-md border-2 border-white"
//         draggable={false}
//       />
//       <div className="flex-1">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-800 mb-3">
//           Free Soldering Training for Youth – Learn, Build, Empower!
//         </h1>
//         <div className="text-green-600 uppercase text-xs font-semibold mb-2 tracking-wider">
//           Skill Development Initiative
//         </div>
//         <p className="text-base sm:text-lg text-gray-700 text-justify">
//           The Naipunayam Foundation proudly announces a <span className="font-bold text-green-700">100% free soldering training program</span> for youth in Solan, Himachal Pradesh. This hands-on course is designed for anyone interested in practical skills—no previous experience required!
//         </p>
//       </div>
//     </motion.div>

//     {/* Twin Cards Block */}
//     <div className="flex flex-col md:flex-row gap-8 mb-10">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         variants={fadeFromBottom}
//         className="bg-blue-50 rounded-2xl p-7 shadow w-full"
//       >
//         <h3 className="font-semibold text-blue-700 mb-3 text-lg">Program Highlights</h3>
//         <ul className="list-disc pl-5 space-y-1 text-gray-800 text-base text-justify">
//           <li>Free training—no costs for learners</li>
//           <li>Monthly stipend to support attendance</li>
//           <li>Practical, real-world soldering techniques</li>
//           <li>Supportive mentorship in an empowering environment</li>
//         </ul>
//       </motion.div>
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         variants={fadeFromRight}
//         className="bg-yellow-50 rounded-2xl p-7 shadow w-full flex items-center"
//       >
//         <img
//           src={Blog_Vihaas_Design_4}
//           alt="Mentor assisting student in soldering"
//           className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover mr-4 border-2 border-white shadow"
//           draggable={false}
//         />
//         <div>
//           <h3 className="font-semibold text-yellow-700 mb-2 text-lg">Who Can Join?</h3>
//           <p className="text-base text-gray-700 text-justify">
//             Any young person looking to learn and grow—no technical background necessary, just curiosity and commitment.
//           </p>
//         </div>
//       </motion.div>
//     </div>

//     {/* Final Details Card */}
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.6 }}
//       variants={fadeFromLeft}
//       className="bg-white rounded-2xl shadow-md p-8 mt-8"
//     >
//       <p className="text-lg text-gray-800 mb-3 text-justify">
//         <b>Our vision</b> is to help Himachal’s youth become <b>self-reliant</b> by building in-demand skills and career confidence. If you or someone you know is interested in starting a new career or building hands-on expertise, this is the perfect place to begin.
//       </p>
//       <div className="text-green-800 font-semibold">Let’s build the future together!</div>
//     </motion.div>
//   </section>
// );

// export default BlogNewsDetailSolderingTraining;

//************************************* */
// src/pages/Blog-News/BlogNewsDetailSolderingTraining.tsx

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Blog_Vihaas_Design_3 from "@/assets/Blog-News-Section/soldering-3.jpeg";
import Blog_Vihaas_Design_4 from "@/assets/Blog-News-Section/soldering-1.jpeg";

const fadeFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeFromBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const BlogNewsDetailSolderingTraining: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative max-w-4xl mx-auto py-1 px-4 sm:px-6 lg:px-8 my-16">
      {/* Back Button */}
      <div className="max-w-3xl mx-auto pt-0 mb-3 px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-base md:text-lg font-semibold text-white bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg -mb-1"
        >
          <span className="text-lg">←</span> Back
        </button>
      </div>

      {/* HERO/Feature Block */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeFromLeft}
        className="bg-green-50 rounded-3xl shadow-lg p-7 md:p-12 mb-10 flex flex-col md:flex-row items-center gap-8"
      >
        <img
          src={Blog_Vihaas_Design_3}
          alt="Soldering training"
          className="w-full max-w-[240px] md:max-w-[300px] h-48 sm:h-56 md:h-60 object-cover rounded-2xl shadow-md border-2 border-white"
          draggable={false}
        />
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-800 mb-3">
            Free Soldering Training for Youth – Learn, Build, Empower!
          </h1>
          <div className="text-green-600 uppercase text-xs font-semibold mb-2 tracking-wider">
            Skill Development Initiative
          </div>
          <p className="text-base sm:text-lg text-gray-700 text-justify">
            The Naipunayam Foundation proudly announces a <span className="font-bold text-green-700">100% free soldering training program</span> for youth in Solan, Himachal Pradesh. This hands-on course is designed for anyone interested in practical skills—no previous experience required!
          </p>
        </div>
      </motion.div>

      {/* Twin Cards Block */}
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeFromBottom}
          className="bg-blue-50 rounded-2xl p-7 shadow w-full"
        >
          <h3 className="font-semibold text-blue-700 mb-3 text-lg">Program Highlights</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-800 text-base text-justify">
            <li>Free training—no costs for learners</li>
            <li>Monthly stipend to support attendance</li>
            <li>Practical, real-world soldering techniques</li>
            <li>Supportive mentorship in an empowering environment</li>
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeFromRight}
          className="bg-yellow-50 rounded-2xl p-7 shadow w-full flex items-center"
        >
          <img
            src={Blog_Vihaas_Design_4}
            alt="Mentor assisting student in soldering"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover mr-4 border-2 border-white shadow"
            draggable={false}
          />
          <div>
            <h3 className="font-semibold text-yellow-700 mb-2 text-lg">Who Can Join?</h3>
            <p className="text-base text-gray-700 text-justify">
              Any young person looking to learn and grow—no technical background necessary, just curiosity and commitment.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Final Details Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeFromLeft}
        className="bg-white rounded-2xl shadow-md p-8 mt-8"
      >
        <p className="text-lg text-gray-800 mb-3 text-justify">
          <b>Our vision</b> is to help Himachal’s youth become <b>self-reliant</b> by building in-demand skills and career confidence. If you or someone you know is interested in starting a new career or building hands-on expertise, this is the perfect place to begin.
        </p>
        <div className="text-green-800 font-semibold">
          Let’s build the future together!
        </div>
      </motion.div>
    </section>
  );
};

export default BlogNewsDetailSolderingTraining;
