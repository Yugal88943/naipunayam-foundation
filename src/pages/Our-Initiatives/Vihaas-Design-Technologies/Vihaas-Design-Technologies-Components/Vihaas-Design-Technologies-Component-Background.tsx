import React from "react";
import vihaasDesignVideo from "@/assets/Our-Initiatives-Section/vihaas_design_video.webm"; 

const VihaasDesignTechnologiesComponentBackground: React.FC = () => (
  <section className="w-full mt-[1px]">
    <video
      src={vihaasDesignVideo}
      autoPlay
      muted
      playsInline
      className="w-full aspect-[16/9] object-cover object-center"
      draggable={false}
    />
  </section>
);

export default VihaasDesignTechnologiesComponentBackground;


