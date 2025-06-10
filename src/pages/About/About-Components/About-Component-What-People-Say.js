import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
const testimonials = [
    {
        text: "Naipunyam Foundation helped me land an Embedded Development internship, where I gained hands-on skills and invaluable learning.",
        author: "Deepak Dhiman ~JNGEC Sunder Nagar"
    },
    {
        text: "Thanks to Naipunyam Foundation, I got an internship in PCB Designing—now I’m working as a PCB Designer at Vihaas Design Technologies!",
        author: "Diya Sharma ~JNGEC Sunder Nagar"
    },
    {
        text: "Naipunyam Foundation guided me to a Software Engineer internship, where I built real-world skills and kickstarted my tech career.",
        author: "Arpit Bhardwaj ~Chitkara University",
    },
    {
        text: "With Naipunyam Foundation's support, I secured an Embedded Developer internship that gave me practical experience and boosted my confidence.",
        author: "Rajendra Kumar ~IIT Mandi",
    }
];
export default function AboutComponentWhatPeopleSay() {
    const [idx, setIdx] = useState(0);
    const frame = useRef(0);
    useEffect(() => {
        let rafId;
        const interval = () => {
            const update = () => {
                frame.current++;
                if (frame.current >= 360) {
                    setIdx(i => (i + 1) % testimonials.length);
                    frame.current = 0;
                }
                rafId = requestAnimationFrame(update);
            };
            rafId = requestAnimationFrame(update);
        };
        interval();
        return () => cancelAnimationFrame(rafId);
    }, []);
    return (_jsxs("section", { className: "w-full py-20 px-3 sm:px-6 md:px-12 lg:px-24 xl:px-32 bg-gradient-to-br from-blue-50 via-emerald-50 to-blue-100", children: [_jsx("h2", { className: "text-3xl md:text-4xl pb-1 font-extrabold text-center mb-14 bg-gradient-to-r from-sky-600 to-emerald-500 text-transparent bg-clip-text drop-shadow-lg", children: "What People Say About Us" }), _jsxs("div", { className: "flex flex-col items-center relative", children: [_jsx(AnimatePresence, { mode: "wait", children: _jsxs(motion.div, { role: "region", "aria-live": "polite", className: "relative rounded-3xl w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-5 py-10 md:px-12 md:py-14 bg-white/80 shadow-2xl border-4 border-transparent bg-clip-padding backdrop-blur-md", style: {
                                borderImage: "linear-gradient(90deg, #6ee7b7 10%, #60a5fa 70%) 1",
                            }, initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: -20 }, transition: { duration: 0.6, ease: "easeOut" }, children: [_jsx(FaQuoteLeft, { className: "absolute -top-6 left-6 text-4xl md:text-5xl text-emerald-200 drop-shadow-md opacity-60 pointer-events-none" }), _jsx("span", { className: "absolute -z-10 inset-0 rounded-3xl bg-gradient-to-br from-sky-100 via-emerald-100 to-transparent blur-2xl opacity-60 pointer-events-none" }), _jsxs("p", { className: "italic text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-6 text-center", children: ["\"", testimonials[idx].text, "\""] }), _jsx("div", { className: "text-right", children: _jsxs("span", { className: "text-base md:text-lg font-bold text-emerald-700 tracking-wide", children: ["\u2014 ", testimonials[idx].author] }) })] }, idx) }), _jsx("div", { className: "flex gap-3 mt-8", children: testimonials.map((_, i) => (_jsx("button", { onClick: () => setIdx(i), "aria-label": `Show testimonial ${i + 1}`, className: `w-4 h-4 md:w-5 md:h-5 rounded-full ring-2 ring-emerald-300 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-sky-300 ${i === idx
                                ? "bg-gradient-to-tr from-sky-400 to-emerald-400 scale-110 shadow-md"
                                : "bg-emerald-100 hover:bg-emerald-300"}` }, i))) })] })] }));
}
