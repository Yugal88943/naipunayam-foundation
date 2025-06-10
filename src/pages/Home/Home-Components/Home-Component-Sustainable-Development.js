import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHandsHelping, FaSeedling, FaHandshake, FaRegLightbulb, FaHandHoldingHeart, } from "react-icons/fa";
import { PiUsersThreeBold, PiGlobe } from "react-icons/pi";
import { TbGenderFemale, TbHeartHandshake } from "react-icons/tb";
// Card data
const SDG_CARDS = [
    {
        icons: [
            _jsx(FaHandsHelping, { color: "#e11d48" }, "hands"),
            _jsx(FaHandshake, { color: "#0ea5e9" }, "shake"),
            _jsx(FaSeedling, { color: "#10b981" }, "seed"),
        ],
        title: "Swarozgar",
        subtitle: "Mentorpreneur for underprivileged people",
        color: "bg-gradient-to-br from-pink-200 via-rose-100/70 to-orange-100",
        animation: { rotate: -10, scale: 1.1, y: -10 },
        link: "/initiatives/vihaas-design-technologies",
    },
    {
        icons: [
            _jsx(PiUsersThreeBold, { color: "#7c3aed" }, "users"),
            _jsx(FaRegLightbulb, { color: "#eab308" }, "bulb"),
            _jsx(PiGlobe, { color: "#06b6d4" }, "globe"),
        ],
        title: "Srijanatmakta",
        subtitle: "Shaping a future",
        color: "bg-gradient-to-br from-blue-200 via-indigo-100 to-sky-100",
        animation: { rotate: 12, scale: 1.12, x: 10 },
        link: "/initiatives/vihaas-tech-pro",
    },
    {
        icons: [
            _jsx(TbGenderFemale, { color: "#f472b6" }, "female"),
            _jsx(TbHeartHandshake, { color: "#16a34a" }, "heart"),
            _jsx(FaHandHoldingHeart, { color: "#e11d48" }, "support"),
        ],
        title: "Swadhinta",
        subtitle: "Women Empowerment",
        color: "bg-gradient-to-br from-green-200 via-teal-100 to-emerald-100",
        animation: { rotate: -5, scale: 1.13, y: 8 },
        link: "/initiatives/hanzaS",
    },
];
function useCardTilt() {
    const ref = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const frame = useRef(0);
    function handleMouseMove(e) {
        if (frame.current)
            return;
        frame.current = requestAnimationFrame(() => {
            const rect = ref.current?.getBoundingClientRect();
            if (!rect)
                return;
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
        visible: (i) => ({
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
        visible: (i) => ({
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
    // <section className="relative w-full py-14 px-3 md:px-10 lg:px-28 bg-white/90 flex flex-col items-center">
    _jsxs("section", { className: "relative w-full py-14 px-3 md:px-10 lg:px-28 bg-[#f9f9f9] flex flex-col items-center", children: [_jsx(motion.div, { variants: headingVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "w-full text-center mb-12", children: _jsxs("h2", { className: "text-[clamp(1.7rem,4vw,2.9rem)] font-black font-serif text-slate-900 tracking-tight mb-1", children: ["Our Commitment to", " ", _jsx("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-500 font-black", children: "Sustainable Development Goals" }), _jsx("span", { className: "text-slate-900/80 font-bold", children: " (SDGs)" })] }) }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl", children: SDG_CARDS.map((card, idx) => {
                    const { ref, tilt, handleMouseMove, handleMouseLeave } = useCardTilt();
                    return (_jsx(Link, { to: card.link, className: "block focus:outline-none", children: _jsxs(motion.div, { ref: ref, custom: idx, variants: cardVariants, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.18 }, whileHover: {
                                y: -12,
                                scale: 1.045,
                                boxShadow: "0 16px 44px #e2e8f066, 0 2px 8px #a21caf22",
                            }, animate: {
                                rotateX: tilt.x,
                                rotateY: tilt.y,
                                transition: {
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 18,
                                },
                            }, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, className: `group rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center px-6 py-10 md:p-8 ${card.color} border border-gray-100/80 min-h-[310px] max-w-[390px] w-full mx-auto relative cursor-pointer backdrop-blur-lg will-change-transform`, style: { perspective: 1000, touchAction: "manipulation" }, children: [_jsx("span", { className: "absolute -z-10 top-5 left-5 w-[92%] h-[92%] rounded-3xl bg-gradient-to-br from-white/80 to-fuchsia-100/50 opacity-80 blur-[2px]" }), _jsx(motion.div, { className: "flex gap-3 md:gap-5 mb-6", initial: { y: -30, opacity: 0, scale: 0.7 }, whileInView: {
                                        y: 0,
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            type: "spring",
                                            duration: 0.8,
                                            delay: idx * 0.15 + 0.18,
                                        },
                                    }, viewport: { once: true }, children: card.icons.map((icon, i) => (_jsx(motion.span, { className: "text-[2.1rem] md:text-[2.5rem] drop-shadow-lg select-none hover:scale-125 hover:rotate-[7deg] transition-all duration-200", whileHover: { scale: 1.23, rotate: 8 }, whileTap: { scale: 0.98 }, children: icon }, i))) }), _jsx("h3", { className: "text-2xl md:text-2xl font-extrabold font-serif text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-violet-900 to-fuchsia-900 tracking-tight mb-2", children: card.title }), _jsx(motion.p, { className: "text-base md:text-lg text-center font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-pink-500 to-emerald-600", custom: idx, variants: subtitleVariants, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.2 }, style: {
                                        backgroundSize: "250% 100%",
                                        animation: "moving-gradient 6s linear infinite alternate",
                                        WebkitBackgroundClip: "text",
                                    }, children: card.subtitle }), _jsx("span", { className: "block w-16 h-1 mt-5 bg-gradient-to-r from-pink-400 via-indigo-400 to-green-400 rounded-full opacity-80 mx-auto" })] }) }, card.title));
                }) }), _jsx("style", { children: `
        @keyframes moving-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      ` })] }));
}
