// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { FaHandsHelping, FaSeedling, FaHandshake, FaRegLightbulb, FaHandHoldingHeart } from "react-icons/fa";
// import { PiUsersThreeBold, PiGlobe } from "react-icons/pi";
// import { TbGenderFemale, TbHeartHandshake } from "react-icons/tb";

// // Card data
// const SDG_CARDS = [
//   {
//     icons: [
//       <FaHandsHelping key="hands" color="#e11d48" />, // rose-600
//       <FaHandshake key="shake" color="#0ea5e9" />,   // sky-500
//       <FaSeedling key="seed" color="#10b981" />      // emerald-500
//     ],
//     title: "Swarozgar",
//     subtitle: "Mentorpreneur for underprivileged people",
//     color: "bg-gradient-to-br from-pink-200 via-rose-100/70 to-orange-100",
//     animation: { rotate: -10, scale: 1.1, y: -10 }
//   },
//   {
//     icons: [
//       <PiUsersThreeBold key="users" color="#7c3aed" />,   // violet-600
//       <FaRegLightbulb key="bulb" color="#eab308" />,      // yellow-500
//       <PiGlobe key="globe" color="#06b6d4" />             // cyan-500
//     ],
//     title: "Srijanatmakta",
//     subtitle: "Shaping a future",
//     color: "bg-gradient-to-br from-blue-200 via-indigo-100 to-sky-100",
//     animation: { rotate: 12, scale: 1.12, x: 10 }
//   },
//   {
//     icons: [
//       <TbGenderFemale key="female" color="#f472b6" />,       // pink-400
//       <TbHeartHandshake key="heart" color="#16a34a" />,      // green-600
//       <FaHandHoldingHeart key="support" color="#e11d48" />   // rose-600
//     ],
//     title: "Swadhinta",
//     subtitle: "Women Empowerment",
//     color: "bg-gradient-to-br from-green-200 via-teal-100 to-emerald-100",
//     animation: { rotate: -5, scale: 1.13, y: 8 }
//   }
// ];

// // OPTIMIZED tilt hook (no lag!)
// function useCardTilt() {
//   const ref = useRef<HTMLDivElement>(null);
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const frame = useRef<number>(0);

//   function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//     if (frame.current) return; // already scheduled
//     frame.current = requestAnimationFrame(() => {
//       const rect = ref.current?.getBoundingClientRect();
//       if (!rect) return;
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       const px = (x / rect.width - 0.5) * 2;
//       const py = (y / rect.height - 0.5) * 2;
//       setTilt({
//         x: py * 15,
//         y: px * 15
//       });
//       frame.current = 0;
//     });
//   }

//   function handleMouseLeave() {
//     setTilt({ x: 0, y: 0 });
//     if (frame.current) {
//       cancelAnimationFrame(frame.current);
//       frame.current = 0;
//     }
//   }

//   return {
//     ref,
//     tilt,
//     handleMouseMove,
//     handleMouseLeave
//   };
// }

// export default function HomeComponentSustainableDevelopment() {
//   const cardVariants = {
//     hidden: { opacity: 0, y: 60, scale: 0.97 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         duration: 0.7,
//         delay: i * 0.13
//       }
//     })
//   };

//   const headingVariants = {
//     hidden: { opacity: 0, y: -40, scale: 0.98 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
//   };

//   const subtitleVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.14 + 0.7, duration: 0.5, type: "spring", stiffness: 22 }
//     })
//   };

//   return (
//     // <section className="relative w-full py-14 px-3 md:px-10 lg:px-28 bg-white/90 flex flex-col items-center min-h-screen">
//     <section className="relative w-full py-14 px-3 md:px-10 lg:px-28 bg-white/90 flex flex-col items-center">
//   <motion.div
//         variants={headingVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="w-full text-center mb-12"
//       >
//         <h2 className="text-[clamp(1.7rem,4vw,2.9rem)] font-black font-serif text-slate-900 tracking-tight mb-1">
//           Our Commitment to{" "}
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-500 font-black">
//             Sustainable Development Goals
//           </span>
//           <span className="text-slate-900/80 font-bold"> (SDGs)</span>
//         </h2>
//       </motion.div>

