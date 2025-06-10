import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { TechAnimation, FashionAnimation, StudyAnimation } from './Animations/Tech-Fashion-Study-Animations';
import { Link } from 'react-router-dom';
import logo from "@/assets/Logo-Naipunayam/logo.webp";
export default function HomeComponentIntro() {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [showSubtitle, setShowSubtitle] = useState<boolean>(false);
  const [showCurtain, setShowCurtain] = useState<boolean>(() => !sessionStorage.getItem('curtainShown'));

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [30, -30]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-30, 30]);
  const backgroundPosition = useTransform(mouseX, [0, window.innerWidth], ['0% 0%', '100% 100%']);

  useEffect(() => {
    const interval = setInterval(() => {
      animate(mouseX, Math.random() * window.innerWidth);
      animate(mouseY, Math.random() * window.innerHeight);
    }, 3000);
    return () => clearInterval(interval);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (showCurtain) {
      const timer = setTimeout(() => {
        setShowCurtain(false);
        sessionStorage.setItem('curtainShown', 'true');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showCurtain]);

  const Bubble: React.FC<{ size: number; className: string; color: string }> = ({ size, className, color }) => (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{ width: size, height: size, backgroundColor: color, opacity: 0.4 }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
    />
  );

  const sections = [
    {
      title: 'Empowering India',
      subtitle: 'One Step at a Time',
      description: 'Join us in building a brighter, more inclusive future across Himachal Pradesh and beyond.',
      button: 'Vihaas Design Technologies',
      href: '/initiatives/vihaas-design-technologies',
      animation: 'slide',
      style: {
        backgroundImage: 'linear-gradient(270deg, #001f3f, #003f7f, #005fff)',
        titleGradient: 'bg-gradient-to-r from-white to-gray-200',
        subtitleGradient: 'bg-gradient-to-r from-cyan-300 to-cyan-200',
        buttonGradient: 'from-cyan-400 to-cyan-300',
        hoverGradient: 'from-cyan-500 to-cyan-400',
        buttonText: 'text-sky-900',
        backgroundAnimation: (
          <>
            <TechAnimation rotateX={rotateX} rotateY={rotateY} showSubtitle={showSubtitle} />
            <Bubble size={140} className="top-[15%] left-[20%]" color="#fff" />
            <Bubble size={100} className="top-[45%] right-[15%]" color="#f0f0f0" />
            <Bubble size={80} className="bottom-[20%] left-[10%]" color="#e0e0e0" />
          </>
        ),
      },
    },
    {
      title: 'Empowering Women',
      subtitle: 'Through Education',
      description: 'Join our mission to uplift women through education and skill development.',
      button: 'HanzaS',
      href: '/initiatives/hanzaS',
      animation: 'zoom',
      style: {
        backgroundImage: 'linear-gradient(270deg, #4f1d41, #6b1e4c, #8a1f59)',
        titleGradient: 'bg-gradient-to-r from-white to-gray-200',
        subtitleGradient: 'bg-gradient-to-r from-cyan-300 to-cyan-200',
        buttonGradient: 'from-pink-200 to-rose-200',
        hoverGradient: 'from-cyan-500 to-cyan-400',
        buttonText: 'text-pink-900',
        backgroundAnimation: (
          <>
            <FashionAnimation rotateX={rotateX} rotateY={rotateY} showSubtitle={showSubtitle} />
            <Bubble size={130} className="top-[20%] left-[25%]" color="#fff" />
            <Bubble size={110} className="bottom-[25%] right-[18%]" color="#f0f0f0" />
            <Bubble size={90} className="top-[60%] left-[8%]" color="#e0e0e0" />
          </>
        ),
      },
    },
    {
      title: 'Technology for All',
      subtitle: 'Accessible Innovation',
      description: 'Bringing technology to underprivileged communities for a brighter future.',
      button: 'Vihaas Tech Pro',
      href: '/initiatives/vihaas-tech-pro',
      animation: 'fade',
      style: {
        backgroundImage: 'linear-gradient(270deg, #2d0b3f, #3f1270, #5121a8)',
        titleGradient: 'bg-gradient-to-r from-white to-gray-200',
        subtitleGradient: 'bg-gradient-to-r from-cyan-300 to-cyan-200',
        buttonGradient: 'from-fuchsia-200 to-purple-200',
        hoverGradient: 'from-cyan-500 to-cyan-400',
        buttonText: 'text-purple-900',
        backgroundAnimation: (
          <>
            <StudyAnimation rotateX={rotateX} rotateY={rotateY} showSubtitle={showSubtitle} />
            <Bubble size={120} className="top-[18%] right-[22%]" color="#fff" />
            <Bubble size={95} className="top-[50%] left-[15%]" color="#f0f0f0" />
            <Bubble size={85} className="bottom-[10%] right-[10%]" color="#e0e0e0" />
          </>
        ),
      },
    },
  ];

  useEffect(() => {
    setShowSubtitle(false);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 800);
    const changeTimer = setTimeout(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 800 + sections[activeSection].subtitle.length * 80 + 2000);
    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(changeTimer);
    };
  }, [activeSection]);

  const { title, subtitle, description, button, href, animation, style } = sections[activeSection];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[100vh] overflow-hidden px-4 md:px-10 py-24 flex items-center justify-center text-gray-50 transition-all duration-700"
    >
      {showCurtain && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: ['-100%', '0%', '-120%'] }}
          transition={{ duration: 5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-gradient-to-b from-zinc-100 via-gray-200 to-gray-300 flex items-center justify-center"
        >
          {/* <motion.img
            src="/src/assets/Logo-Naipunayam/logo.png"
            alt="Naipunayam Logo"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.1, 1], opacity: 1 }}
            transition={{ duration: 4, ease: 'easeInOut' }}
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[280px] xl:w-[300px]"
          /> */}
          
          <motion.img
            src={logo}
            alt="Naipunayam Logo"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.1, 1], opacity: 1 }}
            transition={{ duration: 4, ease: 'easeInOut' }}
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[280px] xl:w-[300px]"
          />
        </motion.div>
      )}

      <motion.div
        className="absolute inset-0 z-0 pointer-events-none animate-[gradientShift_15s_ease-in-out_infinite]"
        style={{
          backgroundImage: style.backgroundImage,
          backgroundSize: '300% 300%',
          backgroundPosition: backgroundPosition,
        }}
      />

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {style.backgroundAnimation}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          key={title + subtitle}
          initial={{ opacity: 0, y: animation === 'slide' ? 40 : 0, scale: animation === 'zoom' ? 0.95 : 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-serif text-3xl md:text-5xl font-extrabold leading-tight tracking-wide text-gray-50 drop-shadow-lg"
        >
          <span className={`bg-clip-text ${style.titleGradient} text-transparent block pb-1 leading-[1.2]`}>
            {title}
          </span>
          <div className="w-24 h-1 bg-gray-100 mx-auto my-4 rounded-sm opacity-75"></div>
          {showSubtitle && (
            <span className={`bg-clip-text ${style.subtitleGradient} text-transparent block mt-2 leading-[1.2]`}>
              <Typewriter words={[subtitle]} loop={false} typeSpeed={80} deleteSpeed={0} delaySpeed={2000} />
            </span>
          )}
        </motion.h1>

        <motion.p
          key={description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-base md:text-lg text-gray-100 max-w-2xl mx-auto font-semibold italic leading-relaxed tracking-wide"
        >
          {description}
        </motion.p>

        {/* ✅ REPLACED motion.a WITH Link + motion.div */}
        <Link to={href}>
          <motion.div
            key={button}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.1,
              background: `linear-gradient(90deg, ${style.hoverGradient})`,
              boxShadow: '0px 0px 20px rgba(255,255,255,0.3)',
            }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className={`inline-block mt-10 ${style.buttonText} font-semibold py-3 px-8 rounded-full bg-gradient-to-r ${style.buttonGradient} shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-2xl`}
          >
            {button}
          </motion.div>
        </Link>
      </div>
    </section>
  );
}



