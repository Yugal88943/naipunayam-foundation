import React from "react";
import { HiQuestionMarkCircle } from "react-icons/hi2";

const faqs = [
  {
    question: "Are the courses suitable for beginners?",
    answer:
      "Yes, they’re designed for technical students and grads to build industry-ready skills.",
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
    answer:
      "No hidden fees. Scholarships cover full costs for eligible students.",
  },
  {
    question: "What is the medium of instruction?",
    answer: "English with Hindi support if needed.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-20 py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold font-serif mb-16 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:scale-[1.015] hover:shadow-2xl cursor-pointer"
            >
              {/* Question Area */}
              <div className="p-6 min-h-[120px] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-left">
                  <HiQuestionMarkCircle className="text-2xl text-teal-500 shrink-0" />
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                    {faq.question}
                  </h4>
                </div>
                <span className="text-2xl text-gray-300 group-hover:text-teal-600 transition-transform duration-300">
                  +
                </span>
              </div>

              {/* Answer Reveal */}
              <div className="absolute inset-0 bg-white bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed max-w-md mx-auto">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

