// // HanzaSComponentIntro.tsx

// import React from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// const sections = [
//   {
//     title: 'About HansaZ',
//     // desc: 'HanzaS isn\'t just fashion — it\'s a commitment to <strong>sustainable luxury</strong>. We blend <em>elegance</em> with <em>ethics</em> by producing globally while honoring <strong>mindful practices</strong>. Every piece we create tells a story of <em>refined responsibility</em>.',
   
   
//     desc: `HanzaS began in 2011 in a small village in Rajasthan, when a mother and daughter, facing
// deep poverty and societal restrictions, turned to their heritage—handmade textiles and local
// crafts—for survival and dignity. Defying norms that silenced women, they began trading
// handcrafted goods, eventually building a thriving business rooted in resilience and purpose.
// As HanzaS grew, it became a platform to uplift other women artisans, preserving centuries-
// old crafts while creating livelihoods. Today, the brand supports over 200 artisans and 100
// vendors, with expansion into Himachal Pradesh and customers across the U.S., Europe, and
// Australia.
// Each HanzaS product carries a story of empowerment, tradition, and unity—connecting
// communities globally through the shared language of craftsmanship. Choosing HanzaS
// means joining a movement that celebrates heritage, uplifts women, and weaves hope into
// every thread.`,
    
    
    
    
//     bg: 'from-slate-50 via-blue-50 to-emerald-50'
//   },
//   {
//     title: 'Empowerment in Action',
//     desc: 'HanzaS <strong>empowers women</strong> through <em>purposeful craftsmanship</em>. By creating jobs and nurturing artisan talent, we don\'t just produce — we <strong>uplift communities</strong> with every stitch.',
//     bg: 'from-slate-50 via-blue-50 to-emerald-50'
//   },
//   {
//     title: 'Beyond Trends',
//     desc: 'We defy sustainable with <strong>timeless design</strong> and <em>mindful creation</em>. Every collection is crafted to last — inspiring a future where <strong>luxury supports both people and planet</strong>.',
//     bg: 'from-slate-50 via-blue-50 to-emerald-50'
//   },
//   {
//     title: 'Purpose Woven In',
//     // desc: '<strong>Purposefully handcrafted.</strong> <em>Proudly worn.</em> This is fashion with a mission — <strong>elegant, ethical, enduring</strong>',
// desc: `At HanzaS, we champion sustainable fashion through a thoughtfully curated range of eco-friendly and organic materials, including raw silk, banana and lotus silk, organic cotton, hemp, Pashmina, and handwoven textiles. Our collections are enriched with traditional artistry such as Kantha, Phulkari, Bandhani, Ikat, Kalamkari, and hand block prints. 

// Beyond fashion, we celebrate India’s rich heritage through a diverse array of handcrafted items—from bamboo and cane products to terracotta pottery, wooden carvings, silver jewelry, antiques, and metalwork. Every piece reflects the skill of local artisans, offering a unique blend of authenticity, elegance, and sustainability for both wardrobe and home.`,

//     bg: 'from-slate-50 via-blue-50 to-emerald-50'
//   }
// ];

// const HanzaSComponentIntro: React.FC = () => {
//   const { scrollYProgress } = useScroll();
//   const zoom = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
//   const zoomSpring = useSpring(zoom, { stiffness: 100, damping: 18, mass: 0.5 });

