import { jsx as _jsx } from "react/jsx-runtime";
import aboutUsVideo from '@/assets/About-Section/about_naipunayam_foundation_background.webm';
const AboutComponentBackgroundImages = () => (_jsx("section", { className: "w-full mt-[1px]", children: _jsx("video", { src: aboutUsVideo, autoPlay: true, muted: true, playsInline: true, className: "w-full aspect-[16/9] object-cover object-center", draggable: false, controls: false, disablePictureInPicture: true, controlsList: "nodownload nofullscreen noremoteplayback" }) }));
export default AboutComponentBackgroundImages;
