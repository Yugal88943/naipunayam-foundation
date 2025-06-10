import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FaCogs, FaUserGraduate, FaBolt } from "react-icons/fa";
import vihaasTechImage from "@/assets/Our-Initiatives-Section/vihaas-tech-13.webp";
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};
const boxHover = {
    whileHover: {
        scale: 1.05,
        boxShadow: "0 12px 30px rgba(16, 185, 129, 0.15)",
        transition: { duration: 0.3 },
    },
};
const iconHover = {
    whileHover: {
        rotate: [0, 10, -10, 0],
        transition: { duration: 0.6 },
    },
};
export default function VihaasTechProUniqueIntro() {
    return (_jsxs("section", { className: "relative w-full bg-[#f9fafb] px-6 sm:px-10 lg:px-20 pt-28 pb-12 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 -z-10 bg-[url('/pattern.svg')] bg-center bg-repeat opacity-[0.04]" }), _jsxs("div", { className: "max-w-7xl mx-auto grid xl:grid-cols-2 gap-10 xl:gap-14 items-center", children: [_jsx(motion.div, { className: "rounded-2xl overflow-hidden shadow-xl order-last xl:order-first w-full max-w-xl mx-auto", variants: fadeIn, initial: "initial", whileInView: "whileInView", viewport: { once: true }, children: _jsx("img", { src: vihaasTechImage, alt: "Tech training in action", className: "w-full h-full object-cover" }) }), _jsxs(motion.div, { className: "space-y-10 order-1 lg:order-2 px-2 sm:px-4", variants: fadeIn, initial: "initial", whileInView: "whileInView", viewport: { once: true }, children: [_jsxs("div", { className: "space-y-4 text-center lg:text-left", children: [_jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif bg-gradient-to-r from-green-700 via-teal-600 to-blue-600 text-transparent bg-clip-text", children: "Vihaas Tech Pro" }), _jsx("h3", { className: "text-xs sm:text-sm tracking-wide font-semibold uppercase text-emerald-700", children: "Where Innovation Meets Ambition" }), _jsxs("p", { className: "text-cyan-900 text-base sm:text-lg font-medium leading-relaxed text-justify max-w-2xl lg:max-w-none mx-auto lg:mx-0", children: ["Vihaas Tech Pro is not just a program \u2014 it's a launchpad for the engineers, designers, and tech leaders of tomorrow. A joint initiative by ", _jsx("strong", { className: "text-teal-700", children: "Naipunayam Foundation" }), " and ", _jsx("strong", { className: "text-blue-700", children: "Vihaas Design Technologies" }), ", this platform redefines technical learning through real-world projects, cutting-edge tools, and industry mentorship."] })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch", children: [
                                    {
                                        Icon: FaCogs,
                                        color: "text-emerald-600",
                                        title: "Real Tools",
                                        desc: "Industry-grade labs and systems",
                                    },
                                    {
                                        Icon: FaBolt,
                                        color: "text-yellow-500",
                                        title: "Fast-Track Learning",
                                        desc: "Project-based tech training",
                                    },
                                    {
                                        Icon: FaUserGraduate,
                                        color: "text-indigo-600",
                                        title: "Student First",
                                        desc: "Made for early-career creators",
                                    },
                                ].map(({ Icon, color, title, desc }, idx) => (_jsxs(motion.div, { className: "bg-white rounded-xl p-5 shadow-md border border-gray-100 text-center cursor-default h-full flex flex-col justify-start", variants: fadeIn, whileHover: boxHover.whileHover, children: [_jsx(motion.div, { className: `text-2xl mb-3 mx-auto ${color}`, whileHover: iconHover.whileHover, children: _jsx(Icon, {}) }), _jsx("h4", { className: "font-semibold font-serif text-lg text-teal-800 ", children: title }), _jsx("p", { className: "text-base text-teal-600 text-center", children: desc })] }, idx))) }), _jsx("div", { className: "text-center pt-4", children: _jsx("a", { href: "#get-involved", className: "inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all", children: "Explore Programs \u2192" }) })] })] })] }));
}
