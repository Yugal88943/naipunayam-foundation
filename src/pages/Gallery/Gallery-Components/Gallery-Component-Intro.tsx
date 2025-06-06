// import React from "react";
// import { motion } from "framer-motion";
// import { FaImages } from "react-icons/fa";

// const GalleryComponentIntro: React.FC = () => (
//   <section className="w-full flex flex-col items-center justify-center pt-12 pb-4 bg-gradient-to-br from-rose-50 via-indigo-50 to-emerald-50 relative">
//     {/* Icon with motion and hover */}
//     <motion.span
//       initial={{ opacity: 0, scale: 0.7, y: 12 }}
//       animate={{ opacity: 1, scale: 1, y: 0 }}
//       transition={{ duration: 0.7, type: "spring" }}
//       whileHover={{ scale: 1.17, rotate: 8, filter: "drop-shadow(0 0 8px #d946efbb)" }}
//       className="mb-2 text-fuchsia-600 cursor-pointer transition-all"
//       style={{ willChange: "transform, filter" }}
//     >
//       <FaImages className="text-5xl drop-shadow" />
//     </motion.span>
//     {/* Headline */}
//     {/* <motion.h1
//       initial={{ opacity: 0, y: 22 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
//       whileHover={{ scale: 1.03, textShadow: "0 6px 18px #a21caf40" }}
//       className="text-3xl md:text-5xl font-black text-center bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-md transition-all duration-200 cursor-pointer"
//       style={{ willChange: "transform, textShadow" }}
//     >
//       Moments that Inspire: <br />
//       <motion.span
//         className="inline-block relative mt-4"
//         whileHover={{
//           scale: 1.07,
//           y: -4,
//           textShadow: "0 4px 24px #4f46e5aa, 0 0px 3px #10b981cc",
//         }}
//         transition={{ type: "spring", stiffness: 300 }}
//       >
//         Naipunayam Gallery
//         <span className="block w-full h-1 mt-1 rounded-lg bg-gradient-to-r from-fuchsia-400 to-emerald-400 opacity-70 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//       </motion.span>
//     </motion.h1> */}
//     {/* <motion.h1
//   initial={{ opacity: 0, y: 22 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
//   whileHover={{ scale: 1.03, textShadow: "0 6px 18px #a21caf40" }}
//   className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-md transition-all duration-200 cursor-pointer leading-tight"
//   style={{ willChange: "transform, textShadow" }}
// >
//   Moments that Inspire:
//   <br className="hidden xs:block" />
//   <motion.span
//     className="inline-block relative mt-2 xs:mt-4"
//     whileHover={{
//       scale: 1.07,
//       y: -4,
//       textShadow: "0 4px 24px #4f46e5aa, 0 0px 3px #10b981cc",
//     }}
//     transition={{ type: "spring", stiffness: 300 }}
//   >
//     Naipunayam Gallery
//     <span className="block w-full h-1 mt-1 rounded-lg bg-gradient-to-r from-fuchsia-400 to-emerald-400 opacity-70 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//   </motion.span>
// </motion.h1> */}

