import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const joinItems = [
    {
        icon: "👩‍🔧",
        title: "Open to All Women",
        desc: "Homemakers, school dropouts, fresh graduates — anyone seeking a new path.",
    },
    {
        icon: "🧠",
        title: "Beginner Friendly",
        desc: "No experience required. All you need is curiosity and a will to learn.",
    },
];
const HanzaSComponentWhoCanJoin = () => {
    return (_jsxs(motion.section, { className: "snap-start min-h-screen w-full bg-gray-800 px-6 py-24 overflow-x-hidden flex items-center justify-center relative", initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: false, amount: 0.3 }, transition: { duration: 1 }, children: [_jsx("div", { className: "absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/30 to-purple-100/10 rounded-full z-0" }), _jsxs("div", { className: "z-10 max-w-5xl w-full flex flex-col items-center text-center", children: [_jsx(motion.h2, { className: "text-4xl sm:text-5xl font-bold font-serif text-white mb-20", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 1 }, children: "Who Can Join?" }), _jsx("div", { className: "relative flex flex-col gap-24 w-full", children: joinItems.map((item, index) => (_jsxs(motion.div, { className: `flex flex-col sm:flex-row items-center gap-6 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`, initial: { opacity: 0, x: index % 2 === 0 ? -40 : 40 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8, delay: index * 0.2 }, children: [_jsx("div", { className: "flex-shrink-0 w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-3xl shadow-xl border border-white/20 z-10", children: item.icon }), _jsxs("div", { className: "bg-white/10 text-left p-6 sm:p-8 rounded-xl text-white shadow-md border border-white/20 backdrop-blur-md max-w-md", children: [_jsx("h3", { className: "text-xl font-semibold text-purple-200 mb-2", children: item.title }), _jsx("p", { className: "text-base text-gray-200", children: item.desc })] })] }, index))) })] })] }));
};
export default HanzaSComponentWhoCanJoin;
