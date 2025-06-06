// src/pages/Blog-News/BlogNewsDetailHanzaS.tsx

import React from "react";
import blogImage from "@/assets/Blog-News-Section/blog_hanzas_6.png";

const BlogNewsDetailHanzaS: React.FC = () => (
  <article className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12 my-12">
    {/* Blog Header */}
    <img
      src={blogImage}
      alt="HanzaS: Built by Women, Powered by Purpose"
      className="w-full h-64 object-cover rounded-2xl mb-8"
      draggable={false}
    />
    <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-4">
      HanzaS: Built by Women, Powered by Purpose
    </h1>
    <div className="text-blue-500 uppercase text-sm font-semibold mb-4">
      By Hansa Sharma &middot; Founder, HanzaS
    </div>
    <p className="mb-6 text-lg text-gray-700 font-serif">
      At HanzaS, fashion is more than fabric. It’s a force. We’re not just here to sell clothes. We’re here to shift the narrative—to build a brand that celebrates women not just as wearers, but as creators, earners, and leaders.<br />
      Here’s how we’re doing it.
    </p>

    {/* Section 1 */}
    <h2 className="text-xl font-bold mb-2 text-indigo-700 mt-6">1. Behind Every Garment Is a Story of Strength</h2>
    <p className="mb-4 text-gray-700">
      Every HanzaS piece is handcrafted by women—many of whom are first-generation earners. Some are mothers balancing work and family, others are young women building futures in places where opportunities are limited.
      <br /><br />
      For them, stitching is more than a skill. It’s a way to reclaim space, gain independence, and shape their own identity.
      <br /><br />
      By giving them fair wages, safe working conditions, and flexibility, we create more than jobs—we create ownership.
    </p>

    {/* Section 2 */}
    <h2 className="text-xl font-bold mb-2 text-indigo-700 mt-6">2. We Don’t Empower Women. We Support Women Who Empower Themselves.</h2>
    <p className="mb-4 text-gray-700">
      Empowerment doesn’t mean giving someone power—it means recognizing it was always there. Our role? To make sure women have the platform and tools to use that power.
      <br /><br />
      Whether it’s learning a new craft, managing quality checks, or mentoring others in the team, HanzaS is designed to be a space where growth is part of the job.
    </p>

    {/* Section 3 */}
    <h2 className="text-xl font-bold mb-2 text-indigo-700 mt-6">3. Sustainability and Empowerment Go Hand in Hand</h2>
    <p className="mb-4 text-gray-700">
      We’re committed to slow fashion—not just because it’s better for the planet, but because it gives our artisans the time and dignity they deserve.
      <br /><br />
      Quick timelines and mass production don’t leave room for creativity or care. We prefer to go slow and do it right—every piece stitched at a pace that respects both the hands making it and the Earth it comes from.
    </p>

    {/* Section 4 */}
    <h2 className="text-xl font-bold mb-2 text-indigo-700 mt-6">4. When You Buy from HanzaS, You Support a System That Works for Women</h2>
    <p className="mb-4 text-gray-700">
      You’re not just buying a product. You’re investing in a ripple effect—one that impacts families, villages, and communities. Every sale contributes to more training, more jobs, and more confidence. It’s circular in the best way possible.
    </p>

    {/* Section 5 */}
    <h2 className="text-xl font-bold mb-2 text-indigo-700 mt-6">5. Our Vision: A Fashion Industry That Celebrates the Makers as Much as the Models</h2>
    <p className="mb-4 text-gray-700">
      Our dream? A future where people ask not just “What are you wearing?” but “Who made it?”
      <br /><br />
      A future where local craft is celebrated, where women are credited and compensated fairly, and where fashion becomes a medium for impact—not just appearance.
    </p>

    <blockquote className="my-6 p-4 bg-indigo-50 border-l-4 border-indigo-300 italic rounded">
      In Short: HanzaS is for Women, by Women, and with Women—Every Step of the Way. And that will never go out of style.
    </blockquote>

    
    
  </article>
);

export default BlogNewsDetailHanzaS;
