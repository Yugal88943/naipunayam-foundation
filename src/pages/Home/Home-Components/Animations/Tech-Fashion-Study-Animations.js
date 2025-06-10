import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { FaLaptopCode, FaRobot, FaGraduationCap, FaBook, FaChalkboardTeacher, FaUserGraduate, FaCodeBranch, FaServer, FaPenNib, FaLightbulb } from 'react-icons/fa';
const PositionedIcon = ({ Icon, className, animation, index, color }) => (_jsx(motion.div, { drag: true, dragConstraints: { top: 0, left: 0, right: 0, bottom: 0 }, animate: animation, transition: { duration: 3 + index, repeat: Infinity }, className: `absolute ${className} text-[24px] sm:text-[28px] md:text-[32px] lg:text-[42px] xl:text-[50px] ${color} opacity-30 pointer-events-auto z-0`, children: _jsx(Icon, {}) }));
export function TechAnimation({ rotateX, rotateY, showSubtitle }) {
    const primaryIcons = [
        { Icon: FaLaptopCode, className: 'top-[30%] left-[7%]', color: 'text-blue-400' },
        { Icon: FaRobot, className: 'top-[35%] right-[7%]', color: 'text-blue-300' }
    ];
    const subtitleIcons = [
        { Icon: FaCodeBranch, className: 'top-[42%] left-[6%]', color: 'text-blue-400' },
        { Icon: FaServer, className: 'top-[47%] right-[6%]', color: 'text-blue-400' }
    ];
    return (_jsxs(motion.div, { style: { rotateX, rotateY }, className: "absolute inset-0 w-full h-full pointer-events-none", children: [primaryIcons.map(({ Icon, className, color }, i) => (_jsx(PositionedIcon, { Icon: Icon, className: className, animation: { y: [0, -10, 0] }, index: i, color: color }, `primary-${i}`))), showSubtitle && subtitleIcons.map(({ Icon, className, color }, i) => (_jsx(PositionedIcon, { Icon: Icon, className: className, animation: { y: [0, -10, 0] }, index: i + 2, color: color }, `sub-${i}`)))] }));
}
export function FashionAnimation({ rotateX, rotateY, showSubtitle }) {
    const primaryIcons = [
        { Icon: FaChalkboardTeacher, className: 'top-[30%] left-[6%]', color: 'text-pink-400' },
        { Icon: FaUserGraduate, className: 'top-[35%] right-[6%]', color: 'text-pink-300' }
    ];
    const subtitleIcons = [
        { Icon: FaLightbulb, className: 'top-[42%] left-[6%]', color: 'text-pink-400' },
        { Icon: FaPenNib, className: 'top-[47%] right-[6%]', color: 'text-pink-300' }
    ];
    return (_jsxs(motion.div, { style: { rotateX, rotateY }, className: "absolute inset-0 w-full h-full pointer-events-none", children: [primaryIcons.map(({ Icon, className, color }, i) => (_jsx(PositionedIcon, { Icon: Icon, className: className, animation: { scale: [1, 1.2, 1] }, index: i, color: color }, `primary-${i}`))), showSubtitle && subtitleIcons.map(({ Icon, className, color }, i) => (_jsx(PositionedIcon, { Icon: Icon, className: className, animation: { scale: [1, 1.2, 1] }, index: i + 2, color: color }, `sub-${i}`)))] }));
}
export function StudyAnimation({ rotateX, rotateY, showSubtitle }) {
    const primaryIcons = [
        { Icon: FaGraduationCap, className: 'top-[30%] left-[6%]', color: 'text-purple-400' },
        { Icon: FaBook, className: 'top-[35%] right-[6%]', color: 'text-purple-300' }
    ];
    const subtitleIcons = [
        { Icon: FaChalkboardTeacher, className: 'top-[42%] left-[6%]', color: 'text-purple-400' },
        { Icon: FaLightbulb, className: 'top-[47%] right-[6%]', color: 'text-purple-300' }
    ];
    return (_jsxs(motion.div, { style: { rotateX, rotateY }, className: "absolute inset-0 w-full h-full pointer-events-none", children: [primaryIcons.map(({ Icon, className, color }, i) => (_jsx(PositionedIcon, { Icon: Icon, className: className, animation: { y: [0, -12, 0] }, index: i, color: color }, `primary-${i}`))), showSubtitle && subtitleIcons.map(({ Icon, className, color }, i) => (_jsx(PositionedIcon, { Icon: Icon, className: className, animation: { y: [0, -12, 0] }, index: i + 2, color: color }, `sub-${i}`)))] }));
}
