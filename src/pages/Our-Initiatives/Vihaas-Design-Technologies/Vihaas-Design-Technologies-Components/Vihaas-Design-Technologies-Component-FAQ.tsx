import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { FaBookOpen, FaRupeeSign, FaUserGraduate, FaPhoneAlt } from "react-icons/fa";

const faqs = [
  {
    category: "Training",
    icon: <FaBookOpen className="text-green-500 text-xl mr-2" />,
    items: [
      {
        question: "📍 Where is the training conducted?",
        answer:
          "The training takes place in Solan, Himachal Pradesh, at Vihaas Design Technologies’ facility.",
      },
      {
        question: "🕒 How long is the training program?",
        answer:
          "The training typically spans 4 weeks, including both theory and hands-on practical sessions.",
      },
    ],
  },
  {
    category: "Cost & Eligibility",
    icon: <FaRupeeSign className="text-emerald-500 text-xl mr-2" />,
    items: [
      {
        question: "💰 Is there any cost involved?",
        answer:
          "No. The program is 100% free and also provides a stipend to support youth participation.",
      },
      {
        question: "🎓 Do I need any prior experience?",
        answer:
          "No prior experience is needed. Just a strong willingness to learn and grow is enough!",
      },
    ],
  },
  {
    category: "Support",
    icon: <FaPhoneAlt className="text-blue-500 text-xl mr-2" />,
    items: [
      {
        question: "📞 Who do I contact for help?",
        answer:
          "You can contact us through the Contact Us page for more details or support with registration.",
      },
    ],
  },
];

export default function VihaasDesignTechnologiesComponentFAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [openCategory]);

  return (
    <section className="w-full px-6 py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
      <div ref={topRef} className="absolute top-0" />

      <div className="absolute top-0 left-1/3 w-72 h-72 bg-gradient-to-br from-green-300 to-cyan-300 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-4rem] right-[-4rem] w-96 h-96 bg-gradient-to-tr from-blue-200 to-green-200 rounded-full blur-[120px] opacity-20 animate-pulse"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-green-600 via-teal-500 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              ref={openCategory === group.category ? scrollRef : null}
            >
              <button
                onClick={() =>
                  setOpenCategory((prev) =>
                    prev === group.category ? null : group.category
                  )
                }
                className="w-full flex items-center justify-between px-6 py-4 bg-white rounded-xl shadow hover:shadow-md transition-all text-left text-lg font-bold text-green-800"
              >
                <div className="flex items-center">
                  {group.icon}
                  {group.category}
                </div>
                <motion.span
                  animate={{ rotate: openCategory === group.category ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.span>
              </button>

              <AnimatePresence>
                {openCategory === group.category && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="pl-6 mt-2 space-y-4"
                  >
                    {group.items.map((faq, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white border border-green-100 p-4 rounded-xl shadow-sm"
                      >
                        <h3 className="font-semibold text-green-700">
                          {faq.question}
                        </h3>
                        <div className="text-gray-700 mt-1 leading-relaxed min-h-[64px]">
                          <TypeAnimation
                            sequence={[faq.answer, 1000]}
                            speed={40}
                            wrapper="span"
                            cursor={false}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