//       {/* Card grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
//         {SDG_CARDS.map((card, idx) => {
//           const { ref, tilt, handleMouseMove, handleMouseLeave } = useCardTilt();
//           return (
//             <motion.div
//               key={card.title}
//               ref={ref}
//               custom={idx}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.18 }}
//               whileHover={{
//                 y: -12,
//                 scale: 1.045,
//                 boxShadow: "0 16px 44px #e2e8f066, 0 2px 8px #a21caf22"
//               }}
//               animate={{
//                 rotateX: tilt.x,
//                 rotateY: tilt.y,
//                 transition: { type: "spring", stiffness: 120, damping: 18 }
//               }}
//               onMouseMove={handleMouseMove}
//               onMouseLeave={handleMouseLeave}
//               className={`
//                 group rounded-3xl
//                 shadow-xl
//                 hover:shadow-2xl
//                 transition-all duration-300
//                 flex flex-col items-center justify-center
//                 px-6 py-10 md:p-8
//                 ${card.color}
//                 border border-gray-100/80
//                 min-h-[310px] max-w-[390px] w-full mx-auto
//                 relative
//                 cursor-pointer
//                 backdrop-blur-lg
//                 will-change-transform
//               `}
//               style={{
//                 perspective: 1000,
//                 touchAction: "manipulation"
//               }}
//             >
//               <span className="absolute -z-10 top-5 left-5 w-[92%] h-[92%] rounded-3xl bg-gradient-to-br from-white/80 to-fuchsia-100/50 opacity-80 blur-[2px]" />
//               {/* Floating icons row */}
//               <motion.div
//                 className="flex gap-3 md:gap-5 mb-6"
//                 initial={{ y: -30, opacity: 0, scale: 0.7 }}
//                 whileInView={{
//                   y: 0, opacity: 1, scale: 1,
//                   transition: { type: "spring", duration: 0.8, delay: idx * 0.15 + 0.18 }
//                 }}
//                 viewport={{ once: true }}
//               >
//                 {card.icons.map((icon, i) => (
//                   <motion.span
//                     key={i}
//                     className="text-[2.1rem] md:text-[2.5rem] drop-shadow-lg select-none hover:scale-125 hover:rotate-[7deg] transition-all duration-200"
//                     whileHover={{ scale: 1.23, rotate: 8 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {icon}
//                   </motion.span>
//                 ))}
//               </motion.div>
//               {/* Title */}
//               <h3 className={`
//                 text-2xl md:text-2xl font-extrabold font-serif text-center
//                 bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-violet-900 to-fuchsia-900
//                 tracking-tight mb-2
//               `}>
//                 {card.title}
//               </h3>
              
              
              
//               {/* Subtitle */}
//               <motion.p
//                 className="text-base md:text-lg text-center font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-pink-500 to-emerald-600"
//                 custom={idx}
//                 variants={subtitleVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//                 style={{
//                   backgroundSize: "250% 100%",
//                   animation: "moving-gradient 6s linear infinite alternate",
//                   WebkitBackgroundClip: "text"
//                 }}
//               >
//                 {card.subtitle}
//               </motion.p>
//               {/* Animated underline */}
//               <span
//                 className="block w-16 h-1 mt-5 bg-gradient-to-r from-pink-400 via-indigo-400 to-green-400 rounded-full opacity-80 mx-auto"
//               />
//             </motion.div>
//           );
//         })}
//       </div>
//       <style>{`
//         @keyframes moving-gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>
//     </section>
//   );
// }
    
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHandsHelping,
  FaSeedling,
  FaHandshake,
  FaRegLightbulb,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { PiUsersThreeBold, PiGlobe } from "react-icons/pi";
import { TbGenderFemale, TbHeartHandshake } from "react-icons/tb";

