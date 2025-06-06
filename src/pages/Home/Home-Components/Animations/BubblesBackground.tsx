import React, { useEffect, useRef, useState } from "react";

// --- Bubble/Blurb Animation Keyframes ---
const bubbleKeyframes = `
@keyframes bubbleFloat1 { 0%{transform:translateY(0);} 35%{transform:translateY(-45px);} 70%{transform:translateY(0);} 100%{transform:translateY(0);} }
@keyframes bubbleFloat2 { 0%{transform:translateY(0);} 50%{transform:translateY(-65px);} 100%{transform:translateY(0);} }
@keyframes bubbleFloat3 { 0%{transform:translateY(0);} 30%{transform:translateY(-20px);} 80%{transform:translateY(-20px);} 100%{transform:translateY(0);} }
@keyframes bubbleFloat4 { 0%{transform:translateY(0);} 50%{transform:translateY(-80px);} 100%{transform:translateY(0);} }
@keyframes bubbleFloat5 { 0%{transform:translateY(0);} 40%{transform:translateY(-40px);} 100%{transform:translateY(0);} }
@keyframes blurbPulse1 { 0%,100%{transform:scale(1);} 40%{transform:scale(1.12) rotate(-2deg);} 70%{transform:scale(0.94) rotate(2deg);} }
@keyframes blurbPulse2 { 0%,100%{transform:scale(1);} 30%{transform:scale(1.07) rotate(3deg);} 75%{transform:scale(1.03) rotate(-3deg);} }
`;

type Bubble = {
  size: number;
  color: string;
  top: string;
  left: string;
  anim: string;
  opacity: number;
  isBlurb?: boolean; // for fancy shapes
  rotate?: number;
  blur?: number;
};

const BUBBLES: Bubble[] = [
  { size: 200, color: "#818cf8", top: "7%", left: "8%", anim: "bubbleFloat1", opacity: 0.21 },
  { size: 110, color: "#f472b6", top: "20%", left: "73%", anim: "bubbleFloat2", opacity: 0.18 },
  { size: 160, color: "#93c5fd", top: "38%", left: "83%", anim: "bubbleFloat3", opacity: 0.22 },
  { size: 140, color: "#6ee7b7", top: "59%", left: "14%", anim: "bubbleFloat4", opacity: 0.23 },
  { size: 120, color: "#facc15", top: "73%", left: "77%", anim: "bubbleFloat5", opacity: 0.16 },

  // Add some "blurbs" (oval, soft blur shapes, gradients)
  { size: 220, color: "linear-gradient(135deg,#c7d2fe 70%,#f3e8ff 100%)", top: "28%", left: "48%", anim: "blurbPulse1", opacity: 0.15, isBlurb: true, rotate: 17, blur: 18 },
  { size: 150, color: "linear-gradient(135deg,#a7f3d0 70%,#f3e8ff 100%)", top: "63%", left: "56%", anim: "blurbPulse2", opacity: 0.16, isBlurb: true, rotate: -21, blur: 16 },
];

export const BubblesBackground: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [maskPx, setMaskPx] = useState(0);
  const introRef = useRef<HTMLElement | null>(null);

  // Auto-detect intro section height (by ID or class)
  useEffect(() => {
    function updateMask() {
      // Try #home-intro, then .Home-Component-Intro, then first section
      let introEl = document.getElementById("home-intro") as HTMLElement
        || document.querySelector(".Home-Component-Intro") as HTMLElement
        || document.querySelector("section") as HTMLElement;
      introRef.current = introEl;
      setMaskPx(introEl ? introEl.offsetHeight : 0);
    }
    updateMask();
    window.addEventListener("resize", updateMask);
    return () => window.removeEventListener("resize", updateMask);
  }, []);

  // Mouse parallax
  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMouse({ x, y });
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const getBubbleTranslate = (idx: number) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const factor = isMobile ? 7 : 20;
    return {
      transform: `translate3d(${mouse.x * factor * (idx % 2 === 0 ? 1 : -1)}px,${mouse.y * factor * (idx % 3 === 0 ? 1 : -1)}px,0)`
    };
  };

  return (
    <>
      <style>{bubbleKeyframes}</style>
      <div
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
        aria-hidden
        style={{
          overflow: "hidden",
          // Dynamically mask the area above the intro section
          maskImage: maskPx
            ? `linear-gradient(to bottom, transparent 0px, transparent ${maskPx - 8}px, black ${maskPx + 24}px, black 100%)`
            : undefined,
          WebkitMaskImage: maskPx
            ? `linear-gradient(to bottom, transparent 0px, transparent ${maskPx - 8}px, black ${maskPx + 24}px, black 100%)`
            : undefined
        }}
      >
        {BUBBLES.map((bubble, idx) => (
          <span
            key={idx}
            style={{
              position: "absolute",
              top: bubble.top,
              left: bubble.left,
              width: bubble.size,
              height: bubble.isBlurb ? bubble.size * 0.58 : bubble.size,
              opacity: bubble.opacity,
              borderRadius: bubble.isBlurb ? "50% 43% 56% 47% / 54% 45% 52% 48%" : "50%",
              background: bubble.color,
              zIndex: 1,
              filter: `blur(${bubble.blur || 8}px)`,
              animation: `${bubble.anim} ${7 + idx * 2}s ${idx % 2 ? "0.3s" : "0s"} ease-in-out infinite`,
              ...getBubbleTranslate(idx),
              transition: "transform 0.32s cubic-bezier(0.55,0,0.1,1)",
              transform: `${getBubbleTranslate(idx).transform} ${bubble.rotate ? `rotate(${bubble.rotate}deg)` : ""}`,
            }}
          />
        ))}
      </div>
    </>
  );
};
