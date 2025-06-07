// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const missionDescription = `
// To empower underprivileged communities through quality education, technological innovation, and sustainable development. 
// We strive to bridge the gap between resources and those in need, ensuring equal opportunities for all.
// `;

// const AboutComponentMission: React.FC = () => {
//   const descriptionRef = React.useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: descriptionRef,
//     offset: ["start end", "end start"],
//   });

//   const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -180]);
//   const scaleHeadline = useTransform(scrollYProgress, [0, 0.9], [1, 1.08]);
//   const opacityHeadline = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);
//   const blurHeadline = useTransform(scrollYProgress, [0, 0.8], [0, 6]);

//   return (
//     <div className="relative min-h-screen w-full bg-[#f8f8f8]">
//       {/* SECTION 1: Sticky Headline */}
//       <section className="sticky top-0 h-screen flex items-center justify-center z-10">
//         <motion.h1
//           style={{
//             y: yHeadline,
//             scale: scaleHeadline,
//             opacity: opacityHeadline,
//             filter: `blur(${blurHeadline.get()}px)`,
//           }}
//           className="text-[8vw] font-extrabold uppercase tracking-tight drop-shadow-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400"
//         >
//           Our Mission
//         </motion.h1>
//       </section>

//       {/* SECTION 2: Pointed Curve with Content */}
//       <section
//   ref={descriptionRef}
//   className="
//     relative
//     min-h-screen
//     md:min-h-[60vh]
//     lg:min-h-[500px]
//     min-h-tablet-fix
//     flex flex-col items-center justify-start z-20 bg-white shadow-2xl
//   "
//   style={{
//     marginTop: "-8rem",
//     borderBottomLeftRadius: '1.5rem',
//     borderBottomRightRadius: '1.5rem',
//     overflow: 'hidden',
//   }}  
// >

//         {/* SVG Pointed Arch */}
//         {/* <svg
//           className="w-full"
//           viewBox="0 0 1440 220"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{
//             height: "160px",
//             width: "100%",
//             display: "block",
//           }}
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#fff"
//             d="
//               M0,120
//               Q360,60 720,40
//               Q1080,60 1440,120
//               L1440,220
//               L0,220
//               Z
//             "
//           />
//         </svg> */}
        
//         <svg
//   className="w-full"
//   viewBox="0 120 1440 200"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
//   style={{
//     height: "140px",
//     width: "100%",
//     display: "block",
//   }}
//   preserveAspectRatio="none"
// >
//   <path
//     fill="#fffF"
//     d="
//       M0,160
//       Q720,0 1440,100   
//       L1440,200
//       L0,200
//       Z
//     "
//   />
// </svg>


//         <div className="flex flex-col items-center w-full max-w-3xl mx-auto px-8 py-12">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 drop-shadow text-center"
//           >
//             Mission Statement
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.35, duration: 0.8 }}
//             className="
//               text-2xl sm:text-3xl 
//               font-sans font-normal 
//               text-green-800
//               leading-normal
//               tracking-normal
//               max-w-3xl mx-auto text-center
//               [word-spacing:0.08em]
//             "
//           >
//             {missionDescription}
//           </motion.p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutComponentMission;
//**********************************************************************************************
// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { FaHandsHelping, FaLightbulb, FaSchool } from "react-icons/fa";

// const missionDescription = `
// To empower underprivileged communities through quality education, technological innovation, and sustainable development. 
// We strive to bridge the gap between resources and those in need, ensuring equal opportunities for all.
// `;

// const AboutComponentMission: React.FC = () => {
//   const descriptionRef = React.useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: descriptionRef,
//     offset: ["start end", "end start"],
//   });

//   const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -180]);
//   const scaleHeadline = useTransform(scrollYProgress, [0, 0.9], [1, 1.08]);
//   const opacityHeadline = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);
//   const blurHeadline = useTransform(scrollYProgress, [0, 0.8], [0, 6]);

//   return (
//     <div className="relative min-h-[130vh] w-full bg-[#f8f8f8]">
//       {/* SECTION 1: Sticky Headline */}
//       <section className="sticky top-0 h-screen flex items-center justify-center z-10">
//         <motion.h1
//           style={{
//             y: yHeadline,
//             scale: scaleHeadline,
//             opacity: opacityHeadline,
//             filter: `blur(${blurHeadline.get()}px)`,
//           }}
//           className="text-[8vw] font-extrabold uppercase tracking-tight drop-shadow-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400"
//         >
//           Our Mission
//         </motion.h1>
//       </section>

