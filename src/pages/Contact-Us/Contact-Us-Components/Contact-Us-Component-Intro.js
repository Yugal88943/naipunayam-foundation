import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FaHandsHelping, FaStar, FaLightbulb, FaUserFriends, FaRocket, FaBook, FaMapMarkerAlt } from "react-icons/fa";
// -- Chips Data --
const chips = [
    { text: "Best NGO in Himachal Pradesh", icon: _jsx(FaStar, { className: "text-yellow-500" }), color: "from-fuchsia-200 to-fuchsia-100 text-fuchsia-800 border-none" },
    { text: "Solan Based Non-Profit", icon: _jsx(FaMapMarkerAlt, { className: "text-pink-500" }), color: "from-pink-200 to-pink-100 text-pink-800 border-none" },
    { text: "Technical Education", icon: _jsx(FaBook, { className: "text-indigo-500" }), color: "from-indigo-200 to-indigo-100 text-indigo-800 border-none" },
    { text: "Women Empowerment", icon: _jsx(FaHandsHelping, { className: "text-emerald-500" }), color: "from-emerald-200 to-emerald-100 text-emerald-800 border-none" },
    { text: "Community Upliftment", icon: _jsx(FaUserFriends, { className: "text-blue-400" }), color: "from-blue-200 to-blue-100 text-blue-800 border-none" },
    { text: "Innovation-Driven Initiatives", icon: _jsx(FaLightbulb, { className: "text-yellow-400" }), color: "from-yellow-100 to-yellow-50 text-yellow-900 border-none" },
    { text: "Join the Movement!", icon: _jsx(FaRocket, { className: "text-orange-500" }), color: "from-orange-200 to-orange-100 text-orange-800 border-none" },
];
// -- Animation for subtle float --
const floatVariants = {
    animate: (i) => ({
        y: [0, -8, 0, 6, 0],
        x: [0, 6 * ((i % 2 === 0) ? 1 : -1), 0, -6 * ((i % 3 === 0) ? 1 : -1), 0],
        transition: {
            duration: 4 + (i % 2),
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: i * 0.12,
        },
    }),
};
function FloatingChipsArc() {
    return (_jsxs("div", { className: "relative flex w-full justify-center mb-[-42px] z-10 pointer-events-none select-none", children: [_jsx("div", { className: "flex flex-wrap justify-center gap-2", style: {
                    transform: "translateY(8px)", // so they sit *over* the hero
                }, children: chips.map((chip, i) => (_jsxs(motion.div, { className: `flex items-center gap-2 px-4 py-2 rounded-full shadow-md bg-gradient-to-br font-semibold text-base ${chip.color}
            hover:scale-105 hover:shadow-lg transition-transform duration-200 cursor-pointer`, style: {
                        filter: "blur(0.2px)", // slight blend
                        boxShadow: "0 3px 14px 0 rgba(140,98,255,0.07)",
                        opacity: 0.98
                    }, variants: floatVariants, animate: "animate", custom: i, whileHover: { scale: 1.09, rotate: 1 }, tabIndex: -1, children: [_jsx("span", { className: "text-lg", children: chip.icon }), _jsx("span", { children: chip.text })] }, chip.text))) }), _jsx("div", { className: "absolute w-[80vw] h-24 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] pointer-events-none", style: {
                    background: "radial-gradient(circle at 50% 70%, #fff0f3 70%, transparent 100%)",
                    filter: "blur(18px)",
                } })] }));
}
export default function ContactUsComponentIntro() {
    return (_jsxs("section", { className: "\n        relative w-full flex flex-col items-center justify-center\n        bg-gradient-to-br from-indigo-50 via-pink-50 to-emerald-50\n        min-h-[40vh] md:min-h-[60vh] lg:min-h-[62vh]\n      ", style: {
            minHeight: "clamp(330px, 45vh, 700px)", // Mobile: ~45vh, Desktop: up to 700px
            paddingTop: "max(env(safe-area-inset-top, 0px), 3.5rem)",
            paddingBottom: "max(env(safe-area-inset-bottom, 0px), 2.5rem)",
        }, children: [_jsx(FloatingChipsArc, {}), _jsx("div", { className: "absolute top-[18%] left-1/2 -translate-x-1/2 w-[300px] h-[140px] rounded-full bg-fuchsia-100 opacity-30 blur-2xl z-0 pointer-events-none" }), _jsx("div", { className: "absolute top-[36%] left-1/4 w-[120px] h-[80px] rounded-full bg-emerald-100 opacity-25 blur-xl z-0 pointer-events-none" }), _jsx("div", { className: "absolute top-[36%] right-1/4 w-[110px] h-[60px] rounded-full bg-indigo-100 opacity-25 blur-lg z-0 pointer-events-none" }), _jsx("div", { className: "relative z-10 pt-16 md:pt-28 pb-4 flex flex-col items-center w-full", children: _jsxs(motion.div, { initial: { opacity: 0, y: 36 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.75, ease: "easeOut" }, className: "flex flex-col items-center gap-3", children: [_jsx("span", { className: "mb-2 flex gap-2", children: _jsx(motion.span, { initial: { scale: 0.7, rotate: -18, opacity: 0 }, animate: { scale: [0.7, 1.1, 1], rotate: [-18, 0, -7, 0], opacity: 1 }, transition: { duration: 1.8, repeat: Infinity, repeatType: "reverse" }, className: "text-[2.3rem] md:text-4xl text-fuchsia-500 drop-shadow-lg", children: _jsx(FaHandsHelping, {}) }) }), _jsx("h1", { className: "text-4xl pb-4  md:text-5xl font-black text-center bg-gradient-to-r from-fuchsia-600 via-indigo-700 to-emerald-500 bg-clip-text text-transparent drop-shadow-md mb-1", children: "Let's Connect with Naipunayam Foundation" }), _jsxs(motion.p, { initial: { opacity: 0, y: 30, scale: 0.98 }, animate: {
                                opacity: 1,
                                y: [0, -6, 0, 5, 0], // gentle up/down float
                                scale: [1, 1.01, 0.99, 1], // very light scale pulse
                                transition: {
                                    duration: 6,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut",
                                },
                            }, transition: { duration: 1.2, delay: 0.4, ease: "easeOut" }, className: "\n              max-w-2xl text-center text-base md:text-lg font-semibold\n              px-4 py-2\n              bg-gradient-to-r from-white/90 to-emerald-50/90\n              rounded-xl shadow-sm\n              tracking-wide border border-fuchsia-100/40\n              flex items-center justify-center gap-2\n              mx-auto mt-2\n              bg-clip-padding\n            ", style: {
                                background: "linear-gradient(120deg,#f5f3ffcc,#e0f2f1cc 100%)",
                                boxShadow: "0 1px 12px 0 rgba(99,102,241,0.08)",
                                backdropFilter: "blur(5px)",
                            }, children: [_jsx(motion.span, { className: "animate-pulse text-xl", animate: {
                                        rotate: [0, 10, -10, 0],
                                        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                                    }, children: "\uD83E\uDD1D" }), _jsx("span", { className: "font-extrabold bg-gradient-to-r from-fuchsia-600 via-emerald-600 to-indigo-600 bg-clip-text text-transparent drop-shadow", children: "We\u2019re here to help you." }), _jsxs("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-emerald-500 font-bold drop-shadow-sm ml-1", children: ["Whether you want to ", _jsx("span", { className: "text-emerald-500 font-extrabold hover:animate-pulse transition", children: "volunteer" }), ", ", _jsx("span", { className: "text-fuchsia-600 font-extrabold hover:animate-pulse transition", children: "collaborate" }), ", or have any ", _jsx("span", { className: "text-indigo-600 font-extrabold hover:animate-pulse transition", children: "questions" }), ", our team is eager to ", _jsx("span", { className: "text-pink-500 font-extrabold hover:animate-pulse transition", children: "connect" }), " and ", _jsx("span", { className: "text-emerald-500 font-extrabold hover:animate-pulse transition", children: "support" }), " you."] }), _jsx(motion.span, { className: "animate-pulse text-xl", animate: {
                                        rotate: [0, -10, 10, 0],
                                        transition: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }
                                    }, children: "\u2728" })] })] }) })] }));
}