// Card data
const SDG_CARDS = [
  {
    icons: [
      <FaHandsHelping key="hands" color="#e11d48" />,
      <FaHandshake key="shake" color="#0ea5e9" />,
      <FaSeedling key="seed" color="#10b981" />,
    ],
    title: "Swarozgar",
    subtitle: "Mentorpreneur for underprivileged people",
    color: "bg-gradient-to-br from-pink-200 via-rose-100/70 to-orange-100",
    animation: { rotate: -10, scale: 1.1, y: -10 },
    link: "/initiatives/vihaas-design-technologies",
  },
  {
    icons: [
      <PiUsersThreeBold key="users" color="#7c3aed" />,
      <FaRegLightbulb key="bulb" color="#eab308" />,
      <PiGlobe key="globe" color="#06b6d4" />,
    ],
    title: "Srijanatmakta",
    subtitle: "Shaping a future",
    color: "bg-gradient-to-br from-blue-200 via-indigo-100 to-sky-100",
    animation: { rotate: 12, scale: 1.12, x: 10 },
    link: "/initiatives/vihaas-tech-pro",
  },
  {
    icons: [
      <TbGenderFemale key="female" color="#f472b6" />,
      <TbHeartHandshake key="heart" color="#16a34a" />,
      <FaHandHoldingHeart key="support" color="#e11d48" />,
    ],
    title: "Swadhinta",
    subtitle: "Women Empowerment",
    color: "bg-gradient-to-br from-green-200 via-teal-100 to-emerald-100",
    animation: { rotate: -5, scale: 1.13, y: 8 },
    link: "/initiatives/hanzaS",
  },
];

function useCardTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const frame = useRef<number>(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width - 0.5) * 2;
      const py = (y / rect.height - 0.5) * 2;
      setTilt({ x: py * 15, y: px * 15 });
      frame.current = 0;
    });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
    if (frame.current) {
      cancelAnimationFrame(frame.current);
      frame.current = 0;
    }
  }

  return { ref, tilt, handleMouseMove, handleMouseLeave };
}

export default function HomeComponentSustainableDevelopment() {
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.97 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", duration: 0.7, delay: i * 0.13 },
    }),
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.14 + 0.7,
        duration: 0.5,
        type: "spring",
        stiffness: 22,
      },
    }),
  };

  return (
    <section className="relative w-full py-14 px-3 md:px-10 lg:px-28 bg-white/90 flex flex-col items-center">
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full text-center mb-12"
      >
        <h2 className="text-[clamp(1.7rem,4vw,2.9rem)] font-black font-serif text-slate-900 tracking-tight mb-1">
          Our Commitment to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-500 font-black">
            Sustainable Development Goals
          </span>
          <span className="text-slate-900/80 font-bold"> (SDGs)</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {SDG_CARDS.map((card, idx) => {
          const { ref, tilt, handleMouseMove, handleMouseLeave } = useCardTilt();

          return (
            <Link to={card.link} key={card.title} className="block focus:outline-none">
              <motion.div
                ref={ref}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                whileHover={{
                  y: -12,
                  scale: 1.045,
                  boxShadow: "0 16px 44px #e2e8f066, 0 2px 8px #a21caf22",
                }}
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                  },
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`group rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center px-6 py-10 md:p-8 ${card.color} border border-gray-100/80 min-h-[310px] max-w-[390px] w-full mx-auto relative cursor-pointer backdrop-blur-lg will-change-transform`}
                style={{ perspective: 1000, touchAction: "manipulation" }}
              >
                <span className="absolute -z-10 top-5 left-5 w-[92%] h-[92%] rounded-3xl bg-gradient-to-br from-white/80 to-fuchsia-100/50 opacity-80 blur-[2px]" />
                <motion.div
                  className="flex gap-3 md:gap-5 mb-6"
                  initial={{ y: -30, opacity: 0, scale: 0.7 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      duration: 0.8,
                      delay: idx * 0.15 + 0.18,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  {card.icons.map((icon, i) => (
                    <motion.span
                      key={i}
                      className="text-[2.1rem] md:text-[2.5rem] drop-shadow-lg select-none hover:scale-125 hover:rotate-[7deg] transition-all duration-200"
                      whileHover={{ scale: 1.23, rotate: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {icon}
                    </motion.span>
                  ))}
                </motion.div>

                <h3 className="text-2xl md:text-2xl font-extrabold font-serif text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-violet-900 to-fuchsia-900 tracking-tight mb-2">
                  {card.title}
                </h3>

                <motion.p
                  className="text-base md:text-lg text-center font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-pink-500 to-emerald-600"
                  custom={idx}
                  variants={subtitleVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  style={{
                    backgroundSize: "250% 100%",
                    animation: "moving-gradient 6s linear infinite alternate",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  {card.subtitle}
                </motion.p>

                <span className="block w-16 h-1 mt-5 bg-gradient-to-r from-pink-400 via-indigo-400 to-green-400 rounded-full opacity-80 mx-auto" />
              </motion.div>
            </Link>
          );
        })}
      </div>

      <style>{`
        @keyframes moving-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
