import React from "react";
import { motion } from "framer-motion";
import Blog_Vihaas_Design_3 from "@/assets/Blog-News-Section/vihaas-1.jpeg";
import Blog_Vihaas_Design_2 from "@/assets/Blog-News-Section/soldering-2.jpeg";
import Blog_Vihaas_Design_5 from "@/assets/Blog-News-Section/vihaas-2.jpeg";
import { useNavigate } from "react-router-dom";

// Card data
const riverCards = [
  {
    img: Blog_Vihaas_Design_3,
    alt: "Vihaas Design Technologies lab",
    title: "Pioneering Himachal's Tech Future",
    subtitle: "Founded in 2017 • Solan, HP",
    text: "Vihaas Design Technologies is driving innovation in Himachal through home-grown telecom solutions and advanced manufacturing. Their 'Make in India' commitment brings high-tech job opportunities and practical skills to local youth.",
    highlight: "⚡ Over 120 youth trained in R&D roles",
    bg: "bg-blue-50"
  },
  {
    img: Blog_Vihaas_Design_2,
    alt: "Soldering training at Vihaas",
    title: "Hands-on Learning & Youth Empowerment",
    subtitle: "Youth Skill Development • Real Labs",
    text: "From soldering training to advanced product design, Vihaas offers hands-on learning for young engineers. The environment encourages experimentation, teamwork, and a flat hierarchy where talent thrives.",
    highlight: "🛠️ 100% Free Soldering Training, Stipend Support",
    bg: "bg-yellow-50"
  },
  {
    img: Blog_Vihaas_Design_5,
    alt: "Vihaas Design Team",
    title: "Collaboration & Lasting Impact",
    subtitle: "Community First • Lasting Upliftment",
    text: "Through local partnerships and youth mentorship, Vihaas empowers the next generation to innovate for their communities—right in their own backyard.",
    highlight: "🌱 Community-driven, impact-focused innovation",
    bg: "bg-purple-50"
  }
];

// Animation for cards
const cardVariants = {
  hiddenLeft: { opacity: 0, x: -80 },
  hiddenRight: { opacity: 0, x: 80 },
  hiddenUp: { opacity: 0, y: 60 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
};

const BlogNewsDetailVihaasDesign: React.FC = () => {
 
  const navigate = useNavigate();
 return(
 <section className="relative max-w-5xl mx-auto py-10 px-2 md:px-6 my-16">
    
     {/* Back Button */}
     <div className="max-w-3xl mr-auto mb-3 px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-base md:text-lg font-semibold text-white bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg -mb-1"
        >
          <span className="text-lg">←</span> Back
        </button>
      </div>
    
    {/* River line & dots */}
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2 z-0">
      <div className="w-full h-full bg-gradient-to-b from-blue-200/40 via-purple-100/10 to-white rounded-full blur-lg opacity-60" />
      {riverCards.map((_, i) => (
        <span
          key={i}
          className="absolute left-1/2 -translate-x-1/2 bg-blue-300 rounded-full shadow"
          style={{
            top: `${18 + i * 32}%`,
            width: 14,
            height: 14,
            zIndex: 10,
            border: "2px solid #c7d2fe"
          }}
        />
      ))}
    </div>
    {/* Cards */}
    <div className="relative z-10 flex flex-col gap-16">
      {riverCards.map((card, i) => (
        <motion.div
          key={i}
          className={`
            flex flex-col md:flex-row items-center md:gap-10
            ${i % 2 === 1 ? "md:flex-row-reverse" : ""}
          `}
          initial={window.innerWidth < 768 ? "hiddenUp" : i % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          {/* Image */}
          <div className="md:w-2/5 w-full flex justify-center items-center">
            <img
              src={card.img}
              alt={card.alt}
              className={`rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md h-52 sm:h-60 md:h-64 object-cover object-center border-4 border-white ${card.bg}`}
              draggable={false}
            />
          </div>
          {/* Card */}
          <div
            className={`
              md:w-3/5 w-full 
              ${i % 2 === 0 ? "md:pl-10" : "md:pr-10"}
              mt-8 md:mt-0
            `}
          >
            <div
              className={`
                ${card.bg} bg-opacity-60 backdrop-blur-xl
                rounded-2xl shadow-md p-7 border border-blue-100 transition
                hover:shadow-xl
              `}
            >
              <div className="uppercase text-xs tracking-widest text-blue-400 font-semibold mb-2">{card.subtitle}</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-3 leading-tight">{card.title}</h2>
              <p className="text-gray-700 text-justify text-base sm:text-lg mb-4">{card.text}</p>
              <div className="text-blue-600 font-semibold mb-1">{card.highlight}</div>
            </div>
          </div>
        </motion.div>
      ))}
      {/* Call to action */}
      <div className="flex justify-center mt-10">
        <a
          href="https://vihaasdtech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-center hover:bg-blue-700 text-white font-semibold rounded-full px-7 py-3 shadow-lg transition text-lg"
        >
          Visit Vihaas Design Technologies Website
        </a>
      </div>
    </div>
  </section>
  );
};

export default BlogNewsDetailVihaasDesign;
