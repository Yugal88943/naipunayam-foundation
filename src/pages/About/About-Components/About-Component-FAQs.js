import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaUserCircle } from "react-icons/fa";
const faqs = [
    {
        question: "What is Naipunayam Foundation?",
        answer: "Naipunayam Foundation is a registered public charitable trust based in Solan, Himachal Pradesh, focused on empowering communities through education, innovation, and social welfare initiatives.",
    },
    {
        question: "Who can join the Vihaas Tech Pro program?",
        answer: "Any student with a passion for technology and learning can apply. The program is open to learners from Solan, Himachal Pradesh, and nearby regions including the Tricity.",
    },
    {
        question: "Are the women’s training classes really free?",
        answer: "Yes! Our women empowerment initiative offers free hands-on sewing classes, along with a monthly stipend for active participants.",
    },
    {
        question: "How can I support your initiatives?",
        answer: "You can support us by volunteering, partnering with us, or spreading awareness on social media. Become a bridge between us and underserved communities. You can also share your ideas and experiences with us through online or offline channels.",
    },
    {
        question: "Are you a government-recognized NGO?",
        answer: "Yes. Naipunayam Foundation is a registered charitable trust and operates in compliance with all legal requirements for public welfare organizations in India.",
    },
    {
        question: "Where are you located?",
        answer: "We are based in Solan, Himachal Pradesh, and are expanding our outreach to surrounding regions, including the Tricity.",
    },
    {
        question: "How can I get in touch?",
        answer: "You can reach us through our Contact Us page or email us directly. We’re also active on social media!",
    },
];
function useTypewriter(text, speed = 15) {
    const [displayed, setDisplayed] = useState("");
    useEffect(() => {
        setDisplayed("");
        if (!text)
            return;
        let current = 0;
        let active = true;
        const tick = () => {
            if (!active)
                return;
            setDisplayed(text.slice(0, current + 1));
            current++;
            if (current < text.length) {
                setTimeout(tick, speed);
            }
        };
        tick();
        return () => { active = false; };
    }, [text, speed]);
    return displayed;
}
export default function AboutComponentFAQs() {
    const [openIdx, setOpenIdx] = useState(null);
    const chatRefs = useRef([]);
    const typedAnswer = useTypewriter(openIdx !== null ? faqs[openIdx].answer : "", 13);
    useEffect(() => {
        if (openIdx !== null && chatRefs.current[openIdx]) {
            setTimeout(() => {
                chatRefs.current[openIdx]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 80);
        }
    }, [openIdx]);
    return (_jsxs("section", { className: "w-full px-3 sm:px-6 md:px-14 lg:px-32 py-14 md:py-20 bg-gradient-to-br from-sky-50 via-white to-emerald-50", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-10 pb-2 bg-gradient-to-r from-sky-600 via-emerald-400 to-blue-500 text-transparent bg-clip-text drop-shadow-lg", children: ["Ask Us Anything! ", _jsx("span", { className: "text-2xl md:text-3xl", children: "\uD83D\uDCAC" })] }), _jsx("div", { className: "max-w-2xl mx-auto flex flex-col gap-5", children: faqs.map((faq, i) => (_jsxs("div", { ref: el => { chatRefs.current[i] = el; }, className: "flex flex-col items-end gap-1", children: [_jsxs(motion.button, { layout: true, className: `
                relative flex items-end self-end max-w-[90%] sm:max-w-[75%] md:max-w-[65%]
                bg-gradient-to-br from-blue-400 to-emerald-400
                text-white text-base md:text-lg font-medium
                rounded-2xl rounded-br-sm px-5 py-3 shadow-xl my-2 transition-all
                hover:scale-[1.03] focus:outline-none
                ${openIdx === i ? "ring-4 ring-emerald-200/60" : ""}
              `, onClick: () => setOpenIdx(openIdx === i ? null : i), "aria-expanded": openIdx === i, children: [_jsx("span", { className: "mr-3 text-2xl text-emerald-50", children: _jsx(FaUserCircle, {}) }), faq.question] }), _jsx(AnimatePresence, { children: openIdx === i && (_jsxs(motion.div, { initial: { opacity: 0, y: 40, scale: 0.92 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: 20, scale: 0.94 }, transition: { duration: 0.45, ease: "easeOut" }, className: "flex items-end self-start gap-3 max-w-[93%] sm:max-w-[77%] md:max-w-[68%] my-2 bg-white/80 backdrop-blur-lg border border-cyan-100 text-gray-800 rounded-2xl rounded-bl-sm px-5 py-4 shadow-lg font-medium", children: [_jsx("span", { className: "text-xl md:text-2xl text-cyan-400", children: _jsx(FaRobot, {}) }), _jsxs("span", { className: "text-base md:text-lg", style: { whiteSpace: "pre-line" }, children: [typedAnswer, typedAnswer.length < faqs[i].answer.length && (_jsx("span", { className: "animate-pulse ml-1 text-cyan-400", children: "|" }))] })] }, "answer")) })] }, i))) }), _jsxs("div", { className: "w-full flex justify-center pt-10", children: [_jsx("span", { className: "inline-block w-3 h-3 bg-cyan-300 rounded-full mx-1 animate-bounce" }), _jsx("span", { className: "inline-block w-3 h-3 bg-emerald-300 rounded-full mx-1 animate-bounce [animation-delay:0.2s]" }), _jsx("span", { className: "inline-block w-3 h-3 bg-blue-300 rounded-full mx-1 animate-bounce [animation-delay:0.4s]" })] })] }));
}
