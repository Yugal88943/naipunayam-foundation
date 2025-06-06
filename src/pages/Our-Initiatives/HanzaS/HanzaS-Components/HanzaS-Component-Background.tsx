// HanzaS-Component-Background.tsx

import React from "react";
import hanzaSVideo from '@/assets/Our-Initiatives-Section/hanzas_video.mp4';
// import hanzaSMission from '@/assets/Our-Initiatives-Section/hanzas_mission.mp4';
// import hanzaSVision from '@/assets/Our-Initiatives-Section/hanzas_vision.png';

const HanzaSComponentBackground: React.FC = () => (
  <section className="w-full mt-[1px]">
    <video
      src={hanzaSVideo}
      autoPlay
      // loop
      muted
      playsInline
      // alt="HanzaS Initiative"
      className="w-full aspect-[16/9] object-cover object-center"
      draggable={false}
      
    />
  </section>
);

export default HanzaSComponentBackground;


