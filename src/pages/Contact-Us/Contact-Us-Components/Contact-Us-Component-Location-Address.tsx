import React from "react";
import { FaMapMarkerAlt, FaMapSigns } from "react-icons/fa";

const LocationAddressCard: React.FC = () => {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        w-full
        max-w-[350px]
        min-w-[240px]
        h-full
        bg-gradient-to-br from-fuchsia-100 via-pink-50 to-rose-100
        shadow-2xl rounded-2xl border-r-8 border-fuchsia-500
        p-6
        text-center
        break-words
        relative
        hover:scale-[1.03] hover:shadow-fuchsia-200 hover:-translate-y-1
        transition-all duration-300
      "
      style={{
        minHeight: "340px",
      }}
    >
      {/* Centered Ribbon */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-fuchsia-500 text-white text-xs font-bold px-6 py-1 rounded-xl shadow-lg flex items-center gap-1 z-10">
        <FaMapSigns />
        Location
      </div>
      {/* Icon */}
      {/* <div className="flex flex-col items-center gap-3 mb-4 mt-8 w-full">
        <span className="rounded-full bg-white shadow-lg p-4 border-2 border-fuchsia-400">
          <FaMapMarkerAlt className="text-3xl text-fuchsia-600 drop-shadow-sm" />
        </span>
        <span className="text-lg font-bold text-fuchsia-700">
          Visit Us!
        </span>
      </div> */}
      <div className="flex flex-col items-center gap-3 mb-4 mt-8 w-full group">
  <span className="rounded-full bg-white shadow-lg p-4 border-2 border-fuchsia-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-fuchsia-300">
    <FaMapMarkerAlt className="text-3xl text-fuchsia-600 drop-shadow-sm transition-all duration-300 group-hover:animate-bounce group-hover:drop-shadow-[0_0_10px_rgba(232,121,249,0.7)]" />
  </span>
  <span className="text-lg font-semibold text-fuchsia-700">
    Visit Us!
  </span>
</div>

      
      {/* Address content */}
      <div className="w-full">
        {/* <h3 className="text-xl font-semibold text-fuchsia-800 mb-1 tracking-wide">
          Our Location
        </h3> */}
        <h3
  className="text-xl font-extrabold mb-1 tracking-wide text-center w-full bg-gradient-to-r from-fuchsia-600 via-pink-500 to-rose-500 text-transparent bg-clip-text drop-shadow-sm"
>
  Our Location
</h3>

        {/* <p className="text-base text-gray-800 font-medium break-words">
          Naipunayam Foundation
        </p> */}
        <p className="text-base font-bold break-words bg-gradient-to-r from-fuchsia-700 via-pink-500 to-rose-400 text-transparent bg-clip-text drop-shadow-sm">
  Naipunayam Foundation
</p>

        
        {/* <p className="text-sm text-gray-600 break-words">
          Mini Secretariat Road, near New D.C. Office,
        </p>
        <p className="text-sm text-gray-600 break-words">
          Solan, Himachal Pradesh - 173212
        </p> */}
        <p className="text-sm font-medium break-words bg-gradient-to-r from-fuchsia-500 via-pink-400 to-rose-400 text-transparent bg-clip-text">
  Mini Secretariat Road, near New D.C. Office,
</p>
<p className="text-sm font-medium break-words bg-gradient-to-r from-fuchsia-500 via-pink-400 to-rose-400 text-transparent bg-clip-text">
  Solan, Himachal Pradesh - 173212
</p>

        
      </div>
      {/* Decorative bar at bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 h-2 w-16 rounded bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 opacity-80 shadow-md" />
    </div>
  );
};

export default LocationAddressCard;
