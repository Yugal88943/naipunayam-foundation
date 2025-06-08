// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import blog_Vihaas_Tech_3 from "@/assets/Blog-News-Section/data_image.jpg"; 
// // // const fadeLeft = {
// // //   hidden: { opacity: 0, x: -48 },
// // //   visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
// // // };

// // // const fadeRight = {
// // //   hidden: { opacity: 0, x: 48 },
// // //   visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
// // // };

// // // const BlogNewsDetailVihaasTechPro1: React.FC = () => (
// // //   <section className="w-full px-2 md:px-0 py-10 flex flex-col items-center">
    
// // //     {/* Back Button */}
// // //     <div className="max-w-3xl mr-auto mb-3 px-4">
// // //         <button
// // //           onClick={() => navigate(-1)}
// // //           className="flex items-center gap-2 text-base md:text-lg font-semibold text-white bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg -mb-1"
// // //         >
// // //           <span className="text-lg">←</span> Back
// // //         </button>
// // //       </div>
    
// // //     <article className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 max-w-4xl mx-auto rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
      
// // //       <motion.div
// // //         className="md:w-1/2 flex-shrink-0 relative"
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{ once: true, amount: 0.6 }}
// // //         variants={fadeRight}
// // //       >
// // //         <img
// // //           src={blog_Vihaas_Tech_3}
// // //           alt="Vihaas Tech Pro hands-on training"
// // //           className="md:absolute md:right-0 md:top-0 md:h-full w-full object-contain md:rounded-none md:rounded-r-3xl h-64 rounded-t-3xl md:rounded-t-sm"
// // //           draggable={false}
// // //         />
// // //         <span className="absolute top-6 left-6 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg tracking-wider drop-shadow-md md:block hidden">
// // //           Real-World Learning
// // //         </span>
// // //       </motion.div>

// // //       <motion.div
// // //         className="flex-1 p-7 md:p-12 flex flex-col justify-center"
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{ once: true, amount: 0.6 }}
// // //         variants={fadeLeft}
// // //       >
// // //         <span className="uppercase text-xs font-bold tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-3 inline-block shadow">
// // //           Technical Education
// // //         </span>
// // //         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 mb-5 leading-tight">
// // //           Vihaas Tech Pro: Real-World Learning for Next-Gen Engineers
// // //         </h1>
// // //         <blockquote className="border-l-4 border-blue-400 pl-5 py-2 mb-6 text-blue-700 bg-blue-50 rounded-xl italic font-medium shadow-sm">
// // //           "Transforming theory into action—where students and early-career engineers collaborate with top R&D mentors on industry-grade projects."
// // //         </blockquote>
// // //         <div className="text-base sm:text-lg text-gray-700 space-y-5 text-justify">
// // //           <p>
// // //             Vihaas Tech Pro is a one-of-a-kind technical upskilling platform launched by Naipunayam Foundation in partnership with Vihaas Design Technologies...
// // //           </p>
// // //           <ul className="list-disc pl-6 mb-3 space-y-1 font-medium">
// // //             <li>Direct mentorship from practicing engineers and R&D professionals</li>
// // //             <li>Access to state-of-the-art labs and real-world projects</li>
// // //             <li>Curriculum focused on embedded systems, IoT, PCB design, and mechanical engineering</li>
// // //           </ul>
// // //           <p>
// // //             In today’s competitive landscape, textbook knowledge alone isn’t enough...
// // //           </p>
// // //         </div>
// // //       </motion.div>
// // //     </article>
// // //   </section>
// // // );

// // // export default BlogNewsDetailVihaasTechPro1;

// // import React from "react";
// // import { motion } from "framer-motion";
// // import { useNavigate } from "react-router-dom";
// // import blog_Vihaas_Tech_3 from "@/assets/Blog-News-Section/data_image.jpg";

// // const fadeLeft = {
// //   hidden: { opacity: 0, x: -48 },
// //   visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
// // };

