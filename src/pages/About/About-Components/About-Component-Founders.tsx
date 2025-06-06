import { Users, Lightbulb, GraduationCap, HeartHandshake, ArrowRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";

// Helper to detect reduced motion
const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
    const handler = () => setReduced(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return reduced;
};

// Helper to detect mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

type AnimatedBackgroundShapesProps = {
  mouse: { x: number; y: number };
  reducedMotion: boolean;
  isMobile: boolean;
};

const AnimatedBackgroundShapes = ({ mouse, reducedMotion, isMobile }: AnimatedBackgroundShapesProps) => {
  // If reduced motion, animate blobs to center/fixed floating only
  const blobIdleAnim = (offsetX = 0, offsetY = 0, delay = 0) => ({
    x: [0, offsetX, 0, -offsetX, 0],
    y: [0, offsetY, 0, -offsetY, 0],
    scale: [1, 1.04, 1, 0.96, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }
  });

  // If reduced motion or mobile, no mouse-follow
  if (reducedMotion || isMobile) {
    return (
      <>
        {/* Blue Blob */}
        <motion.div
          className="absolute top-4 left-4 w-24 h-24 sm:w-36 sm:h-36 bg-cyan-100 rounded-full z-0 blur-2xl opacity-60 pointer-events-none"
          animate={blobIdleAnim(16, 20, 0)}
        />
        {/* Yellow Shape */}
        <motion.div
          className="absolute bottom-4 right-6 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-100 rounded-full z-0 blur-xl opacity-50 pointer-events-none"
          animate={blobIdleAnim(-12, 15, 2)}
        />
        {/* Pink Circle */}
        <motion.div
          className="absolute top-8 right-10 w-14 h-14 sm:w-20 sm:h-20 bg-pink-100 rounded-full z-0 blur-xl opacity-30 pointer-events-none"
          animate={blobIdleAnim(8, -12, 4)}
        />
      </>
    );
  }

  // Mouse-follow version for desktop and not reduced motion
  return (
    <>
      {/* Blue Blob */}
      <motion.div
        className="absolute top-4 left-4 w-24 h-24 sm:w-36 sm:h-36 bg-cyan-100 rounded-full z-0 blur-2xl opacity-60 pointer-events-none"
        animate={{
          x: Math.max(Math.min(mouse.x * 0.08, 32), -32),
          y: Math.max(Math.min(mouse.y * 0.10, 32), -32),
          scale: 1.04 + mouse.x * 0.0002,
          opacity: 0.5 + mouse.y * 0.0004,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 15 }}
      />
      {/* Yellow Shape */}
      <motion.div
        className="absolute bottom-4 right-6 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-100 rounded-full z-0 blur-xl opacity-50 pointer-events-none"
        animate={{
          x: Math.max(Math.min(mouse.x * -0.05, 24), -24),
          y: Math.max(Math.min(mouse.y * -0.07, 24), -24),
          scale: 1 + mouse.y * 0.0002,
          opacity: 0.4 + mouse.x * 0.0004,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 15 }}
      />
      {/* Pink Circle */}
      <motion.div
        className="absolute top-8 right-10 w-14 h-14 sm:w-20 sm:h-20 bg-pink-100 rounded-full z-0 blur-xl opacity-30 pointer-events-none"
        animate={{
          x: Math.max(Math.min(mouse.x * 0.02, 12), -12),
          y: Math.max(Math.min(mouse.y * -0.02, 12), -12),
          scale: 1 + mouse.x * 0.0001,
          opacity: 0.3 + mouse.y * 0.0002,
        }}
        transition={{ type: "spring", stiffness: 25, damping: 16 }}
      />
    </>
  );
};

const expertise = [
  {
    icon: Lightbulb,
    color: "text-yellow-400",
    label: "Engineering"
  },
  {
    icon: GraduationCap,
    color: "text-blue-500",
    label: "Education"
  },
  {
    icon: HeartHandshake,
    color: "text-pink-500",
    label: "Social Activism"
  }
];

const AboutComponentFounders = () => {
  // Track mouse position relative to the box (for animated shapes)
  const boxRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  // Throttle mousemove events for performance (20ms)
  const lastMove = useRef(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (prefersReducedMotion || isMobile) return;
    const now = Date.now();
    if (now - lastMove.current < 20) return;
    lastMove.current = now;
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMouse({ x, y });
    }
  };

  // For touch/mobile: center the animation
  useEffect(() => {
    if (isMobile || prefersReducedMotion) {
      setMouse({ x: 80, y: 80 });
    }
  }, [isMobile, prefersReducedMotion]);

  // UseMemo for expertise (not strictly necessary but clean)
  const expertiseList = useMemo(() => expertise, []);

  return (
    <section className="relative w-full flex flex-col justify-center items-center py-10 px-1 sm:py-16 sm:px-2 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-x-hidden overflow-y-visible">
      <motion.div
        ref={boxRef}
        className="relative w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl rounded-3xl bg-white/90 backdrop-blur-lg border-2 border-blue-100 shadow-2xl p-3 sm:p-6 md:p-10 flex flex-col items-center text-center min-h-[380px] sm:min-h-[420px] overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMouse({ x: 0, y: 0 })}
        // No onTouch needed, handled by useEffect
        initial={{ opacity: 0, scale: 0.96, y: 36 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ boxSizing: "border-box" }}
      >
        {/* Animated background shapes */}
        <AnimatedBackgroundShapes mouse={mouse} reducedMotion={prefersReducedMotion} isMobile={isMobile} />

        {/* Content above shapes */}
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Title */}
          <div className="flex items-center gap-3 px-4 py-3 mb-6 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-400 text-white font-extrabold text-2xl shadow">
            <Users className="w-8 h-8 text-white/80" />
            Our Founders
          </div>

          {/* Description */}
          {/* <motion.p
            className="text-base sm:text-lg text-gray-800 font-medium max-w-lg sm:max-w-2xl mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          > */}
          
          <motion.p
  className="
    text-base
    sm:text-lg
    text-gray-800
    font-medium
    mx-auto
    mb-8
    px-2
    max-w-2xl
    md:max-w-3xl
    lg:max-w-4xl
    xl:max-w-5xl
    2xl:max-w-6xl
    text-center
  "
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.15 }}
  viewport={{ once: true }}
