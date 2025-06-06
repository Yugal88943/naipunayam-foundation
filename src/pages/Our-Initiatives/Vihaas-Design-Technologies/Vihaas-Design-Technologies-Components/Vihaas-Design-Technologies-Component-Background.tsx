import React from "react";
// import vihaasDesignImage from "@/assets/Our-Initiatives-Section/Vihaas_Design.png"; // Use @ alias if set, else adjust to relative path
import vihaasDesignVideo from "@/assets/Our-Initiatives-Section/vihaas_design_video.mp4"; // Use @ alias if set, else adjust to relative path

const VihaasDesignTechnologiesComponentBackground: React.FC = () => (
  <section className="w-full mt-[1px]">
    <video
      src={vihaasDesignVideo}
      // alt="Vihaas Design Technologies"
      className="w-full aspect-[16/9] object-cover object-center"
      draggable={false}
      autoPlay
      
      muted
    />
  </section>
);

export default VihaasDesignTechnologiesComponentBackground;


