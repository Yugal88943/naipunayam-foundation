// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { FaGraduationCap, FaLaptopCode, FaSeedling, FaUsers } from "react-icons/fa";

// // const visionDescription = `
// // We envision a world where every individual—regardless of their background, gender, or economic status—has access to quality education, modern technology, and the tools to build a sustainable and dignified livelihood. We believe in breaking the cycle of poverty through skill-based training, digital literacy, and community-driven initiatives that spark innovation, self-reliance, and long-term impact. Our goal is not just empowerment—but true transformation, where each person becomes a catalyst for change in their family, community, and beyond.
// // `;
// // const visionDescription = (
// //   <>
// //     We envision a world where every individual — regardless of background, gender, or income —  
// //     has access to <strong>quality education</strong>, modern technology, and the tools to build  
// //     a sustainable and dignified livelihood. <br /><br />
// //     We believe in breaking the cycle of poverty through <strong>skill-based training</strong>,  
// //     <strong>digital literacy</strong>, and <strong>community-led innovation</strong>. <br /><br />
// //     Our goal is not just empowerment — but lasting transformation,  
// //     where each person becomes a <strong>catalyst for change</strong> in their family, community, and beyond.
// //   </>
// // );
// const visionDescription = (
//   // <>
//   //   We envision a world where every individual — regardless of background, gender, or income —  
//   //   has access to <strong className="inline-flex items-center gap-1 text-blue-700"><FaGraduationCap className="inline text-lg" /> quality education</strong>, modern technology, and the tools to build  
//   //   a sustainable and dignified livelihood. <br /><br />
    
//   //   We believe in breaking the cycle of poverty through  
//   //   <strong className="inline-flex items-center gap-1 text-green-700"><FaLaptopCode className="inline text-lg" /> skill-based training</strong>,  
//   //   <strong className="inline-flex items-center gap-1 text-green-700"><FaLaptopCode className="inline text-lg" /> digital literacy</strong>, and  
//   //   <strong className="inline-flex items-center gap-1 text-green-700"><FaSeedling className="inline text-lg" /> community-led innovation</strong>. <br /><br />
    
//   //   Our goal is not just empowerment — but lasting transformation,  
//   //   where each person becomes a  
//   //   <strong className="inline-flex items-center gap-1 text-cyan-700"><FaUsers className="inline text-lg" /> catalyst for change</strong> in their family, community, and beyond.
//   // </>
//   <>
//   We envision a world where every individual — regardless of background, gender, or income —  
//   has access to&nbsp;
//   <strong className="inline-flex items-center gap-2 text-blue-700">
//     <FaGraduationCap className="text-lg" />
//     quality education
//   </strong>,&nbsp;
//   modern technology, and the tools to build a sustainable and dignified livelihood.
  
//   <br /><br />

//   We believe in breaking the cycle of poverty through:<br /><br />
  
//   {/* <span className="inline-flex flex-col sm:flex-row sm:justify-center sm:gap-6 gap-3 items-center text-green-700 font-semibold text-lg">
//     <span className="inline-flex items-center gap-2">
//       <FaLaptopCode className="text-xl" />
//       Skill-Based Training
//     </span>
//     <span className="inline-flex items-center gap-2">
//       <FaLaptopCode className="text-xl" />
//       Digital Literacy
//     </span>
//     <span className="inline-flex items-center gap-2">
//       <FaSeedling className="text-xl" />
//       Community-Led Innovation
//     </span>
//   </span> */}
// <span className="inline-flex flex-col sm:flex-row sm:justify-center sm:gap-5 gap-3 items-center text-green-700 font-semibold text-lg">
//   <span className="inline-flex items-center gap-1">
//     <FaLaptopCode className="text-2xl" />
//     <span>Skill-Based Training</span>
//   </span>
//   <span className="inline-flex items-center gap-1">
//     <FaLaptopCode className="text-2xl" />
//     <span>Digital Literacy</span>
//   </span>
//   <span className="inline-flex items-center gap-1">
//     <FaSeedling className="text-2xl" />
//     <span>Community-Led Innovation</span>
//   </span>
// </span>

//   <br /><br />

//   Our goal is not just empowerment — but lasting transformation,  
//   where each person becomes a&nbsp;
//   <strong className="inline-flex items-center gap-2 text-cyan-700">
//     <FaUsers className="text-lg" />
//     catalyst for change
//   </strong>
//   &nbsp;in their family, community, and beyond.
// </>

// );



// const AboutComponentVision: React.FC = () => {
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
//           className="text-[8vw] font-extrabold uppercase tracking-tight drop-shadow-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-cyan-500 to-blue-400"
//         >
//           Our Vision
//         </motion.h1>
//       </section>