>
            Founded by a group of dedicated engineers, educators, and social activists, Naipunayam Foundation is committed to bridging the gap between aspiration and opportunity for marginalized communities. Our founders bring diverse expertise in technology, education, and community development to drive impactful change.
          </motion.p>

          {/* Animated horizontal journey with interactive icons */}
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full max-w-full">
              {expertiseList.map((exp, idx) => {
                const Icon = exp.icon;
                const controls = useAnimation();

                // Subtle idle floating
                const idleAnim = {
                  y: [0, -6, 0, 6, 0],
                  rotate: [0, 3, 0, -3, 0],
                  filter: [
                    "drop-shadow(0 2px 12px rgba(59,130,246,0.08))",
                    "drop-shadow(0 4px 16px rgba(59,130,246,0.13))",
                    "drop-shadow(0 2px 12px rgba(59,130,246,0.08))",
                    "drop-shadow(0 0px 10px rgba(59,130,246,0.11))",
                    "drop-shadow(0 2px 12px rgba(59,130,246,0.08))"
                  ],
                  transition: {
                    duration: 3.2 + idx * 0.25,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                };

                // On hover/tap
                const handleHoverStart = () =>
                  controls.start({
                    scale: 1.22,
                    rotate: [0, 10, -10, 0],
                    filter: "drop-shadow(0 0 16px #38bdf8)",
                    transition: { duration: 0.45, type: "spring" }
                  });
                const handleHoverEnd = () =>
                  controls.start({
                    scale: 1,
                    rotate: 0,
                    filter: "drop-shadow(0 2px 12px rgba(59,130,246,0.08))",
                    transition: { duration: 0.32 }
                  });

                return (
                  <div key={idx} className="flex items-center mb-2">
                    <motion.div
                      className={`flex flex-col items-center bg-white rounded-2xl shadow-lg px-6 py-5 border-2 border-blue-100 cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-blue-400`}
                      whileHover={!prefersReducedMotion && !isMobile ? { boxShadow: "0 0 36px 0 rgba(59,130,246,0.16)" } : {}}
                      whileTap={!prefersReducedMotion && !isMobile ? { scale: 0.97 } : {}}
                      tabIndex={0}
                      role="button"
                      aria-label={exp.label}
                      onHoverStart={!prefersReducedMotion && !isMobile ? handleHoverStart : undefined}
                      onHoverEnd={!prefersReducedMotion && !isMobile ? handleHoverEnd : undefined}
                      onFocus={!prefersReducedMotion && !isMobile ? handleHoverStart : undefined}
                      onBlur={!prefersReducedMotion && !isMobile ? handleHoverEnd : undefined}
                      onKeyDown={e => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleHoverStart();
                          setTimeout(handleHoverEnd, 350);
                        }
                      }}
                    >
                      <motion.div
                        animate={controls}
                        initial={idleAnim}
                        whileInView={idleAnim}
                        viewport={{ once: false }}
                        className="flex items-center justify-center"
                      >
                        <Icon className={`w-10 h-10 ${exp.color} drop-shadow-md transition-transform`} />
                      </motion.div>
                      <span className="mt-2 font-semibold text-blue-800 text-base sm:text-lg">{exp.label}</span>
                    </motion.div>
                    {idx < expertiseList.length - 1 && (
                      <ArrowRight className="mx-2 w-7 h-7 text-blue-200 hidden sm:inline-block" />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="text-xs text-blue-500 mt-2 tracking-wide font-bold uppercase">Diverse backgrounds, one mission</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutComponentFounders;