// // const fadeRight = {
// //   hidden: { opacity: 0, x: 48 },
// //   visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
// // };

// // const BlogNewsDetailVihaasTechPro1: React.FC = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <section className="w-full px-2 md:px-0 py-10 flex flex-col items-center">
// //       {/* Back Button */}
// //       <div className="max-w-3xl mr-auto mb-6 px-4">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="flex items-center gap-2 text-base md:text-lg font-semibold text-white bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-4 -mb-4"
// //         >
// //           <span className="text-lg">←</span> Back
// //         </button>
// //       </div>

// //       <article className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 max-w-4xl mx-auto rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
// //         <motion.div
// //           className="md:w-1/2 flex-shrink-0 relative"
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.6 }}
// //           variants={fadeRight}
// //         >
// //           <img
// //             src={blog_Vihaas_Tech_3}
// //             alt="Vihaas Tech Pro hands-on training"
// //             className="md:absolute md:right-0 md:top-0 md:h-full w-full object-contain md:rounded-none md:rounded-r-3xl h-64 rounded-t-3xl md:rounded-t-sm"
// //             draggable={false}
// //           />
// //           <span className="absolute top-6 left-6 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg tracking-wider drop-shadow-md md:block hidden">
// //             Real-World Learning
// //           </span>
// //         </motion.div>

// //         <motion.div
// //           className="flex-1 p-7 md:p-12 flex flex-col justify-center"
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.6 }}
// //           variants={fadeLeft}
// //         >
// //           <span className="uppercase text-xs font-bold tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-3 inline-block shadow">
// //             Technical Education
// //           </span>
// //           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 mb-5 leading-tight">
// //             Vihaas Tech Pro: Real-World Learning for Next-Gen Engineers
// //           </h1>
// //           <blockquote className="border-l-4 border-blue-400 pl-5 py-2 mb-6 text-blue-700 bg-blue-50 rounded-xl italic font-medium shadow-sm">
// //             "Transforming theory into action—where students and early-career engineers collaborate with top R&D mentors on industry-grade projects."
// //           </blockquote>
// //           <div className="text-base sm:text-lg text-gray-700 space-y-5 text-justify">
// //             <p>
// //               Vihaas Tech Pro is a one-of-a-kind technical upskilling platform launched by Naipunayam Foundation in partnership with Vihaas Design Technologies...
// //             </p>
// //             <ul className="list-disc pl-6 mb-3 space-y-1 font-medium">
// //               <li>Direct mentorship from practicing engineers and R&D professionals</li>
// //               <li>Access to state-of-the-art labs and real-world projects</li>
// //               <li>Curriculum focused on embedded systems, IoT, PCB design, and mechanical engineering</li>
// //             </ul>
// //             <p>
// //               In today’s competitive landscape, textbook knowledge alone isn’t enough...
// //             </p>
// //           </div>
// //         </motion.div>
// //       </article>
// //     </section>
// //   );
// // };

// // export default BlogNewsDetailVihaasTechPro1;


// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import blog_Vihaas_Tech_3 from "@/assets/Blog-News-Section/data_image.jpg";

// const fadeLeft = {
//   hidden: { opacity: 0, x: -48 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
// };

// const fadeRight = {
//   hidden: { opacity: 0, x: 48 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
// };

// const BlogNewsDetailVihaasTechPro1: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     // <section className="w-full px-2 md:px-0 py-10 flex flex-col items-center">
//     //   <article className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 max-w-4xl mx-auto rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
//     //     <motion.div
//     //       className="md:w-1/2 flex-shrink-0 relative"
//     //       initial="hidden"
//     //       whileInView="visible"
//     //       viewport={{ once: true, amount: 0.6 }}
//     //       variants={fadeRight}
//     //     >
//     //       <img
//     //         src={blog_Vihaas_Tech_3}
//     //         alt="Vihaas Tech Pro hands-on training"
//     //         className="md:absolute md:right-0 md:top-0 md:h-full w-full object-contain md:rounded-none md:rounded-r-3xl h-64 rounded-t-3xl md:rounded-t-sm"
//     //         draggable={false}
//     //       />
//     //       <span className="absolute top-6 left-6 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg tracking-wider drop-shadow-md md:block hidden">
//     //         Real-World Learning
//     //       </span>
//     //     </motion.div>