//   return (
//     <div className="w-full font-sans text-gray-900 snap-y snap-mandatory bg-gray-800">
//       <style>
//         {`
//           strong { color: #4f46e5; font-weight: 700; }
//           em { color: #9333ea; font-style: normal; font-weight: 500; }
//         `}
//       </style>
//       {sections.map((section, index) => (
//         <motion.section
//           key={index}
//           className={`snap-start min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-10 sm:py-20 relative overflow-hidden bg-gradient-to-br ${section.bg}`}
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.4 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//         >
//           <div className="absolute inset-0 z-0 overflow-hidden">
//             <motion.div
//               className="absolute w-[80vw] h-[80vw] bg-white rounded-full blur-xl opacity-5 hidden md:block"
//               initial={{ scale: 0.8, y: 100 }}
//               whileInView={{ scale: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.5 }}
//               transition={{ duration: 1.5, ease: 'easeInOut' }}
//             />
//             <motion.div
//               className="absolute bottom-0 right-0 w-48 h-48 border-t-2 border-l-2 border-gray-300 rotate-12 opacity-30 hidden md:block"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: false, amount: 0.5 }}
//               transition={{ delay: 0.6, duration: 1 }}
//             />
//           </div>

//           <motion.div
//             className="max-w-4xl text-center z-10 md:scale-[1.05] md:hover:scale-[1.1] transition-transform duration-700"
//             style={{ scale: zoomSpring }}
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ duration: 1, ease: 'easeOut' }}
//           >
//             <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mb-6">
//               {section.title && (
//                 <motion.h2
//   className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-indigo-900 text-center hover:drop-shadow-[0_5px_20px_rgba(124,58,237,0.3)] transition-shadow duration-500"
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: false, amount: 0.5 }}
//   transition={{ duration: 1 }}
// >
//   <motion.span
//     initial={{ opacity: 0, y: -10 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//     viewport={{ once: true }}
//     whileHover={{ x: 4, y: -2 }}
//     className="inline-block mr-2 text-purple-500 drop-shadow-lg"
//   >⚡</motion.span>
//   {section.title}
//   <motion.span
//     initial={{ opacity: 0, y: 10 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8, delay: 0.1 }}
//     viewport={{ once: true }}
//     whileHover={{ x: -4, y: 2 }}
//     className="inline-block ml-2 text-purple-500 drop-shadow-lg"
//   >⚡</motion.span>
// </motion.h2>
//               )}
//             </div>

//             <motion.p
//               className="font-serif pt-6 text-2xl sm:text-xl md:text-4xl lg:text-4xl italic text-gray-800 leading-relaxed text-center sm:text-left md:text-center"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.5 }}
//               transition={{ duration: 1.2, delay: 0.2 }}
//               dangerouslySetInnerHTML={{ __html: section.desc }}
//             />

//             {index === 3 && (
//               <motion.a
//                 href="https://thehanzas.com/" target="_blank" rel="noopener noreferrer" 
//                 className="mt-8 inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-white/20 backdrop-blur-sm"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: false, amount: 0.5 }}
//                 transition={{ duration: 0.8, ease: 'easeOut' }}
//               >
//                 Visit HansaZ Website
//               </motion.a>
//             )}
//           </motion.div>

//           <motion.div
//             className="w-24 h-1 bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-400 rounded-full my-12 opacity-70 shadow-md animate-pulse"
//             initial={{ opacity: 0, scaleX: 0 }}
//             whileInView={{ opacity: 1, scaleX: 1 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: false }}
//             style={{ transformOrigin: 'left' }}
//           />
//         </motion.section>
//       ))}
//     </div>
//   );
// };

// export default HanzaSComponentIntro;




// HanzaSComponentIntro.tsx

