import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FaImages } from "react-icons/fa";
// Use safe breakpoints: base, sm, md, lg, xl (not xs unless you defined it)
const GalleryComponentIntro = () => (_jsxs("section", { className: "w-full flex flex-col items-center pt-12 pb-10 bg-gradient-to-br from-rose-50 via-indigo-50 to-emerald-50", style: {
        minHeight: 260, // Plenty of room for any two lines!
        boxSizing: "border-box",
    }, children: [_jsx(motion.span, { initial: { opacity: 0, scale: 0.7, y: 12 }, animate: { opacity: 1, scale: 1, y: 0 }, transition: { duration: 0.7, type: "spring" }, whileHover: { scale: 1.17, rotate: 8, filter: "drop-shadow(0 0 8px #d946efbb)" }, className: "mb-2 text-fuchsia-600", style: { willChange: "transform, filter" }, children: _jsx(FaImages, { className: "text-3xl sm:text-5xl drop-shadow" }) }), _jsxs("div", { className: "w-full flex flex-col items-center", children: [_jsxs(motion.h1, { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.2, type: "spring" }, whileHover: { scale: 1.03, textShadow: "0 6px 18px #a21caf40" }, className: "hidden sm:block text-3xl md:text-5xl font-black text-center bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-md leading-snug transition-all duration-200 cursor-pointer", style: {
                        willChange: "transform, textShadow",
                        lineHeight: 1.18,
                        wordBreak: "break-word",
                        letterSpacing: "0.005em",
                    }, children: [_jsx("span", { className: "block", children: "Moments that Inspire:" }), _jsx("span", { className: "block mt-4", children: _jsxs(motion.span, { className: "inline-block relative", whileHover: {
                                    scale: 1.07,
                                    y: -4,
                                    textShadow: "0 4px 24px #4f46e5aa, 0 0px 3px #10b981cc",
                                }, transition: { type: "spring", stiffness: 300 }, children: ["Naipunayam Gallery", _jsx("span", { className: "block w-full h-1 mt-1 rounded-lg bg-gradient-to-r from-fuchsia-400 to-emerald-400 opacity-70 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" })] }) })] }), _jsxs("h1", { className: "block sm:hidden text-lg font-black text-center bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-md leading-tight", style: {
                        lineHeight: 1.18,
                        wordBreak: "break-word",
                        letterSpacing: "0.005em",
                    }, children: [_jsx("span", { className: "block", children: "Moments that Inspire:" }), _jsx("span", { className: "block mt-2", children: "Naipunayam Gallery" })] })] }), _jsxs(motion.p, { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.5, type: "spring" }, className: "max-w-xs sm:max-w-xl mt-4 text-center text-base sm:text-lg font-semibold px-2 sm:px-4 py-2 bg-gradient-to-r from-white/90 to-emerald-50/90 rounded-xl shadow-sm text-fuchsia-700 tracking-wide border border-fuchsia-100/40 mx-auto", style: {
                background: "linear-gradient(120deg,#f5f3ffcc,#e0f2f1cc 100%)",
                boxShadow: "0 1px 12px 0 rgba(99,102,241,0.08)",
                backdropFilter: "blur(4px)",
                position: "relative",
            }, children: ["Discover our journey in frames: events, stories,", " ", _jsx(motion.span, { whileHover: {
                        color: "#059669", // emerald-600
                        scale: 1.15,
                        textShadow: "0 2px 10px #10b981aa",
                    }, className: "font-bold text-emerald-600 transition-all duration-300 cursor-pointer underline decoration-emerald-400 decoration-2 underline-offset-4", children: "smiles" }), ", and change in action."] })] }));
export default GalleryComponentIntro;