//       {/* SECTION 2: Pointed Curve with Content */}
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
//         {/* SVG Pointed Arch */}
//         <svg
//           className="w-full"
//           viewBox="0 0 1440 200"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{
//             height: "100px",
//             width: "100%",
//             display: "block",
//           }}
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#fff"
//             d="
//               M0,160
//               Q720,0 1440,160
//               L1440,200
//               L0,200
//               Z
//             "
//           />
//         </svg>

//         {/* Content Box - Responsive width! */}
//         <div
//           className="
//             flex flex-col items-center w-full
//             max-w-3xl
//             xl:max-w-2xl
//             2xl:max-w-xl
//             mx-auto px-8 py-10 md:py-12
//           "
//         >
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-cyan-500 to-blue-400 drop-shadow text-center"
//           >
//             Our Vision
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.35, duration: 0.8 }}
            
//             // className="
//             //   text-2xl sm:text-1xl
//             //   font-sans font-normal 
//             //   // text-blue-800
//             //   text-gray-800
//             //   leading-normal
//             //   sectionacking-normal
//             //   max-w-3xl mx-auto text-center
//             //   [word-spacing:0.08em]
//             // "
            
//             className="
//   text-2xl sm:text-1xl
//   font-sans font-normal 
//   text-gray-800
//   leading-normal
//   tracking-normal
//   max-w-3xl mx-auto text-center
//   [word-spacing:0.08em]
// "

//           >
//             {visionDescription}
//           </motion.p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutComponentVision;

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaSeedling, FaUsers } from "react-icons/fa";

// Vision description with icons and spacing
const visionDescription = (
  <>
    We envision a world where every individual — regardless of background, gender, or income —&nbsp;
    has access to&nbsp;
    <strong className="inline-flex items-center gap-2 text-blue-700 font-semibold">
      <FaGraduationCap className="text-2xl" />
      Quality Education
    </strong>
    , modern technology, and the tools to build a sustainable and dignified livelihood.

    <br /><br />

    We believe in breaking the cycle of poverty through:
    <br /><br />

    <div className="inline-flex flex-col sm:flex-row sm:justify-center sm:gap-10 gap-5 items-center text-green-700 font-semibold text-lg mt-4">
  {[
    { icon: <FaLaptopCode className="text-3xl transition-transform group-hover:scale-110" />, label: "Skill-Based\nTraining" },
    { icon: <FaLaptopCode className="text-3xl transition-transform group-hover:scale-110" />, label: "Digital\nLiteracy" },
    { icon: <FaSeedling className="text-3xl transition-transform group-hover:scale-110" />, label: "Community-Led\nInnovation" }
  ].map(({ icon, label }, idx) => (
    <div
      key={idx}
      className="group inline-flex flex-col items-center gap-1 text-center transition-all duration-300 hover:text-emerald-600 cursor-pointer"
    >
      {icon}
      {label.split("\n").map((line, i) => (
        <span key={i}>{line}</span>
      ))}
    </div>
  ))}
</div>


    <br /><br />

    Our goal is not just empowerment — but lasting transformation, where each person becomes a&nbsp;
    <strong className="inline-flex items-center gap-2 text-cyan-700 font-semibold">
      <FaUsers className="text-xl" />
      Catalyst for Change
    </strong>
    &nbsp;in their family, community, and beyond.
  </>
);

const AboutComponentVision: React.FC = () => {
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
    <div className="relative min-h-screen w-full bg-[#f8f8f8]">
      {/* Sticky animated title */}
      <section className="sticky top-0 h-screen flex items-center justify-center z-10">
        <motion.h1
          style={{
            y: yHeadline,
            scale: scaleHeadline,
            opacity: opacityHeadline,
            filter: `blur(${Math.max(0, blurHeadline.get())}px)`,
          }}
          className="text-[8vw] font-extrabold uppercase tracking-tight drop-shadow-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-cyan-500 to-blue-400"
        >
          Our Vision
        </motion.h1>
      </section>

      {/* Vision content below wave */}
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
        {/* Decorative SVG wave */}
        <svg
          className="w-full"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: "100px",
            width: "100%",
            display: "block",
          }}
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,160 Q720,0 1440,160 L1440,200 L0,200 Z"
          />
        </svg>

        {/* Content box */}
        <div className="flex flex-col items-center w-full max-w-3xl xl:max-w-2xl 2xl:max-w-xl mx-auto px-8 py-10 md:py-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-cyan-500 to-blue-400 drop-shadow text-center"
          >
            Our Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-xl font-sans font-normal text-gray-800 leading-relaxed tracking-normal max-w-3xl mx-auto text-center [word-spacing:0.08em]"
          >
            {visionDescription}
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default AboutComponentVision;
