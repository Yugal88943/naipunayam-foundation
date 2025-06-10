import React from "react";
import { useNavigate } from "react-router-dom";
import blogImage from "@/assets/Blog-News-Section/blog_hanzas_6.webp";
import { FaHandsHelping, FaUserFriends, FaLeaf, FaGlobe } from "react-icons/fa";

const BlogNewsDetailHanzaS: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gray-100 py-8 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-base md:text-lg font-semibold text-white bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-4 mb-6"
        >
          <span className="text-lg">←</span> Back
        </button>
      </div>

      <article className="max-w-4xl mx-auto bg-gray-50 rounded-3xl shadow-lg px-6 sm:px-10 md:px-14 py-10 space-y-6">
        <img
          src={blogImage}
          alt="HanzaS: Built by Women, Powered by Purpose"
          className="w-full h-64 object-cover rounded-2xl mb-6 transition-transform duration-500 hover:scale-105"
          draggable={false}
        />

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-2 hover:text-indigo-700 transition duration-300">
          HanzaS: Built by Women, Powered by Purpose
        </h1>
        <div className="text-blue-500 uppercase text-sm font-semibold mb-6">
          By Hansa Sharma &middot; Founder, HanzaS
        </div>

        <section className="text-base md:text-lg leading-relaxed text-gray-800 font-serif space-y-6 text-justify">
          <p className="hover:bg-indigo-50/50 rounded p-2 transition duration-300">
            <FaHandsHelping className="inline-block text-indigo-600 mr-2" /> At HanzaS, fashion is more than fabric. It’s a force. We’re not just here to sell clothes. We’re here to shift the narrative—to build a brand that celebrates women not just as wearers, but as creators, earners, and leaders.
          </p>

          <h2 className="text-xl font-bold text-indigo-700 hover:text-indigo-600 transition duration-300">1. Behind Every Garment Is a Story of Strength</h2>
          <p className="hover:bg-indigo-50/50 rounded p-2 transition duration-300">
            <FaUserFriends className="inline-block text-indigo-600 mr-2" /> Every HanzaS piece is handcrafted by women—many of whom are first-generation earners. For them, stitching is more than a skill. It’s a way to reclaim space, gain independence, and shape their own identity. By giving them fair wages, safe working conditions, and flexibility, we create more than jobs—we create ownership.
          </p>

          <h2 className="text-xl font-bold text-indigo-700 hover:text-indigo-600 transition duration-300">2. We Don’t Empower Women. We Support Women Who Empower Themselves.</h2>
          <p className="hover:bg-indigo-50/50 rounded p-2 transition duration-300">
            <FaHandsHelping className="inline-block text-indigo-600 mr-2" /> Empowerment doesn’t mean giving someone power—it means recognizing it was always there. HanzaS is designed to be a space where growth is part of the job.
          </p>

          {/* <h2 className="text-l font-bold text-indigo-700 hover:text-indigo-600 transition duration-300 ">3. Sustainability and Empowerment Go Hand in Hand</h2> */}
          <h2 className="text-base md:text-xl font-bold text-indigo-700 hover:text-indigo-600 transition duration-300">
  3. Sustainability and Empowerment Go Hand in Hand
</h2>

          
          <p className="hover:bg-indigo-50/50 rounded p-2 transition duration-300">
            <FaLeaf className="inline-block text-indigo-600 mr-2" /> We’re committed to slow fashion—not just because it’s better for the planet, but because it gives our artisans the time and dignity they deserve. Every piece is stitched at a pace that respects both the hands making it and the Earth it comes from.
          </p>

          <h2 className="text-xl font-bold text-indigo-700 hover:text-indigo-600 transition duration-300">4. When You Buy from HanzaS, You Support a System That Works for Women</h2>
          <p className="hover:bg-indigo-50/50 rounded p-2 transition duration-300">
            <FaUserFriends className="inline-block text-indigo-600 mr-2" /> You’re not just buying a product. You’re investing in a ripple effect—one that impacts families, villages, and communities. Every sale contributes to more training, more jobs, and more confidence.
          </p>

          <h2 className="text-xl font-bold text-indigo-700 hover:text-indigo-600 transition duration-300">5. Our Vision: A Fashion Industry That Celebrates the Makers as Much as the Models</h2>
          <p className="hover:bg-indigo-50/50 rounded p-2 transition duration-300">
            <FaGlobe className="inline-block text-indigo-600 mr-2" /> Our dream? A future where people ask not just “What are you wearing?” but “Who made it?” A future where women are credited and compensated fairly, and where fashion becomes a medium for impact.
          </p>

          <blockquote className="my-6 p-4 bg-indigo-100 border-l-4 border-indigo-400 italic rounded">
            In Short: HanzaS is for Women, by Women, and with Women—Every Step of the Way. And that will never go out of style.
          </blockquote>
        </section>
      </article>
    </div>
  );
};

export default BlogNewsDetailHanzaS;