// <motion.h1
//   initial={{ opacity: 0, y: 22 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
//   whileHover={{ scale: 1.03, textShadow: "0 6px 18px #a21caf40" }}
//   className="text-[1.7rem] sm:text-3xl md:text-5xl font-black text-center bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-md transition-all duration-200 cursor-pointer leading-tight"
//   style={{ willChange: "transform, textShadow" }}
// >
//   <span>
//     Moments that Inspire:
//   </span>
//   <span className="block mt-2 sm:mt-4">
//     <motion.span
//       className="inline-block relative"
//       whileHover={{
//         scale: 1.07,
//         y: -4,
//         textShadow: "0 4px 24px #4f46e5aa, 0 0px 3px #10b981cc",
//       }}
//       transition={{ type: "spring", stiffness: 300 }}
//     >
//       Naipunayam Gallery
//       <span className="block w-full h-1 mt-1 rounded-lg bg-gradient-to-r from-fuchsia-400 to-emerald-400 opacity-70 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//     </motion.span>
//   </span>
// </motion.h1>

    
//     {/* Subtitle */}
//     <motion.p
//       initial={{ opacity: 0, y: 16 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
//       className="max-w-xl mt-4 text-center text-lg md:text-xl font-semibold px-4 py-2 bg-gradient-to-r from-white/90 to-emerald-50/90 rounded-xl shadow-sm text-fuchsia-700 tracking-wide border border-fuchsia-100/40 mx-auto"
//       style={{
//         background: "linear-gradient(120deg,#f5f3ffcc,#e0f2f1cc 100%)",
//         boxShadow: "0 1px 12px 0 rgba(99,102,241,0.08)",
//         backdropFilter: "blur(4px)",
//         position: "relative",
//       }}
//     >
//       Discover our journey in frames: events, stories,{" "}
//       <motion.span
//         whileHover={{
//           color: "#059669", // emerald-600
//           scale: 1.15,
//           textShadow: "0 2px 10px #10b981aa",
//         }}
//         className="font-bold text-emerald-600 transition-all duration-300 cursor-pointer underline decoration-emerald-400 decoration-2 underline-offset-4"
//       >
//         smiles
//       </motion.span>
//       , and change in action.
//     </motion.p>
//   </section>
// );

// export default GalleryComponentIntro;


// import React from "react";
// import { motion } from "framer-motion";
// import { FaImages } from "react-icons/fa";

// const GalleryComponentIntro: React.FC = () => (
//   <section className="w-full flex flex-col items-center justify-center pt-8 pb-6 bg-gradient-to-br from-rose-50 via-indigo-50 to-emerald-50 min-h-[180px] relative">
//     {/* Icon */}
//     <span className="mb-2 text-fuchsia-600">
//       <FaImages className="text-3xl sm:text-5xl drop-shadow" />
//     </span>
//     {/* Headline */}
//     <h1
//       className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-center bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-md"
//       style={{ lineHeight: "1.15", wordBreak: "break-word" }}
//     >
//       <span>Moments that Inspire:</span>
//       <span className="block mt-1">Naipunayam Gallery</span>
//     </h1>
//     {/* Subtitle */}
//     <p
//       className="max-w-xs sm:max-w-xl mt-2 text-center text-[15px] sm:text-lg font-semibold px-2 py-2 bg-white/90 rounded-xl text-fuchsia-700 tracking-wide border border-fuchsia-100/40 mx-auto"
//       style={{
//         background: "linear-gradient(120deg,#f5f3ffcc,#e0f2f1cc 100%)",
//         backdropFilter: "blur(4px)",
//       }}
//     >
//       Discover our journey in frames: events, stories, <span className="font-bold text-emerald-600">smiles</span>, and change in action.
//     </p>
//   </section>
// );

// export default GalleryComponentIntro;


// import React from "react";
// import { motion } from "framer-motion";
// import { FaImages } from "react-icons/fa";

// const GalleryComponentIntro: React.FC = () => (
//   <section className="w-full flex flex-col items-center justify-center pt-8 pb-6 bg-gradient-to-br from-rose-50 via-indigo-50 to-emerald-50 min-h-[180px] relative">
//     {/* Icon with subtle fade/scale animation */}
//     <motion.span
//       initial={{ opacity: 0, scale: 0.7, y: 8 }}
//       animate={{ opacity: 1, scale: 1, y: 0 }}
//       transition={{ duration: 0.7, type: "spring" }}
//       className="mb-2 text-fuchsia-600"
//     >
//       <FaImages className="text-3xl sm:text-5xl drop-shadow" />
//     </motion.span>
//     {/* Headline with fade-in animation */}
//     <motion.h1
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: 0.15, type: "spring" }}
//       className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-center bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-md"
//       style={{ lineHeight: "1.15", wordBreak: "break-word" }}
//     >
//       <span>Moments that Inspire:</span>
//       <span className="block mt-1">Naipunayam Gallery</span>
//     </motion.h1>
//     {/* Subtitle (no animation for max safety) */}
//     <p
//       className="max-w-xs sm:max-w-xl mt-2 text-center text-[15px] sm:text-lg font-semibold px-2 py-2 bg-white/90 rounded-xl text-fuchsia-700 tracking-wide border border-fuchsia-100/40 mx-auto"
//       style={{
//         background: "linear-gradient(120deg,#f5f3ffcc,#e0f2f1cc 100%)",
//         backdropFilter: "blur(4px)",
//       }}
//     >
//       Discover our journey in frames: events, stories, <span className="font-bold text-emerald-600">smiles</span>, and change in action.
//     </p>
//   </section>
// );