//     //     <motion.div
//     //       className="flex-1 p-7 md:p-12 flex flex-col justify-center"
//     //       initial="hidden"
//     //       whileInView="visible"
//     //       viewport={{ once: true, amount: 0.6 }}
//     //       variants={fadeLeft}
//     //     >
//     //       {/* Moved the Back Button here */}
//     //       <button
//     //         onClick={() => navigate(-1)}
//     //         className="self-start mb-4 flex items-center gap-2 text-base md:text-lg font-semibold text-white bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//     //       >
//     //         <span className="text-lg">←</span> Back
//     //       </button>

//     //       <span className="uppercase text-xs font-bold tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-3 inline-block shadow">
//     //         Technical Education
//     //       </span>
//     //       <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 mb-5 leading-tight">
//     //         Vihaas Tech Pro: Real-World Learning for Next-Gen Engineers
//     //       </h1>
//     //       <blockquote className="border-l-4 border-blue-400 pl-5 py-2 mb-6 text-blue-700 bg-blue-50 rounded-xl italic font-medium shadow-sm">
//     //         "Transforming theory into action—where students and early-career engineers collaborate with top R&D mentors on industry-grade projects."
//     //       </blockquote>
//     //       <div className="text-base sm:text-lg text-gray-700 space-y-5 text-justify">
//     //         <p>
//     //           Vihaas Tech Pro is a one-of-a-kind technical upskilling platform launched by Naipunayam Foundation in partnership with Vihaas Design Technologies...
//     //         </p>
//     //         <ul className="list-disc pl-6 mb-3 space-y-1 font-medium">
//     //           <li>Direct mentorship from practicing engineers and R&D professionals</li>
//     //           <li>Access to state-of-the-art labs and real-world projects</li>
//     //           <li>Curriculum focused on embedded systems, IoT, PCB design, and mechanical engineering</li>
//     //         </ul>
//     //         <p>
//     //           In today’s competitive landscape, textbook knowledge alone isn’t enough...
//     //         </p>
//     //       </div>
//     //     </motion.div>
//     //   </article>
//     // </section>
//     <section className="w-full px-2 md:px-0 py-10 flex flex-col items-center">

//   {/* Back Button - mobile friendly, aligned above article */}
//   <div className="w-full max-w-4xl px-4 md:px-0 mb-4">
//     <button
//       onClick={() => navigate(-1)}
//       className="flex items-center gap-2 text-base md:text-lg font-semibold text-white bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//     >
//       <span className="text-lg">←</span> Back
//     </button>
//   </div>

//   {/* Article */}
//   <article className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 max-w-4xl mx-auto rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
//     <motion.div
//       className="md:w-1/2 flex-shrink-0 relative"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.6 }}
//       variants={fadeRight}
//     >
//       <img
//         src={blog_Vihaas_Tech_3}
//         alt="Vihaas Tech Pro hands-on training"
//         className="md:absolute md:right-0 md:top-0 md:h-full w-full object-contain md:rounded-none md:rounded-r-3xl h-64 rounded-t-3xl md:rounded-t-sm"
//         draggable={false}
//       />
//       <span className="absolute top-6 left-6 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg tracking-wider drop-shadow-md md:block hidden">
//         Real-World Learning
//       </span>
//     </motion.div>