//       {/* SECTION 2: Description Section */}
//       <section
//         ref={descriptionRef}
//         className="
//           relative
//           min-h-[90vh]
//           flex flex-col items-center justify-start z-20 bg-white shadow-2xl
//         "
//         style={{
//           marginTop: "-8rem",
//           borderBottomLeftRadius: '1.5rem',
//           borderBottomRightRadius: '1.5rem',
//           overflow: 'hidden',
//         }}
//       >
//         <svg
//           className="w-full"
//           viewBox="0 120 1440 200"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{ height: "140px", width: "100%", display: "block" }}
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#fff"
//             d="M0,160 Q720,0 1440,100 L1440,200 L0,200 Z"
//           />
//         </svg>

//         <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-8 py-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 drop-shadow text-center"
//           >
//             Mission Statement
//           </motion.h2>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.35, duration: 0.8 }}
//             className="text-2xl sm:text-3xl text-green-800 font-sans text-center leading-relaxed tracking-wide space-y-10"
//           >
//             <div className="flex flex-col items-center gap-4">
//               <FaSchool className="text-4xl text-cyan-600" />
//               <p>
//                 To empower underprivileged communities through <strong>quality education</strong>.
//               </p>
//             </div>

//             <div className="flex flex-col items-center gap-4">
//               <FaLightbulb className="text-4xl text-yellow-500" />
//               <p>
//                 Driving change via <strong>technological innovation</strong> and awareness.
//               </p>
//             </div>

//             <div className="flex flex-col items-center gap-4">
//               <FaHandsHelping className="text-4xl text-rose-500" />
//               <p>
//                 Building a future rooted in <strong>sustainable development</strong> and compassion.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutComponentMission;
//***************************************************************************************************** */
// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { FaHandsHelping, FaLightbulb, FaSchool } from "react-icons/fa";

// const missionDescription = `
// To empower underprivileged communities through quality education, technological innovation, and sustainable development. 
// We strive to bridge the gap between resources and those in need, ensuring equal opportunities for all.
// `;

// const AboutComponentMission: React.FC = () => {
//   const descriptionRef = React.useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: descriptionRef,
//     offset: ["start end", "end start"],
//   });

//   const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -180]);
//   const scaleHeadline = useTransform(scrollYProgress, [0, 0.9], [1, 1.08]);
//   const opacityHeadline = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);
//   const blurHeadline = useTransform(scrollYProgress, [0, 0.8], [0, 6]);

//   return (
//     <div className="relative min-h-[135vh] w-full bg-[#f8f8f8]">
//       {/* SECTION 1: Sticky Headline */}
//       <section className="sticky top-0 h-screen flex items-center justify-center z-10">
//         <motion.h1
//           style={{
//             y: yHeadline,
//             scale: scaleHeadline,
//             opacity: opacityHeadline,
//             filter: `blur(${blurHeadline.get()}px)`,
//           }}
//           className="text-[8vw] font-extrabold uppercase tracking-tight drop-shadow-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400"
//         >
//           Our Mission
//         </motion.h1>
//       </section>

//       {/* SECTION 2: Description + Icons */}
//       <section
//         ref={descriptionRef}
//         className="relative min-h-[90vh] flex flex-col items-center justify-start z-20 bg-white shadow-2xl"
//         style={{
//           marginTop: "-8rem",
//           borderBottomLeftRadius: '1.5rem',
//           borderBottomRightRadius: '1.5rem',
//           overflow: 'hidden',
//         }}
//       >
//         <svg
//           className="w-full"
//           viewBox="0 120 1440 200"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{ height: "140px", width: "100%", display: "block" }}
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#fff"
//             d="M0,160 Q720,0 1440,100 L1440,200 L0,200 Z"
//           />
//         </svg>

//         <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-8 py-16 space-y-12">
//           {/* Title */}
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 drop-shadow text-center"
//           >
//             Mission Statement
//           </motion.h2>

//           {/* Original Mission Paragraph */}
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-2xl sm:text-3xl font-sans font-medium text-green-900 text-center leading-relaxed tracking-wide max-w-4xl"
//           >
//             {/* {missionDescription} */}
            
//             <>
//   To empower underprivileged communities through quality education,<br className="hidden sm:inline" />
//   technological innovation, and sustainable development. <br /><br />
//   We strive to bridge the gap between resources and those in need,<br className="hidden sm:inline" />
//   ensuring equal opportunities for all.
// </>

//           </motion.p>

//           {/* Icon Highlights */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center pt-8"
//           >
//             <div className="flex flex-col items-center gap-4">
//               <FaSchool className="text-4xl text-cyan-600" />
//               <p className="text-lg font-semibold text-gray-800">Quality Education</p>
//             </div>
//             <div className="flex flex-col items-center gap-4">
//               <FaLightbulb className="text-4xl text-yellow-500" />
//               <p className="text-lg font-semibold text-gray-800">Tech Innovation</p>
//             </div>
//             <div className="flex flex-col items-center gap-4">
//               <FaHandsHelping className="text-4xl text-rose-500" />
//               <p className="text-lg font-semibold text-gray-800">Equal Opportunities</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutComponentMission;


