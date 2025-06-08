
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaBook, FaHeart, FaUsers } from 'react-icons/fa';
import image1 from '@/assets/Home-Section/home-section-about-1.jpg';
import image2 from '@/assets/Home-Section/home-section-about-2.png';
import image3 from '@/assets/Home-Section/home-section-about-3.png';
import { isAppleDevice } from './isAppleDevice';

type ContentBlock = {
  text: string;
  img: string;
  textColor: string;
  icon: React.ReactNode;
};

export default function HomeComponentAbout() {
  const [isApple, setIsApple] = useState(false);

  useEffect(() => {
    setIsApple(isAppleDevice());
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const content: ContentBlock[] = [
    {
      text: `Nestled in the serene hills of Solan, Himachal Pradesh, Naipunayam Foundation is a non-profit trust committed to nurturing potential, empowering lives, and transforming communities. With a resolute belief in the power of education and skill-building, the Foundation works tirelessly to uplift youth and women through comprehensive training, awareness, and empowerment programs.`,
      img: image1,
      textColor: 'text-blue-800',
      icon: <FaBook className="inline mr-2 text-blue-500" />,
    },
    {
      text: `At Naipunayam, we envision a society where every young individual has the opportunity to learn, grow, and lead—and where every woman has the tools, confidence, and support to shape her own future. From vocational training and career development workshops to literacy drives and self-reliance initiatives, our programs are designed to spark change at the grassroots level.`,
      img: image2,
      textColor: 'text-green-800',
      icon: <FaHeart className="inline mr-2 text-green-600" />,
    },
    {
      text: `More than just an organization, Naipunayam Foundation is a movement—a collective effort to ignite dreams, instill dignity, and inspire progress. We believe that with the right guidance and opportunities, individuals can rise above limitations and become agents of change in their own lives and communities.`,
      img: image3,
      textColor: 'text-purple-800',
      icon: <FaUsers className="inline mr-2 text-purple-600" />,
    },
  ];

  const AnimatedImageBlock = ({ block, idx }: { block: ContentBlock; idx: number }) => (
    <Tilt
      tiltEnable={!isApple}
      glareEnable={!isApple}
      tiltMaxAngleX={isApple ? 0 : 9}
      tiltMaxAngleY={isApple ? 0 : 9}
      glareMaxOpacity={0.22}
      className="mb-8"
      style={{ borderRadius: '1.25rem', overflow: 'hidden', backfaceVisibility: 'hidden' }}
    >
      <motion.div
        whileHover={isApple ? {} : { scale: 1.04, rotate: 1 }}
        transition={{ type: 'spring', stiffness: 180 }}
        className="relative group overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md shadow-md transition-all duration-300"
        tabIndex={0}
      >
        <motion.img
          src={block.img}
          alt={`About block ${idx}`}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-300"
          loading="lazy"
          style={{
            willChange: isApple ? 'auto' : 'transform',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            visibility: 'visible',
            display: 'block',
          }}
        />
        {!isApple && (
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-2xl border-4 border-transparent"
            whileHover={{ borderColor: '#818cf8', boxShadow: '0 0 28px 5px #818cf85a' }}
            transition={{ duration: 0.4 }}
          />
        )}
      </motion.div>
    </Tilt>
  );

  const AnimatedTextBlock = ({ block }: { block: ContentBlock; idx: number }) => (
    <motion.div
      whileHover={isApple ? {} : { y: -8, scale: 1.03, boxShadow: '0 8px 38px 0 rgba(59,130,246,0.10)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group flex-1 flex items-stretch mb-8"
      tabIndex={0}
    >
      <div className="bg-white/90 shadow-xl rounded-2xl p-6 md:p-8 border border-blue-200 hover:shadow-2xl hover:border-blue-400 hover:bg-blue-50 min-h-[180px] w-full flex flex-col justify-center relative overflow-visible">
       
       
        {/* <motion.p className={`${block.textColor} italic font-medium font-serif text-lg md:text-xl leading-relaxed tracking-wide text-justify transition-colors duration-200 group-hover:opacity-80`}>
          {block.icon}
          {block.text}
          {!isApple && (
            <motion.span className="block h-0.5 bg-gradient-to-r from-blue-300 via-green-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-2" />
          )}
        </motion.p>
         */}
         <motion.div className="text-center transition-all duration-300 group-hover:opacity-90">
  <p className={`${block.textColor} italic font-medium font-serif text-lg md:text-xl leading-loose md:leading-relaxed tracking-wide px-2 sm:px-4`}>
    <span className="block mb-4 text-3xl">{block.icon}</span>
    {block.text}
  </p>
  {!isApple && (
    <motion.span className="mx-auto block h-0.5 w-24 bg-gradient-to-r from-blue-300 via-green-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 mt-5" />
  )}
</motion.div>

         
      </div>
    </motion.div>
  );

  return (
    // <section className="relative w-full bg-white py-20 px-6 sm:px-10 md:px-20 lg:px-32 overflow-hidden">
    <section className="relative w-full bg-[#f9f9f9] py-20 px-6 sm:px-10 md:px-20 lg:px-32 overflow-hidden">

   
   <div className="max-w-7xl mx-auto flex flex-col z-10 relative">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-extrabold text-gray-900 mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          About Naipunayam Foundation
        </motion.h2>

        <motion.div
          className="mx-auto my-10 w-32 h-2 rounded-full bg-gradient-to-r from-indigo-300 to-purple-400"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        <div className="hidden xl:grid xl:grid-cols-2 xl:gap-x-10 xl:items-stretch">
          <div className="flex flex-col gap-y-8 justify-stretch h-full">
            {content.map((block, idx) =>
              idx % 2 === 0 ? (
                <AnimatedImageBlock key={idx} block={block} idx={idx} />
              ) : (
                <AnimatedTextBlock key={idx} block={block} idx={idx} />
              )
            )}
          </div>
          <div className="flex flex-col gap-y-8 justify-stretch h-full">
            {content.map((block, idx) =>
              idx % 2 !== 0 ? (
                <AnimatedImageBlock key={idx} block={block} idx={idx} />
              ) : (
                <AnimatedTextBlock key={idx} block={block} idx={idx} />
              )
            )}
          </div>
        </div>

        <div className="xl:hidden">
          {content.map((block, idx) => (
            <div key={idx} className="mb-10">
              <AnimatedImageBlock block={block} idx={idx} />
              <AnimatedTextBlock block={block} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
