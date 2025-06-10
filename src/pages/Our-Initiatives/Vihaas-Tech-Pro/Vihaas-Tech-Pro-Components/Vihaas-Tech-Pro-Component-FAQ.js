import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HiQuestionMarkCircle } from "react-icons/hi2";
const faqs = [
    {
        question: "Are the courses suitable for beginners?",
        answer: "Yes, they’re designed for technical students and grads to build industry-ready skills.",
    },
    {
        question: "What is the duration of each course?",
        answer: "Each course lasts 6 months with project-based learning.",
    },
    {
        question: "Will I receive a certificate?",
        answer: "Yes, a training and experience certificate is provided.",
    },
    {
        question: "Is it open to non-Himachal students?",
        answer: "Yes, but priority is given to students from Himachal Pradesh.",
    },
    {
        question: "Are there hidden fees?",
        answer: "No hidden fees. Scholarships cover full costs for eligible students.",
    },
    {
        question: "What is the medium of instruction?",
        answer: "English with Hindi support if needed.",
    },
    {
        question: "What are the eligibility criteria for the scholarship program?",
        answer: "Applicants must pass a merit-based test to qualify for our 100% scholarship opportunity.",
    },
];
export default function FAQSection() {
    return (_jsx("section", { className: "w-full bg-[#f9f9f9] px-4 sm:px-6 md:px-10 pt-20 pb-8", children: _jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [_jsx("h2", { className: "text-4xl font-extrabold font-serif mb-16 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600", children: "Frequently Asked Questions" }), _jsx("div", { className: "flex flex-col space-y-8", children: faqs.map((faq, index) => (_jsxs("div", { className: "group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:scale-[1.015] hover:shadow-2xl cursor-pointer", children: [_jsxs("div", { className: "p-6 min-h-[120px] flex items-center justify-between gap-4", children: [_jsxs("div", { className: "flex items-center gap-3 text-left", children: [_jsx(HiQuestionMarkCircle, { className: "text-2xl text-teal-500 shrink-0" }), _jsx("h4", { className: "text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300", children: faq.question })] }), _jsx("span", { className: "text-2xl text-gray-300 group-hover:text-teal-600 transition-transform duration-300", children: "+" })] }), _jsx("div", { className: "absolute inset-0 bg-white bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center", children: _jsx("p", { className: "text-base sm:text-lg text-gray-700 font-medium leading-relaxed max-w-md mx-auto", children: faq.answer }) })] }, index))) })] }) }));
}