// ****************************************************************************************************

// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { FaHandsHelping, FaLightbulb, FaSchool } from "react-icons/fa";

// const missionDescription = (
//   <>
//     To empower underprivileged communities through quality education,<br className="hidden sm:inline" />
//     technological innovation, and sustainable development. <br /><br />
//     We strive to bridge the gap between resources and those in need,<br className="hidden sm:inline" />
//     ensuring equal opportunities for all.
//   </>
// );

// const AboutComponentMission: React.FC = () => {
//   const descriptionRef = React.useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: descriptionRef,
//     offset: ["start end", "end start"],
//   });

//   const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -180]);
//   const scaleHeadline = useTransform(scrollYProgress, [0, 0.9], [1, 1.08]);
//   const opacityHeadline = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);
//   const blurHeadline = useTransform(scrollYProgress, [0, 0.8], [0, 6]);

//   return (
//     <div className="relative min-h-[135vh] w-full bg-[#f8f8f8]">
//       <section className="sticky top-0 h-screen flex items-center justify-center z-10">
//         <motion.h1
//           style={{
//             y: yHeadline,
//             scale: scaleHeadline,
//             opacity: opacityHeadline,
//             filter: `blur(${blurHeadline.get()}px)`,
//           }}
//           className="text-[8vw] font-extrabold uppercase tracking-tight drop-shadow-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400"
//         >
//           Our Mission
//         </motion.h1>
//       </section>

//       <section
//         ref={descriptionRef}
//         className="relative min-h-[90vh] flex flex-col items-center justify-start z-20 bg-white shadow-2xl"
//         style={{
//           marginTop: "-8rem",
//           borderBottomLeftRadius: '1.5rem',
//           borderBottomRightRadius: '1.5rem',
//           overflow: 'hidden',
//         }}
//       >
//         <svg
//           className="w-full"
//           viewBox="0 120 1440 200"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{ height: "140px", width: "100%", display: "block" }}
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#fff"
//             d="M0,160 Q720,0 1440,100 L1440,200 L0,200 Z"
//           />
//         </svg>

//         <div className="w-full max-w-7xl mx-auto px-8 py-16 space-y-12">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 drop-shadow text-center"
//           >
//             Mission Statement
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-2xl sm:text-3xl font-sans font-medium text-green-900 text-center leading-relaxed tracking-wide max-w-5xl mx-auto"
//           >
//             {missionDescription}
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-16 text-center pt-8"
//           >
//             <div className="flex flex-col items-center gap-4">
//               <FaSchool className="text-4xl text-cyan-600" />
//               <p className="text-lg font-semibold text-gray-800">Quality Education</p>
//             </div>
//             <div className="flex flex-col items-center gap-4">
//               <FaLightbulb className="text-4xl text-yellow-500" />
//               <p className="text-lg font-semibold text-gray-800">Tech Innovation</p>
//             </div>
//             <div className="flex flex-col items-center gap-4">
//               <FaHandsHelping className="text-4xl text-rose-500" />
//               <p className="text-lg font-semibold text-gray-800">Equal Opportunities</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutComponentMission;

//--------------------------------------------------------------------------------------------------

// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { FaHandsHelping, FaLightbulb, FaSchool } from "react-icons/fa";

// const missionDescription = (
//   <>
//     To empower underprivileged communities through quality education,<br className="hidden sm:inline" />
//     technological innovation, and sustainable development. <br /><br />
//     We strive to bridge the gap between resources and those in need,<br className="hidden sm:inline" />
//     ensuring equal opportunities for all.
//   </>
// );

// const AboutComponentMission: React.FC = () => {
//   const descriptionRef = React.useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: descriptionRef,
//     offset: ["start end", "end start"],
//   });

//   const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -180]);
//   const scaleHeadline = useTransform(scrollYProgress, [0, 0.9], [1, 1.08]);
//   const opacityHeadline = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);
//   const blurHeadline = useTransform(scrollYProgress, [0, 0.8], [0, 6]);

//   return (
//     <div className="relative min-h-screen w-full bg-[#f8f8f8]">
//       <section className="sticky top-0 h-screen flex items-center justify-center z-10">
//         <motion.h1
//           style={{
//             y: yHeadline,
//             scale: scaleHeadline,
//             opacity: opacityHeadline,
//             filter: `blur(${blurHeadline.get()}px)`,
//           }}
//           className="text-[8vw] font-extrabold uppercase tracking-tight drop-shadow-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400"
//         >
//           Our Mission
//         </motion.h1>
//       </section>

