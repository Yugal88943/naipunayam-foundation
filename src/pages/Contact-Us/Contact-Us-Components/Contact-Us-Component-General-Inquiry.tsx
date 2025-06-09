import React from "react";
import { FaEnvelope, FaPaperPlane, FaRegQuestionCircle } from "react-icons/fa";

const GeneralInquiryCard: React.FC = () => {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        w-full
        max-w-[350px]
        min-w-[240px]
        h-full
        bg-gradient-to-br from-blue-50 via-cyan-50 to-white dark:from-blue-900 dark:to-cyan-900
        shadow-xl hover:shadow-blue-300 rounded-3xl border-l-[6px] border-blue-500
        p-6
        transition-all duration-300
        hover:scale-105
        relative
        text-center
        break-words
      "
      style={{
        minHeight: "340px",
      }}
    >
      {/* Ribbon */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-5 py-1 rounded-xl shadow-lg flex items-center gap-2 z-10">
        <FaRegQuestionCircle />
        General Inquiry
      </div>
    
      <div className="flex flex-col items-center gap-3 mb-4 mt-8 w-full group">
  <span className="rounded-full bg-white shadow p-4 border-2 border-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-300">
    <FaEnvelope className="text-4xl text-blue-500 transition-all duration-300 group-hover:animate-bounce group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
  </span>
  <span className="text-xl font-semibold text-blue-700 dark:text-blue-200">
    Get in Touch!
  </span>
</div>
      {/* Email */}
      <a
        href="mailto:info@naipunayam.org"
        className="
          text-lg md:text-xl font-extrabold text-blue-700 dark:text-blue-100 mb-2
          hover:text-cyan-700 transition-colors cursor-pointer flex items-center justify-center gap-2
          w-full break-words
        "
        style={{ wordBreak: 'break-word', textAlign: 'center' }}
      >
        <FaPaperPlane className="text-base" />
        <span className="break-words">info@naipunayam.org</span>
      </a>
    
      <p
  className="text-base font-medium mt-2 mb-1 w-full break-words bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-transparent bg-clip-text drop-shadow-sm"
>
  For any <span className="font-bold">questions</span>, ideas, or <span className="font-bold">support</span>, email us.
</p>
      <span className="font-medium text-blue-600 dark:text-cyan-300 text-sm w-full break-words mb-4">
  We’re always listening!
</span>

      {/* Accent Bar */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 h-2 w-14 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 opacity-90 shadow-md" />
    </div>
  );
};

export default GeneralInquiryCard;
