import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb } from "react-icons/fa";
const WhoCanJoinAllVariants = () => {
    const points = [
        "Youth from all backgrounds, especially those looking to start or restart their careers",
        "No prior technical experience required—just a willingness to learn",
    ];
    const cards = [
        {
            title: "🎯 Audience",
            icon: _jsx(FaUsers, { className: "text-blue-500 text-3xl mb-2 animate-bounce-slow" }),
            content: points[0],
        },
        {
            title: "🧠 Requirements",
            icon: _jsx(FaLightbulb, { className: "text-yellow-500 text-3xl mb-2 animate-bounce-slow" }),
            content: points[1],
        },
    ];
    return (_jsxs("section", { className: "w-full bg-gradient-to-b from-blue-50 to-indigo-50 py-20 px-6 font-sans", children: [_jsx(motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-4xl font-extrabold text-indigo-800 mb-12 text-center", children: "Who Can Join?" }), _jsx("div", { className: "max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10", children: cards.map(({ title, content, icon }, idx) => (_jsx(motion.div, { whileHover: { scale: 1.04 }, initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: idx * 0.2 }, className: "bg-white p-8 rounded-2xl shadow-lg border-t-4 border-indigo-400 hover:border-blue-500 transition-all duration-300", children: _jsxs("div", { className: "flex flex-col items-center text-center text-blue-900", children: [icon, _jsx("h4", { className: "font-semibold text-xl mb-3", children: title }), _jsx("p", { className: "text-base leading-relaxed", children: content })] }) }, idx))) })] }));
};
export default WhoCanJoinAllVariants;
