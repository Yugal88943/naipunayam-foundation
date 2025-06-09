// HanzaS-Component-Background.tsx
import React from "react";
import hanzaSVideo from '@/assets/Our-Initiatives-Section/hanzas_video.mp4';

const HanzaSComponentBackground: React.FC = () => (
  <section className="w-full mt-[1px]">
    <video
      src={hanzaSVideo}
      autoPlay
      muted
      playsInline
      className="w-full aspect-[16/9] object-cover object-center"
      draggable={false}
      
    />
  </section>
);

export default HanzaSComponentBackground;