//       <section
//         ref={descriptionRef}
//         className="relative min-h-fit md:min-h-[60vh] flex flex-col items-center justify-start z-20 bg-white shadow-2xl"
//         style={{
//           marginTop: "-8rem",
//           borderBottomLeftRadius: '1.5rem',
//           borderBottomRightRadius: '1.5rem',
//           overflow: 'hidden',
//         }}
//       >
//         <svg
//           className="w-full"
//           viewBox="0 120 1440 200"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{ height: "140px", width: "100%", display: "block" }}
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#fff"
//             d="M0,160 Q720,0 1440,100 L1440,200 L0,200 Z"
//           />
//         </svg>

//         <div className="flex flex-col items-center w-full max-w-3xl xl:max-w-2xl 2xl:max-w-xl mx-auto px-8 py-10 md:py-12 space-y-12">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 drop-shadow text-center"
//           >
//             Mission Statement
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-2xl sm:text-xl font-sans font-medium text-green-900 text-center leading-relaxed tracking-wide max-w-3xl mx-auto"
//           >
//             {missionDescription}
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-12 text-center pt-8"
//           >
//             <div className="flex flex-col items-center gap-4">
//               <FaSchool className="text-4xl text-cyan-600" />
//               <p className="text-lg font-semibold text-gray-800">Quality Education</p>
//             </div>
//             <div className="flex flex-col items-center gap-4">
//               <FaLightbulb className="text-4xl text-yellow-500" />
//               <p className="text-lg font-semibold text-gray-800">Tech Innovation</p>
//             </div>
//             <div className="flex flex-col items-center gap-4">
//               <FaHandsHelping className="text-4xl text-rose-500" />
//               <p className="text-lg font-semibold text-gray-800">Equal Opportunities</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutComponentMission;


//==================================================================================================

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaHandsHelping, FaLightbulb, FaSchool } from "react-icons/fa";

const missionDescription = (
  <>
    To empower underprivileged communities through quality education,
    technological innovation, and sustainable development. <br /><br />
    We strive to bridge the gap between resources and those in need,
    ensuring equal opportunities for all.
  </>
);

const AboutComponentMission: React.FC = () => {
  const descriptionRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: descriptionRef,
    offset: ["start end", "end start"],
  });

  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const scaleHeadline = useTransform(scrollYProgress, [0, 0.9], [1, 1.08]);
  const opacityHeadline = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);
  const blurHeadline = useTransform(scrollYProgress, [0, 0.8], [0, 6]);

  return (
    // <div className="relative min-h-screen w-full bg-[#f8f8f8]">
    <div className="relative min-h-screen w-full bg-[#f9f9f9]">

      <section className="sticky top-0 h-screen flex items-center justify-center z-10">
        <motion.h1
          style={{
            y: yHeadline,
            scale: scaleHeadline,
            opacity: opacityHeadline,
            filter: `blur(${blurHeadline.get()}px)`,
          }}
          className="text-[8vw] font-extrabold uppercase tracking-tight drop-shadow-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400"
        >
          Our Mission
        </motion.h1>
      </section>

      <section
        ref={descriptionRef}
        className="relative min-h-fit md:min-h-[60vh] flex flex-col items-center justify-start z-20 bg-white shadow-2xl"
        style={{
          marginTop: "-8rem",
          borderBottomLeftRadius: '1.5rem',
          borderBottomRightRadius: '1.5rem',
          overflow: 'hidden',
        }}
      >
        <svg
          className="w-full"
          viewBox="0 120 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "140px", width: "100%", display: "block" }}
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,160 Q720,0 1440,100 L1440,200 L0,200 Z"
          />
        </svg>

        <div className="flex flex-col items-center w-full max-w-3xl xl:max-w-2xl 2xl:max-w-xl mx-auto px-8 py-10 md:py-12 space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 drop-shadow text-center"
          >
            Mission Statement
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            // className="text-2xl sm:text-xl font-sans font-medium text-green-900 text-center  leading-relaxed tracking-wide max-w-3xl mx-auto"
            className="text-2xl sm:text-xl font-sans font-medium text-gray-800 text-center  leading-relaxed tracking-wide max-w-3xl mx-auto"

          >
            {missionDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-12 text-center pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center gap-4"
            >
              <FaSchool className="text-4xl text-cyan-600 drop-shadow-md" />
              <p className="text-lg font-semibold text-gray-800">Quality Education</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center gap-4"
            >
              <FaLightbulb className="text-4xl text-yellow-500 drop-shadow-md" />
              <p className="text-lg font-semibold text-gray-800">Tech Innovation</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center gap-4"
            >
              <FaHandsHelping className="text-4xl text-rose-500 drop-shadow-md" />
              <p className="text-lg font-semibold text-gray-800">Equal Opportunities</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutComponentMission;
