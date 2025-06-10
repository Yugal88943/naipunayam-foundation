import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";
const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
    },
};
export default function VihaasTechProComponentMission() {
    return (_jsxs("section", { className: "relative w-full snap-start bg-gradient-to-b from-[#f8fafc] to-white px-6 sm:px-10 md:px-20 pt-12 pb-20 overflow-hidden", children: [_jsx("div", { className: "absolute top-[-80px] left-[10%] w-[300px] h-[300px] bg-teal-300 rounded-full blur-[140px] opacity-20 -z-10" }), _jsx("div", { className: "absolute bottom-[-100px] right-[10%] w-[260px] h-[260px] bg-blue-200 rounded-full blur-[100px] opacity-20 -z-10" }), _jsx("div", { className: "absolute top-[30%] left-1/2 transform -translate-x-1/2 w-[120px] h-[120px] bg-gradient-to-tr from-teal-300 to-green-200 rounded-full blur-[80px] opacity-30 -z-10" }), _jsxs(motion.div, { className: "max-w-4xl mx-auto text-center space-y-6 px-6 py-10 rounded-3xl border border-white/30 bg-white/50 backdrop-blur-md shadow-xl transition duration-300 hover:shadow-2xl hover:border-teal-300 relative overflow-hidden", variants: fadeIn, initial: "initial", whileInView: "whileInView", viewport: { once: true }, whileHover: { scale: 1.01 }, children: [_jsx("div", { className: "absolute inset-0 rounded-3xl border-2 border-transparent hover:border-teal-300 hover:shadow-[0_0_40px_5px_rgba(94,234,212,0.3)] transition-all duration-500 pointer-events-none" }), _jsxs(motion.div, { className: "flex justify-center items-center gap-3 text-teal-700", initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(motion.div, { className: "text-3xl sm:text-4xl", animate: { y: [0, -4, 0] }, transition: { repeat: Infinity, duration: 2 }, children: _jsx(FaLightbulb, {}) }), _jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-teal-600 to-blue-600 drop-shadow-md", children: "Our Mission" })] }), _jsx(motion.blockquote, { className: "italic text-lg sm:text-xl font-semibold text-teal-900 tracking-wide leading-relaxed max-w-3xl mx-auto text-center sm:text-center", whileHover: { scale: 1.02 }, transition: { duration: 0.3 }, children: "\u201CTo bridge the gap between theory and hands-on application, preparing future-ready engineers and innovators who are equipped to lead in the modern tech landscape.\u201D" })] })] }));
}
