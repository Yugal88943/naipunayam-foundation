import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const faqs = [
    {
        title: "Is the sewing training really free?",
        desc: "Yes! It's completely free for all women participants. A monthly stipend is also provided to support your journey.",
    },
    {
        title: "Where is the training held?",
        desc: "In Solan, Himachal Pradesh. You’ll get the exact address and batch details after registration.",
    },
    {
        title: "Do I need sewing experience to join?",
        desc: "Not at all. It's open to beginners and those wishing to polish their skills.",
    },
    {
        title: "Who can join the program?",
        desc: "Women from all backgrounds — especially homemakers, dropouts, or career restarters.",
    },
    {
        title: "What will I learn?",
        desc: "Cutting, stitching, hemming, garment finishing — skills for tailoring or business.",
    },
    {
        title: "Will I get a certificate?",
        desc: "Yes. All successful participants receive a certificate of completion.",
    },
    {
        title: "Is there an age limit?",
        desc: "Women 18+ are eligible. There's no upper limit as long as you’re eager to learn.",
    },
    {
        title: "How long is the program?",
        desc: "The typical duration is a few weeks. Full details are shared after enrollment.",
    },
    {
        title: "How can I support?",
        desc: "Spread the word, or volunteer! Contact us for ways to help.",
    },
];
const HanzaSComponentFAQs = () => {
    return (_jsxs(motion.section, { className: "snap-start min-h-screen w-full bg-gray-800 px-4 sm:px-6 py-24 flex flex-col items-center justify-center relative", initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1 }, children: [_jsx(motion.h2, { className: "text-3xl sm:text-5xl font-bold font-serif text-white mb-16 text-center leading-snug", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 1 }, children: "FAQs \u2014 Your Journey, Answered" }), _jsx("div", { className: "relative border-l-2 border-purple-500/30 pl-6 max-w-4xl w-full space-y-10 sm:space-y-12", children: faqs.map((faq, index) => (_jsxs(motion.div, { className: "relative group", initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { delay: index * 0.05 }, children: [_jsx("div", { className: "absolute -left-[12\n  px] top-3 w-4 h-4", children: _jsxs("div", { className: "relative w-full h-full", children: [_jsx("div", { className: "absolute inset-0 rounded-full bg-purple-400 opacity-30 animate-ping" }), _jsx("div", { className: "relative w-4 h-4 rounded-full bg-purple-400 shadow-md z-10" })] }) }), _jsxs("div", { className: "bg-white/5 border border-purple-500/20 hover:border-purple-400/40 hover:shadow-xl transition-all duration-300 backdrop-blur-md rounded-xl p-5 sm:p-6 text-white", children: [_jsx("h3", { className: "text-base sm:text-lg font-semibold mb-2 text-purple-200", children: faq.title }), _jsx("p", { className: "text-sm sm:text-base text-gray-300 leading-relaxed", children: faq.desc })] })] }, index))) }), _jsxs(motion.div, { className: "mt-16 text-sm text-white text-center opacity-60", initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { delay: 0.5 }, children: ["Still curious?", " ", _jsx("a", { href: "/contact-us", className: "text-purple-400 underline hover:text-purple-200", children: "Reach out to us" })] })] }));
};
export default HanzaSComponentFAQs;
