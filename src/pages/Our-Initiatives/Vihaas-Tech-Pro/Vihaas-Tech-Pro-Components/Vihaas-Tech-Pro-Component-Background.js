import { jsx as _jsx } from "react/jsx-runtime";
import vihaasTechProVideo from "@/assets/Our-Initiatives-Section/vihaas_tech_video.webm"; // Use @ alias if set up; otherwise, use relative path
const VihaasTechProComponentBackground = () => (_jsx("section", { className: "w-full mt-[1px]", children: _jsx("video", { src: vihaasTechProVideo, className: "w-full aspect-[16/9] object-cover object-center", autoPlay: true, muted: true, playsInline: true, draggable: false, controls: false, disablePictureInPicture: true, controlsList: "nodownload nofullscreen noremoteplayback" }) }));
export default VihaasTechProComponentBackground;
