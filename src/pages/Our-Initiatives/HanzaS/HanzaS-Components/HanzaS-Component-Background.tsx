// HanzaS-Component-Background.tsx
import React from "react";
import hanzaSVideo from '@/assets/Our-Initiatives-Section/hanzas_video.webm';

const HanzaSComponentBackground: React.FC = () => (
  <section className="w-full mt-[1px]">
    <video
      src={hanzaSVideo}
      autoPlay
      muted
      playsInline
      className="w-full aspect-[16/9] object-cover object-center"
      draggable={false}
      controls={false}
  disablePictureInPicture
  controlsList="nodownload nofullscreen noremoteplayback"
    />
  </section>
);

export default HanzaSComponentBackground;