// export default GalleryComponentIntro;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaImages } from "react-icons/fa";

// const useScreenIsSmall = () => {
//   const [isSmall, setIsSmall] = React.useState(false);
//   React.useEffect(() => {
//     // Run once on mount
//     const check = () => setIsSmall(window.innerWidth < 480);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);
//   return isSmall;
// };

// const GalleryComponentIntro: React.FC = () => {
//   const isSmall = useScreenIsSmall();

//   // --- MOBILE VERSION (NO ANIMATION, SMALLER FONT)
//   if (isSmall) {
//     return (
//       <section className="w-full flex flex-col items-center justify-center pt-8 pb-6 bg-gradient-to-br from-rose-50 via-indigo-50 to-emerald-50 min-h-[180px] relative">
//         <span className="mb-2 text-fuchsia-600">
//           <FaImages className="text-3xl drop-shadow" />
//         </span>
//         <h1
//           className="text-base font-black text-center bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-md"
//           style={{ lineHeight: "1.15", wordBreak: "break-word" }}
//         >
//           Moments that Inspire:
//           <span className="block mt-1">Naipunayam Gallery</span>
//         </h1>
//         <p
//           className="max-w-xs mt-2 text-center text-[15px] font-semibold px-2 py-2 bg-white/90 rounded-xl text-fuchsia-700 tracking-wide border border-fuchsia-100/40 mx-auto"
//           style={{
//             background: "linear-gradient(120deg,#f5f3ffcc,#e0f2f1cc 100%)",
//             backdropFilter: "blur(4px)",
//           }}
//         >
//           Discover our journey in frames: events, stories, <span className="font-bold text-emerald-600">smiles</span>, and change in action.
//         </p>
//       </section>
//     );
//   }

//   // --- DESKTOP/TABLET (WITH FULL ANIMATION)
//   return (
//     <section className="w-full flex flex-col items-center justify-center pt-12 pb-8 bg-gradient-to-br from-rose-50 via-indigo-50 to-emerald-50 relative">
//       {/* Icon with motion and hover */}
//       <motion.span
//         initial={{ opacity: 0, scale: 0.7, y: 12 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.7, type: "spring" }}
//         whileHover={{ scale: 1.17, rotate: 8, filter: "drop-shadow(0 0 8px #d946efbb)" }}
//         className="mb-2 text-fuchsia-600 cursor-pointer transition-all"
//         style={{ willChange: "transform, filter" }}
//       >
//         <FaImages className="text-5xl drop-shadow" />
//       </motion.span>
//       {/* Headline */}
//       <motion.h1
//         initial={{ opacity: 0, y: 22 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
//         whileHover={{ scale: 1.03, textShadow: "0 6px 18px #a21caf40" }}
//         className="text-3xl md:text-5xl font-black text-center bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-md transition-all duration-200 cursor-pointer"
//         style={{ willChange: "transform, textShadow" }}
//       >
//         Moments that Inspire:
//         <br />
//         <motion.span
//           className="inline-block relative mt-4"
//           whileHover={{
//             scale: 1.07,
//             y: -4,
//             textShadow: "0 4px 24px #4f46e5aa, 0 0px 3px #10b981cc",
//           }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           Naipunayam Gallery
//           <span className="block w-full h-1 mt-1 rounded-lg bg-gradient-to-r from-fuchsia-400 to-emerald-400 opacity-70 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//         </motion.span>
//       </motion.h1>
//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
//         className="max-w-xl mt-4 text-center text-lg md:text-xl font-semibold px-4 py-2 bg-gradient-to-r from-white/90 to-emerald-50/90 rounded-xl shadow-sm text-fuchsia-700 tracking-wide border border-fuchsia-100/40 mx-auto"
//         style={{
//           background: "linear-gradient(120deg,#f5f3ffcc,#e0f2f1cc 100%)",
//           boxShadow: "0 1px 12px 0 rgba(99,102,241,0.08)",
//           backdropFilter: "blur(4px)",
//           position: "relative",
//         }}
//       >
//         Discover our journey in frames: events, stories,{" "}
//         <motion.span
//           whileHover={{
//             color: "#059669", // emerald-600
//             scale: 1.15,
//             textShadow: "0 2px 10px #10b981aa",
//           }}
//           className="font-bold text-emerald-600 transition-all duration-300 cursor-pointer underline decoration-emerald-400 decoration-2 underline-offset-4"
//         >
//           smiles
//         </motion.span>
//         , and change in action.
//       </motion.p>
//     </section>
//   );
// };

