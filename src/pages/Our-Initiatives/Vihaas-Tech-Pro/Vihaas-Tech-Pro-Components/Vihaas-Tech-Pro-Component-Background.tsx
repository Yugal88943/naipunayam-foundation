import React from "react";
import vihaasTechProVideo from "@/assets/Our-Initiatives-Section/vihaas_tech_video.mp4"; // Use @ alias if set up; otherwise, use relative path

const VihaasTechProComponentBackground: React.FC = () => (
  <section className="w-full mt-[1px]">
    <video
      autoPlay
      // loop
      muted
      // playsInline
      src={vihaasTechProVideo}
      // alt="Vihaas Tech Pro"
      className="w-full aspect-[16/9] object-cover object-center"
      draggable={false}
      
    />
  </section>
);

export default VihaasTechProComponentBackground;