import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const sections = [
  {
    title: 'About HansaZ',
    desc: [
      `HanzaS began in 2011 in a small village in Rajasthan, when a mother and daughter, facing deep poverty and societal restrictions, turned to their heritage — handmade textiles and local crafts — for survival and dignity.`,
      `Defying norms that silenced women, they began trading handcrafted goods, eventually building a thriving business rooted in resilience and purpose.`,
      `As HanzaS grew, it became a platform to uplift other women artisans, preserving centuries-old crafts while creating livelihoods. Today, the brand supports over 200 artisans and 100 vendors, with expansion into Himachal Pradesh and customers across the U.S., Europe, and Australia.`,
      `Each HanzaS product carries a story of empowerment, tradition, and unity — connecting communities globally through the shared language of craftsmanship. Choosing HanzaS means joining a movement that celebrates heritage, uplifts women, and weaves hope into every thread.`
    ],
    bg: 'from-slate-50 via-blue-50 to-emerald-50'
  },
  {
    title: 'Empowerment in Action',
    desc: [
      `HanzaS empowers women through purposeful craftsmanship. By creating jobs and nurturing artisan talent, we don't just produce — we uplift communities with every stitch.`
    ],
    bg: 'from-slate-50 via-blue-50 to-emerald-50'
  },
  {
    title: 'Beyond Trends',
    desc: [
      `We defy fast fashion with timeless design and mindful creation. Every collection is crafted to last — inspiring a future where luxury supports both people and planet.`
    ],
    bg: 'from-slate-50 via-blue-50 to-emerald-50'
  },
  {
    title: 'Purpose Woven In',
    desc: [
      `At HanzaS, we champion sustainable fashion through a thoughtfully curated range of eco-friendly and organic materials — raw silk, banana and lotus silk, organic cotton, hemp, Pashmina, and handwoven textiles.`,
      `Our collections are enriched with traditional artistry such as Kantha, Phulkari, Bandhani, Ikat, Kalamkari, and hand block prints.`,
      `Beyond fashion, we celebrate India’s rich heritage through a diverse array of handcrafted items — from bamboo and cane products to terracotta pottery, wooden carvings, silver jewelry, antiques, and metalwork.`,
      `Every piece reflects the skill of local artisans, offering a unique blend of authenticity, elegance, and sustainability for both wardrobe and home.`
    ],
    bg: 'from-slate-50 via-blue-50 to-emerald-50'
  }
];

const HanzaSComponentIntro: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const zoom = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const zoomSpring = useSpring(zoom, { stiffness: 100, damping: 18, mass: 0.5 });

  return (
    <div className="w-full font-sans text-gray-900 snap-y snap-mandatory bg-gray-800">
      <style>
        {`
          strong { color: #4f46e5; font-weight: 700; }
          em { color: #9333ea; font-style: normal; font-weight: 500; }
        `}
      </style>

      {sections.map((section, index) => (
        <motion.section
          key={index}
          className={`snap-start min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-20 py-12 sm:py-20 relative overflow-hidden bg-gradient-to-br ${section.bg}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Decorative BG */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
              className="absolute w-[80vw] h-[80vw] bg-white rounded-full blur-xl opacity-5 hidden md:block"
              initial={{ scale: 0.8, y: 100 }}
              whileInView={{ scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-48 h-48 border-t-2 border-l-2 border-gray-300 rotate-12 opacity-30 hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 1 }}
            />
          </div>

          {/* Content */}
          <motion.div
            className="max-w-3xl text-center z-10 md:scale-[1.05] md:hover:scale-[1.1] transition-transform duration-700"
            style={{ scale: zoomSpring }}
          >
            {/* Title */}
            <motion.h2
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-indigo-900 text-center hover:drop-shadow-[0_5px_20px_rgba(124,58,237,0.3)] transition-shadow duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.span className="inline-block mr-2 text-purple-500 drop-shadow-lg" whileHover={{ x: 4, y: -2 }}>⚡</motion.span>
              {section.title}
              <motion.span className="inline-block ml-2 text-purple-500 drop-shadow-lg" whileHover={{ x: -4, y: 2 }}>⚡</motion.span>
            </motion.h2>

            {/* Paragraphs */}
            <div className="mt-8 space-y-6 text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto text-center ">
              {section.desc.map((para, i) => (
                <motion.p
                  key={i}
                  className="italic"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* CTA Button */}
            {index === 3 && (
              <motion.a
                href="https://thehanzas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-white/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                Visit HanzaS Website
              </motion.a>
            )}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-400 rounded-full my-12 opacity-70 shadow-md animate-pulse"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.section>
      ))}
    </div>
  );
};

export default HanzaSComponentIntro;
