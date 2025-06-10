import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHandsHelping, FaUserFriends, FaHeartbeat, FaIndustry } from "react-icons/fa";
import blogImage from "@/assets/Blog-News-Section/blog_hanzas_5.webp";

const BlogNewsDetailHanzaS2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-emerald-50 min-h-screen w-full py-6">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-base md:text-lg font-semibold text-white bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-6"
        >
          <span className="text-lg">←</span> Back
        </button>
      </div>

      <article className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl px-6 sm:px-10 md:px-14 py-10 space-y-6">
        {/* Header */}
        <img
          src={blogImage}
          alt="HanzaS: A Story Stitched with Strength"
          className="w-full h-64 object-cover rounded-2xl mb-6 transition-transform duration-500 hover:scale-105"
          draggable={false}
        />
        <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-800 mb-2 hover:text-yellow-600 transition duration-300">
          HanzaS: A Story Stitched with Strength
        </h1>
        <div className="text-yellow-500 uppercase text-sm font-semibold mb-6">
          Women Empowerment
        </div>

        <section className="text-base md:text-lg leading-relaxed text-gray-800 font-serif space-y-6 text-justify">
          <p className="hover:bg-yellow-100/40 rounded p-2 transition duration-300">
            <FaHandsHelping className="inline-block text-yellow-600 mr-2" /> In 2011, in a quiet village in Rajasthan, a mother and daughter were doing what countless others were trying to do—survive. They had no capital. No big plans. Just courage, a deep love for their roots, and a craft passed down through generations. With poverty pressing on one side, and societal judgment on the other, they chose to start anyway.
          </p>

          <h2 className="font-bold text-xl text-yellow-700 hover:text-yellow-600 transition duration-300">They Began When the World Said, “Don’t.”</h2>
          <p className="hover:bg-yellow-100/40 rounded p-2 transition duration-300">
            <FaUserFriends className="inline-block text-yellow-600 mr-2" /> Back then, the world rarely offered space to women from small villages—especially not in business. But this mother and daughter duo didn’t wait for permission. They gathered their handcrafted pieces—full of colour, culture, and resilience—and began trading. It wasn’t easy. But it was enough to begin. And that beginning sparked something powerful.
          </p>

          <h2 className="font-bold text-xl text-yellow-700 hover:text-yellow-600 transition duration-300">From One Step to a Movement</h2>
          <p className="hover:bg-yellow-100/40 rounded p-2 transition duration-300">
            <FaIndustry className="inline-block text-yellow-600 mr-2" /> As their journey grew, so did the interest of other women—women who had always held skill in their fingers but rarely had a platform. Together, they began building something new. Something bold. A collective of artisans, rooted in heritage but looking toward the future. Today, HanzaS works with over 200 women artisans and 100 local vendors. Our story has travelled from Himachal Pradesh to homes across India and the world. But we haven’t forgotten where it started—or why it matters.
          </p>

          <h2 className="font-bold text-xl text-yellow-700 hover:text-yellow-600 transition duration-300">Not Just Products. Stories.</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-800">
            <li className="hover:underline transition"><FaHeartbeat className="inline-block text-yellow-600 mr-2" /> A legacy of craft</li>
            <li className="hover:underline transition"><FaHeartbeat className="inline-block text-yellow-600 mr-2" /> A reclaiming of dignity</li>
            <li className="hover:underline transition"><FaHeartbeat className="inline-block text-yellow-600 mr-2" /> A story of a woman saying “yes” to herself</li>
          </ul>
          <p className="hover:bg-yellow-100/40 rounded p-2 transition duration-300">
            When you wear HanzaS, you’re not just wearing a garment. You’re wearing strength, softness, history, and hope.
          </p>

          <h2 className="font-bold text-xl text-yellow-700 hover:text-yellow-600 transition duration-300">You’re Not Just Buying. You’re Belonging.</h2>
          <p className="hover:bg-yellow-100/40 rounded p-2 transition duration-300">
            <FaUserFriends className="inline-block text-yellow-600 mr-2" /> When you support HanzaS, you don’t just shop—you join a movement. A movement that says women can lead, create, earn, and thrive. You help rewrite futures—one stitch at a time.
          </p>

          <h2 className="font-bold text-xl text-yellow-700 hover:text-yellow-600 transition duration-300">Labour Day Reflection</h2>
          <p className="hover:bg-yellow-100/40 rounded p-2 transition duration-300">
            <FaIndustry className="inline-block text-yellow-600 mr-2" /> Labour Day is not just a date on the calendar—it’s a reminder of the courage, strength, and silent resilience of those who build, create, and carry the world forward. The word labour is often misunderstood. It’s not something to look down on—it’s something to honour. Labour means effort, artistry, and dignity. It means hands that don’t give up, even when no one is watching. At HanzaS, our story is woven by labour. By women artisans who rise each day to turn thread into dreams. By creators whose work rarely makes headlines—but always makes a difference. We’re here because of them. And for them. Today, we pause to thank every soul behind our craft. Because behind every HanzaS piece is a heartbeat, a hand, and a hope. 💛
          </p>
        </section>
      </article>
    </div>
  );
};

export default BlogNewsDetailHanzaS2;