// export default GalleryComponentIntro;
// import React from "react";
// import { motion } from "framer-motion";
// import { FaImages } from "react-icons/fa";

// const GalleryComponentIntro: React.FC = () => (
//   <section
//     className="w-full flex flex-col items-center justify-center pt-14 pb-9 bg-gradient-to-br from-rose-50 via-indigo-50 to-emerald-50 relative"
//     style={{
//       minHeight: "230px",            // extra safe for iOS
//       WebkitOverflowScrolling: "touch", // iOS fix
//       overflow: "visible",               // no clipping!
//       boxSizing: "border-box",          // always fits
//     }}
//   >
//     {/* Icon with safe animation */}
//     <motion.span
//       initial={{ opacity: 0, scale: 0.7, y: 12 }}
//       animate={{ opacity: 1, scale: 1, y: 0 }}
//       transition={{ duration: 0.7, type: "spring" }}
//       whileHover={{ scale: 1.17, rotate: 8, filter: "drop-shadow(0 0 8px #d946efbb)" }}
//       className="mb-2 text-fuchsia-600 cursor-pointer"
//       style={{ willChange: "transform, filter" }}
//     >
//       <FaImages className="text-3xl sm:text-5xl drop-shadow" />
//     </motion.span>

//     {/* Headline, no <br />, never hidden */}
//     <motion.h1
//       initial={{ opacity: 0, y: 22 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
//       whileHover={{ scale: 1.03, textShadow: "0 6px 18px #a21caf40" }}
//       className="
//         text-[1.1rem]
//         xs:text-xl
//         sm:text-3xl
//         md:text-4xl
//         lg:text-5xl
//         font-black
//         text-center
//         bg-gradient-to-r
//         from-fuchsia-600
//         via-indigo-600
//         to-emerald-500
//         bg-clip-text
//         text-transparent
//         drop-shadow-md
//         leading-snug
//         transition-all
//         duration-200
//         cursor-pointer"
//       style={{
//         willChange: "transform, textShadow",
//         lineHeight: 1.18, // important for iOS
//         wordBreak: "break-word",
//         letterSpacing: "0.005em",
//       }}
//     >
//       <span className="block">Moments that Inspire:</span>
//       <span className="block mt-2 sm:mt-4">
//         <motion.span
//           className="inline-block relative"
//           whileHover={{
//             scale: 1.07,
//             y: -4,
//             textShadow: "0 4px 24px #4f46e5aa, 0 0px 3px #10b981cc",
//           }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           Naipunayam Gallery
//           <span className="block w-full h-1 mt-1 rounded-lg bg-gradient-to-r from-fuchsia-400 to-emerald-400 opacity-70 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//         </motion.span>
//       </span>
//     </motion.h1>

//     {/* Subtitle */}
//     <motion.p
//       initial={{ opacity: 0, y: 16 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
//       className="max-w-xs sm:max-w-xl mt-3 text-center text-base sm:text-lg font-semibold px-2 sm:px-4 py-2 bg-gradient-to-r from-white/90 to-emerald-50/90 rounded-xl shadow-sm text-fuchsia-700 tracking-wide border border-fuchsia-100/40 mx-auto"
//       style={{
//         background: "linear-gradient(120deg,#f5f3ffcc,#e0f2f1cc 100%)",
//         boxShadow: "0 1px 12px 0 rgba(99,102,241,0.08)",
//         backdropFilter: "blur(4px)",
//         position: "relative",
//         overflow: "visible"
//       }}
//     >
//       Discover our journey in frames: events, stories,{" "}
//       <motion.span
//         whileHover={{
//           color: "#059669", // emerald-600
//           scale: 1.15,
//           textShadow: "0 2px 10px #10b981aa",
//         }}
//         className="font-bold text-emerald-600 transition-all duration-300 cursor-pointer underline decoration-emerald-400 decoration-2 underline-offset-4"
//       >
//         smiles
//       </motion.span>
//       , and change in action.
//     </motion.p>
//   </section>
// );

