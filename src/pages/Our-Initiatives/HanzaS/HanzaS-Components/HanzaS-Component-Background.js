import { jsx as _jsx } from "react/jsx-runtime";
import hanzaSVideo from '@/assets/Our-Initiatives-Section/hanzas_video.webm';
const HanzaSComponentBackground = () => (_jsx("section", { className: "w-full mt-[1px]", children: _jsx("video", { src: hanzaSVideo, autoPlay: true, muted: true, playsInline: true, className: "w-full aspect-[16/9] object-cover object-center", draggable: false }) }));
export default HanzaSComponentBackground;
