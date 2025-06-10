import React from "react";
import vihaasTechProVideo from "@/assets/Our-Initiatives-Section/vihaas_tech_video.webm"; // Use @ alias if set up; otherwise, use relative path

const VihaasTechProComponentBackground: React.FC = () => (
  <section className="w-full mt-[1px]">
    <video
      src={vihaasTechProVideo}
      className="w-full aspect-[16/9] object-cover object-center"
      autoPlay
      muted
      playsInline
      draggable={false}
      controls={false}
  disablePictureInPicture
  controlsList="nodownload nofullscreen noremoteplayback"
    />
  </section>
);

export default VihaasTechProComponentBackground;