// export default GalleryComponentIntro;


import React from "react";
import { motion } from "framer-motion";
import { FaImages } from "react-icons/fa";

// Use safe breakpoints: base, sm, md, lg, xl (not xs unless you defined it)
const GalleryComponentIntro: React.FC = () => (
  <section
    className="w-full flex flex-col items-center pt-12 pb-10 bg-gradient-to-br from-rose-50 via-indigo-50 to-emerald-50"
    style={{
      minHeight: 260, // Plenty of room for any two lines!
      boxSizing: "border-box",
    }}
  >
    {/* Icon */}
    <motion.span
      initial={{ opacity: 0, scale: 0.7, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
      whileHover={{ scale: 1.17, rotate: 8, filter: "drop-shadow(0 0 8px #d946efbb)" }}
      className="mb-2 text-fuchsia-600"
      style={{ willChange: "transform, filter" }}
    >
      <FaImages className="text-3xl sm:text-5xl drop-shadow" />
    </motion.span>

    {/* Headline - NO animation for mobile, only on sm: and above */}
    <div className="w-full flex flex-col items-center">
      {/* Desktop/tablet: animated */}
      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        whileHover={{ scale: 1.03, textShadow: "0 6px 18px #a21caf40" }}
        className="hidden sm:block text-3xl md:text-5xl font-black text-center bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-md leading-snug transition-all duration-200 cursor-pointer"
        style={{
          willChange: "transform, textShadow",
          lineHeight: 1.18,
          wordBreak: "break-word",
          letterSpacing: "0.005em",
        }}
      >
        <span className="block">Moments that Inspire:</span>
        <span className="block mt-4">
          <motion.span
            className="inline-block relative"
            whileHover={{
              scale: 1.07,
              y: -4,
              textShadow: "0 4px 24px #4f46e5aa, 0 0px 3px #10b981cc",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Naipunayam Gallery
            <span className="block w-full h-1 mt-1 rounded-lg bg-gradient-to-r from-fuchsia-400 to-emerald-400 opacity-70 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </motion.span>
        </span>
      </motion.h1>
      {/* Mobile: no animation, always visible */}
      <h1
        className="block sm:hidden text-lg font-black text-center bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-md leading-tight"
        style={{
          lineHeight: 1.18,
          wordBreak: "break-word",
          letterSpacing: "0.005em",
        }}
      >
        <span className="block">Moments that Inspire:</span>
        <span className="block mt-2">Naipunayam Gallery</span>
      </h1>
    </div>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
      className="max-w-xs sm:max-w-xl mt-4 text-center text-base sm:text-lg font-semibold px-2 sm:px-4 py-2 bg-gradient-to-r from-white/90 to-emerald-50/90 rounded-xl shadow-sm text-fuchsia-700 tracking-wide border border-fuchsia-100/40 mx-auto"
      style={{
        background: "linear-gradient(120deg,#f5f3ffcc,#e0f2f1cc 100%)",
        boxShadow: "0 1px 12px 0 rgba(99,102,241,0.08)",
        backdropFilter: "blur(4px)",
        position: "relative",
      }}
    >
      Discover our journey in frames: events, stories,{" "}
      <motion.span
        whileHover={{
          color: "#059669", // emerald-600
          scale: 1.15,
          textShadow: "0 2px 10px #10b981aa",
        }}
        className="font-bold text-emerald-600 transition-all duration-300 cursor-pointer underline decoration-emerald-400 decoration-2 underline-offset-4"
      >
        smiles
      </motion.span>
      , and change in action.
    </motion.p>
  </section>
);

export default GalleryComponentIntro;
