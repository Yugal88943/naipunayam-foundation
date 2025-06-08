import {
  Users,
  Lightbulb,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Reduced motion preference hook
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

// Mobile detection hook
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

type MousePosition = { x: number; y: number };

interface AnimatedBackgroundShapesProps {
  mouse: MousePosition;
  reducedMotion: boolean;
  isMobile: boolean;
}

const AnimatedBackgroundShapes = ({ mouse, reducedMotion, isMobile }: AnimatedBackgroundShapesProps) => {
  const blobIdleAnim = (offsetX = 0, offsetY = 0, delay = 0) => ({
    x: [0, offsetX, 0, -offsetX, 0],
    y: [0, offsetY, 0, -offsetY, 0],
    scale: [1, 1.04, 1, 0.96, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  });

  if (reducedMotion || isMobile) {
    return (
      <>
        <motion.div className="absolute top-4 left-4 w-24 h-24 sm:w-36 sm:h-36 bg-cyan-100 rounded-full z-0 blur-2xl opacity-60 pointer-events-none" animate={blobIdleAnim(16, 20, 0)} />
        <motion.div className="absolute bottom-4 right-6 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-100 rounded-full z-0 blur-xl opacity-50 pointer-events-none" animate={blobIdleAnim(-12, 15, 2)} />
        <motion.div className="absolute top-8 right-10 w-14 h-14 sm:w-20 sm:h-20 bg-pink-100 rounded-full z-0 blur-xl opacity-30 pointer-events-none" animate={blobIdleAnim(8, -12, 4)} />
      </>
    );
  }

  return (
    <>
      <motion.div className="absolute top-4 left-4 w-24 h-24 sm:w-36 sm:h-36 bg-cyan-100 rounded-full z-0 blur-2xl opacity-60 pointer-events-none" animate={{ x: Math.max(Math.min(mouse.x * 0.08, 32), -32), y: Math.max(Math.min(mouse.y * 0.1, 32), -32), scale: 1.04 + mouse.x * 0.0002, opacity: 0.5 + mouse.y * 0.0004 }} transition={{ type: "spring", stiffness: 30, damping: 15 }} />
      <motion.div className="absolute bottom-4 right-6 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-100 rounded-full z-0 blur-xl opacity-50 pointer-events-none" animate={{ x: Math.max(Math.min(mouse.x * -0.05, 24), -24), y: Math.max(Math.min(mouse.y * -0.07, 24), -24), scale: 1 + mouse.y * 0.0002, opacity: 0.4 + mouse.x * 0.0004 }} transition={{ type: "spring", stiffness: 30, damping: 15 }} />
      <motion.div className="absolute top-8 right-10 w-14 h-14 sm:w-20 sm:h-20 bg-pink-100 rounded-full z-0 blur-xl opacity-30 pointer-events-none" animate={{ x: Math.max(Math.min(mouse.x * 0.02, 12), -12), y: Math.max(Math.min(mouse.y * -0.02, 12), -12), scale: 1 + mouse.x * 0.0001, opacity: 0.3 + mouse.y * 0.0002 }} transition={{ type: "spring", stiffness: 25, damping: 16 }} />
    </>
  );
};

const expertise = [
  { icon: Lightbulb, color: "text-yellow-400", label: "Engineering" },
  { icon: GraduationCap, color: "text-blue-500", label: "Education" },
  { icon: HeartHandshake, color: "text-pink-500", label: "Social Activism" },
];

const AboutComponentFounders = () => {
  const boxRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const lastMove = useRef(0);

  interface MouseEventWithClient extends React.MouseEvent<HTMLDivElement, MouseEvent> {
    clientX: number;
    clientY: number;
  }

  interface BoxRefType {
    getBoundingClientRect: () => DOMRect;
  }

  const handleMouseMove = (e: MouseEventWithClient) => {
    if (prefersReducedMotion || isMobile) return;
    const now = Date.now();
    if (now - lastMove.current < 20) return;
    lastMove.current = now;
    if (boxRef.current && (boxRef.current as unknown as BoxRefType).getBoundingClientRect) {
      const rect = (boxRef.current as unknown as BoxRefType).getBoundingClientRect();
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  useEffect(() => {
    if (isMobile || prefersReducedMotion) {
      setMouse({ x: 80, y: 80 });
    }
  }, [isMobile, prefersReducedMotion]);

  return (
    <section className="relative w-full flex flex-col items-center py-10 px-1 sm:py-16 sm:px-2 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden">
      <motion.div
        ref={boxRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMouse({ x: 0, y: 0 })}
        className="relative w-full max-w-5xl rounded-3xl bg-white/90 backdrop-blur-lg border-2 border-blue-100 shadow-2xl p-6 sm:p-10 flex flex-col items-center text-center min-h-[400px]"
        initial={{ opacity: 0, scale: 0.96, y: 36 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <AnimatedBackgroundShapes mouse={mouse} reducedMotion={prefersReducedMotion} isMobile={isMobile} />
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="flex items-center gap-3 px-4 py-3 mb-6 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-400 text-white font-extrabold text-2xl shadow">
            <Users className="w-8 h-8 text-white/80" />
            Our Founders
          </div>
          <motion.p
            className="text-base sm:text-lg text-gray-800 font-medium mx-auto mb-8 px-2 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            Founded by a group of dedicated engineers, educators, and social activists, Naipunayam Foundation is committed to bridging the gap between aspiration and opportunity for marginalized communities.
          </motion.p>

          <div className="w-full flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {expertise.map((exp, idx) => {
                const Icon = exp.icon;
                const controls = useAnimation();

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

                const onHover = () => controls.start({
                  scale: 1.22,
                  rotate: [0, 10, -10, 0],
                  filter: "drop-shadow(0 0 16px #38bdf8)",
                  transition: { duration: 0.45, type: "spring" }
                });

                const onUnhover = () => controls.start({
                  scale: 1,
                  rotate: 0,
                  filter: "drop-shadow(0 2px 12px rgba(59,130,246,0.08))",
                  transition: { duration: 0.32 }
                });

                return (
                  <div key={idx} className="flex items-center mb-2">
                    <motion.div
                      className="flex flex-col items-center bg-white rounded-2xl shadow-lg px-6 py-5 border-2 border-blue-100 cursor-pointer"
                      whileHover={!prefersReducedMotion && !isMobile ? { boxShadow: "0 0 36px rgba(59,130,246,0.16)" } : {}}
                      whileTap={!prefersReducedMotion && !isMobile ? { scale: 0.97 } : {}}
                      tabIndex={0}
                      role="button"
                      aria-label={exp.label}
                      onHoverStart={onHover}
                      onHoverEnd={onUnhover}
                      onFocus={onHover}
                      onBlur={onUnhover}
                      onKeyDown={e => (["Enter", " "].includes(e.key) && onHover())}
                    >
                      <motion.div animate={controls} initial={idleAnim} whileInView={idleAnim} viewport={{ once: false }}>
                        <Icon className={`w-10 h-10 ${exp.color}`} />
                      </motion.div>
                      <span className="mt-2 font-semibold text-blue-800 text-base sm:text-lg">{exp.label}</span>
                    </motion.div>
                    {idx < expertise.length - 1 && (
                      <ArrowRight className="mx-2 w-7 h-7 text-blue-200 hidden sm:inline-block" />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="text-xs text-blue-500 mt-2 tracking-wide font-bold uppercase">
              Diverse backgrounds, one mission
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutComponentFounders;
