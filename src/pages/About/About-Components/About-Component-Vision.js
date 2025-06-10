import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/About/About-Components/About-Component-Vision.tsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaSeedling, FaUsers } from "react-icons/fa";
const AboutComponentVision = () => {
    const descriptionRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: descriptionRef,
        offset: ["start end", "end start"],
    });
    const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -180]);
    const scaleHeadline = useTransform(scrollYProgress, [0, 0.9], [1, 1.08]);
    const opacityHeadline = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);
    const blurHeadline = useTransform(scrollYProgress, [0, 0.8], [0, 6]);
    return (_jsxs("div", { className: "relative min-h-screen w-full bg-[#f8f8f8]", children: [_jsx("section", { className: "sticky top-0 h-screen flex items-center justify-center z-10", children: _jsx(motion.h1, { style: {
                        y: yHeadline,
                        scale: scaleHeadline,
                        opacity: opacityHeadline,
                        filter: blurHeadline?.get() ? `blur(${Math.max(0, blurHeadline.get()).toFixed(2)}px)` : "blur(0px)",
                    }, className: "text-[8vw] font-extrabold uppercase tracking-tight drop-shadow-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-cyan-500 to-blue-400", children: "Our Vision" }) }), _jsxs("section", { ref: descriptionRef, className: "relative min-h-fit md:min-h-[60vh] flex flex-col items-center justify-start z-20 bg-white shadow-2xl", style: {
                    marginTop: "-8rem",
                    borderBottomLeftRadius: "1.5rem",
                    borderBottomRightRadius: "1.5rem",
                    overflow: "hidden",
                }, children: [_jsx("svg", { className: "w-full", viewBox: "0 0 1440 200", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: {
                            height: "100px",
                            width: "100%",
                            display: "block",
                        }, preserveAspectRatio: "none", children: _jsx("path", { fill: "#fff", d: "M0,160 Q720,0 1440,160 L1440,200 L0,200 Z" }) }), _jsxs("div", { className: "flex flex-col items-center w-full max-w-3xl xl:max-w-2xl 2xl:max-w-xl mx-auto px-6 sm:px-8 py-10 md:py-12", children: [_jsx(motion.h2, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.2, duration: 0.8 }, className: "text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-cyan-500 to-blue-400 drop-shadow text-center", children: "Our Vision" }), _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.35, duration: 0.8 }, className: "text-xl font-sans font-normal text-gray-800 leading-relaxed tracking-normal max-w-3xl text-center [word-spacing:0.08em]", children: [_jsxs("p", { children: ["We envision a world where every individual \u2014 regardless of background, gender, or income \u2014\u00A0 has access to\u00A0", _jsxs("strong", { className: "inline-flex items-center gap-2 text-blue-700 font-semibold", children: [_jsx(FaGraduationCap, { className: "text-2xl" }), "Quality Education"] }), ", modern technology, and the tools to build a sustainable and dignified livelihood."] }), _jsx("br", {}), _jsx("p", { children: "We believe in breaking the cycle of poverty through:" }), _jsx("div", { className: "inline-flex flex-col sm:flex-row sm:justify-center sm:gap-10 gap-5 items-center text-green-700 font-semibold text-lg mt-5", children: [
                                            { icon: _jsx(FaLaptopCode, { className: "text-3xl" }), label: "Skill-Based\nTraining" },
                                            { icon: _jsx(FaLaptopCode, { className: "text-3xl" }), label: "Digital\nLiteracy" },
                                            { icon: _jsx(FaSeedling, { className: "text-3xl" }), label: "Community-Led\nInnovation" }
                                        ].map(({ icon, label }, idx) => (_jsxs("div", { className: "group inline-flex flex-col items-center gap-1 text-center transition-all duration-300 hover:text-emerald-600 cursor-pointer", children: [icon, label.split("\n").map((line, i) => (_jsx("span", { children: line }, i)))] }, idx))) }), _jsx("br", {}), _jsxs("p", { children: ["Our goal is not just empowerment \u2014 but lasting transformation, where each person becomes a\u00A0", _jsxs("strong", { className: "inline-flex items-center gap-2 text-cyan-700 font-semibold", children: [_jsx(FaUsers, { className: "text-xl" }), "Catalyst for Change"] }), "\u00A0in their family, community, and beyond."] })] })] })] })] }));
};
export default AboutComponentVision;