//     <motion.div
//       className="flex-1 p-7 md:p-12 flex flex-col justify-center"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.6 }}
//       variants={fadeLeft}
//     >
//       <span className="uppercase text-xs font-bold tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-3 inline-block shadow">
//         Technical Education
//       </span>
//       <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 mb-5 leading-tight">
//         Vihaas Tech Pro: Real-World Learning for Next-Gen Engineers
//       </h1>
//       <blockquote className="border-l-4 border-blue-400 pl-5 py-2 mb-6 text-blue-700 bg-blue-50 rounded-xl italic font-medium shadow-sm">
//         "Transforming theory into action—where students and early-career engineers collaborate with top R&D mentors on industry-grade projects."
//       </blockquote>
//       <div className="text-base sm:text-lg text-gray-700 space-y-5 text-justify">
//         <p>
//           Vihaas Tech Pro is a one-of-a-kind technical upskilling platform launched by Naipunayam Foundation in partnership with Vihaas Design Technologies...
//         </p>
//         <ul className="list-disc pl-6 mb-3 space-y-1 font-medium">
//           <li>Direct mentorship from practicing engineers and R&D professionals</li>
//           <li>Access to state-of-the-art labs and real-world projects</li>
//           <li>Curriculum focused on embedded systems, IoT, PCB design, and mechanical engineering</li>
//         </ul>
//         <p>
//           In today’s competitive landscape, textbook knowledge alone isn’t enough...
//         </p>
//       </div>
//     </motion.div>
//   </article>
// </section>

    
//   );
// };

// export default BlogNewsDetailVihaasTechPro1;

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import blog_Vihaas_Tech_3 from "@/assets/Blog-News-Section/data_image.jpg";

const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const BlogNewsDetailVihaasTechPro1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-2 md:px-0 py-10 flex flex-col items-center">
      {/* Back Button (Original) */}
      <div className="w-full max-w-4xl px-4 md:px-0 mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-base md:text-lg font-semibold text-white bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          <span className="text-lg">←</span> Back
        </button>
      </div>

      {/* Article */}
      <article className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 max-w-4xl mx-auto rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        <motion.div
          className="md:w-1/2 flex-shrink-0 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeRight}
        >
          <img
            src={blog_Vihaas_Tech_3}
            alt="Vihaas Tech Pro hands-on training"
            className="md:absolute md:right-0 md:top-0 md:h-full w-full object-contain md:rounded-none md:rounded-r-3xl h-64 rounded-t-3xl md:rounded-t-sm"
            draggable={false}
          />
          <span className="absolute top-6 left-6 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg tracking-wider drop-shadow-md md:block hidden">
            Real-World Learning
          </span>
        </motion.div>

        <motion.div
          className="flex-1 p-7 md:p-12 flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeLeft}
        >
          <span className="uppercase text-xs font-bold tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-3 inline-block shadow">
            Technical Education
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 mb-3 leading-tight">
            Vihaas Tech Pro: Real-World Learning for Next-Gen Engineers
          </h1>

          {/* Gradient divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-5" />

          <blockquote className="border-l-4 border-blue-400 pl-5 py-2 mb-6 text-blue-700 bg-blue-50 rounded-xl italic font-medium shadow-sm">
            "Transforming theory into action—where students and early-career engineers collaborate with top R&D mentors on industry-grade projects."
          </blockquote>

          <div className="text-base sm:text-lg text-gray-700 space-y-5 text-justify">
            <p>
              Vihaas Tech Pro is a one-of-a-kind technical upskilling platform launched by Naipunayam Foundation in partnership with Vihaas Design Technologies...
            </p>

            {/* Restored original bullet list */}
            <ul className="list-disc pl-6 mb-3 space-y-1 font-medium">
              <li>Direct mentorship from practicing engineers and R&D professionals</li>
              <li>Access to state-of-the-art labs and real-world projects</li>
              <li>Curriculum focused on embedded systems, IoT, PCB design, and mechanical engineering</li>
            </ul>

            <p>
              In today’s competitive landscape, textbook knowledge alone isn’t enough...
            </p>
          </div>
        </motion.div>
      </article>
    </section>
  );
};

export default BlogNewsDetailVihaasTechPro1;
