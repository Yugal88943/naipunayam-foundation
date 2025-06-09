import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "./blogData";

const BlogNewsCards: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10 bg-gradient-to-br from-white to-gray-50">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className={`
              rounded-3xl bg-gray-100/80 shadow-lg border border-blue-100 backdrop-blur-md 
              transition-all duration-300 relative flex flex-col md:flex-row group overflow-hidden
              ${post.bgColor || ""}
            `}
            {...(!isMobile && {
              whileHover: { scale: 1.028, boxShadow: "0 8px 44px 0 rgba(59,130,246,0.14)" },
              whileTap: { scale: 0.98 }
            })}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Image */}
            <div className="md:w-1/3 flex-shrink-0 flex items-center justify-center overflow-hidden bg-white/30">
              <motion.img
                src={post.image}
                alt={post.title}
                className="w-full h-48 md:h-44 object-cover object-center rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl transition-transform duration-400"
                loading="lazy"
                draggable={false}
                {...(!isMobile && {
                  whileHover: { scale: 1.09 },
                })}
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col p-5 md:p-7">
              <span className="inline-block mb-2 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-400 to-indigo-400 text-white px-3 py-1 rounded-full shadow-sm">
                {post.category}
              </span>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 leading-tight group-hover:text-indigo-700 transition-colors duration-200">
                {post.title}
              </h3>

              <p className="text-gray-700 text-justify mb-4 text-base leading-relaxed font-serif">
                {post.snippet}
              </p>

              <div className="mt-auto flex">
                <Link
                  to={post.link}
                  className="inline-block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 text-white font-semibold rounded-full px-6 py-2 shadow-md transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-1">
                    Read More <span className="ml-1">→</span>
                  </span>
                  <span
                    className="absolute left-[-100%] top-0 w-full h-full shimmer-bg pointer-events-none rounded-full"
                    style={{
                      animation: "shine 2.2s linear infinite",
                      zIndex: 2,
                    }}
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>
        {`
          .shimmer-bg {
            background: linear-gradient(100deg, transparent 40%, #fff6 60%, transparent 70%);
            animation: shine 2.2s linear infinite;
            z-index: 2;
          }
          @keyframes shine {
            0% { left: -100%; }
            80% { left: 120%; }
            100% { left: 120%; }
          }
        `}
      </style>
    </section>
  );
};

export default BlogNewsCards;
