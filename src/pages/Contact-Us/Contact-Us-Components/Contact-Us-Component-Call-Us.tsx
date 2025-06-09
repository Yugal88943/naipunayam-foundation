  import React from "react";
  import { FaPhoneAlt, FaMobileAlt, FaRegBell } from "react-icons/fa";

  const CallUsCard: React.FC = () => {
    return (
      <div
        className="
          flex flex-col items-center justify-center
          w-full
          max-w-[350px]
          min-w-[240px]
          h-full
          bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 dark:from-emerald-900 dark:to-teal-900
          shadow-2xl rounded-2xl border-t-8 border-emerald-500
          p-6
          relative
          hover:scale-[1.04] hover:shadow-emerald-200 hover:-translate-y-1
          transition-all duration-300
          text-center
          break-words
        "
        style={{
          minHeight: "340px",
        }}
      >
        {/* Centered Accent */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-6 py-1 rounded-xl shadow-lg flex items-center gap-1 z-10">
          <FaRegBell className="animate-pulse" />
          Call Us
        </div>
        {/* Phone icons */}
        {/* <div className="flex items-center gap-4 mb-4 mt-8">
          <span className="rounded-full bg-white shadow-lg p-4 border-2 border-emerald-400">
            <FaPhoneAlt className="text-2xl text-emerald-600 drop-shadow-sm" />
          </span>
          <span className="rounded-full bg-white shadow-lg p-3 border-2 border-emerald-300 hidden md:inline">
            <FaMobileAlt className="text-xl text-emerald-500 drop-shadow-sm" />
          </span>
        </div> */}
        <div className="flex items-center gap-4 mb-4 mt-8 group">
    <span className="rounded-full bg-white shadow-lg p-4 border-2 border-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-emerald-300">
      <FaPhoneAlt className="text-2xl text-emerald-600 drop-shadow-sm transition-all duration-300 group-hover:animate-bounce group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
    </span>
    <span className="rounded-full bg-white shadow-lg p-3 border-2 border-emerald-300 hidden md:inline transition-all duration-300 group-hover:scale-110 group-hover:shadow-emerald-300">
      <FaMobileAlt className="text-xl text-emerald-500 drop-shadow-sm transition-all duration-300 group-hover:animate-bounce group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
    </span>
  </div>

        {/* Title */}
       
        <h3
  className="text-xl font-bold mb-1 tracking-wide text-center w-full bg-gradient-to-r from-emerald-600 via-teal-500 to-green-500 text-transparent bg-clip-text drop-shadow-sm"
>
  Call Us
</h3>
        <a
  href="tel:+91 88755 75559"
  className="
    text-2xl font-extrabold mb-2
    hover:text-teal-700 transition-colors
    flex items-center justify-center gap-2
    w-full break-words
    bg-gradient-to-r from-emerald-600 via-teal-500 to-green-500 text-transparent bg-clip-text drop-shadow-sm
    focus:outline-none focus:ring-2 focus:ring-emerald-400
  "
  style={{ wordBreak: "break-word", textAlign: "center" }}
>
  +91 88755 75559
</a>
        <p
  className="text-base font-medium mt-3 text-center w-full break-words bg-gradient-to-r from-emerald-600 via-teal-500 to-green-500 text-transparent bg-clip-text drop-shadow-sm"
>
  We’re here for you <span className="font-bold underline decoration-emerald-400">Monday–Saturday</span>, 9:30 AM – 6 PM.<br />
  <span className="font-bold text-emerald-500 bg-none drop-shadow-none">Let’s talk!</span>
</p>

        
        {/* Decorative bottom bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 h-2 w-16 rounded bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 opacity-90 shadow-md" />
      </div>
    );
  };

  export default CallUsCard;
