import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import blogNewsIllustration from "@/assets/Blog-News-Section/blog.webp";
// Animation variants for text and image
const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const BlogNewsComponentIntro = () => {
    return (_jsxs("section", { className: "relative w-full overflow-hidden py-14 px-2 md:px-12 mb-12", children: [_jsxs("div", { className: "pointer-events-none absolute inset-0 z-0", "aria-hidden": "true", children: [_jsx("div", { className: "absolute -top-16 left-0 right-0 mx-auto w-3/4 h-48 bg-gradient-to-r from-blue-100/50 via-blue-300/20 to-purple-100/40 blur-2xl opacity-60 rounded-full" }), _jsx("div", { className: "absolute bottom-0 left-0 w-1/3 h-28 bg-purple-200/40 blur-xl rounded-full" }), _jsx("div", { className: "absolute top-10 right-0 w-1/4 h-16 bg-blue-200/40 blur-lg rounded-full" })] }), _jsxs("div", { className: "relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12", children: [_jsxs(motion.div, { className: "flex-1 px-2 sm:px-6 md:px-0", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.7 }, variants: fadeInLeft, children: [_jsx("span", { className: "uppercase text-sm tracking-wider text-blue-500 font-semibold mb-2 inline-block", children: "Blog & News" }), _jsxs("h2", { className: "relative text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight inline-block text-balance", children: [_jsxs("span", { className: "relative z-10", children: ["Discover Stories, Updates, ", _jsx("br", { className: "hidden md:block" }), "and Impactful News"] }), _jsx("span", { className: "absolute left-0 bottom-2 h-2 w-full bg-gradient-to-r from-blue-200/50 via-purple-300/40 to-transparent blur-lg animate-pulse z-0 rounded-full pointer-events-none" })] }), _jsx(motion.p, { className: "text-lg md:text-xl text-gray-700 mb-4 text-justify", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: {
                                    delay: window.innerWidth < 768 ? 0.05 : 0.2, // faster on mobile
                                    duration: 0.6,
                                    ease: "easeOut"
                                }, viewport: { once: true }, children: "Stay updated with the latest happenings, inspiring stories, and insightful articles from the Naipunayam Foundation. Explore how we're making a difference in education, empowerment, and community development." })] }), _jsx(motion.div, { className: "flex-1 flex justify-center items-center", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.7 }, variants: fadeInRight, children: _jsxs("div", { className: "w-full flex justify-center items-center", children: [_jsxs("div", { className: "hidden md:block relative group", children: [_jsx("span", { className: "absolute -inset-2 rounded-3xl pointer-events-none z-0 animate-pulse", style: {
                                                background: "linear-gradient(120deg, #a5b4fc55 30%, #c4b5fd33 70%, #f0abfc22 100%)",
                                                filter: "blur(7px)",
                                                opacity: 0.7,
                                            } }), _jsx(motion.img, { src: blogNewsIllustration, alt: "Blog illustration", className: "\n                  w-full\n                  max-w-[320px]\n                  h-auto\n                  object-contain\n                  select-none\n                  mx-auto\n                  rounded-2xl\n                  shadow-lg\n                  bg-white/70\n                  backdrop-blur-lg\n                  p-2\n                  relative\n                  z-10\n                ", loading: "lazy", draggable: false, initial: { y: 0 }, animate: { y: [0, -8, 0] }, transition: {
                                                duration: 3.2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            } })] }), _jsx("div", { className: "md:hidden w-full flex justify-center items-center", children: _jsx("img", { src: blogNewsIllustration, alt: "Blog illustration", className: "w-full max-w-xs h-auto object-contain select-none rounded-2xl shadow-lg mx-auto", loading: "lazy", draggable: false }) })] }) })] })] }));
};
export default BlogNewsComponentIntro;
