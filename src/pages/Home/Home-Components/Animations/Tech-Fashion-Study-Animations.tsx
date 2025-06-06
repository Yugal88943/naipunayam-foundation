import { motion, MotionValue } from 'framer-motion';
import {
  FaLaptopCode,
  FaRobot,
  FaGraduationCap,
  FaBook,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaCodeBranch,
  FaServer,
  FaPenNib,
  FaLightbulb
} from 'react-icons/fa';

interface Props {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  showSubtitle: boolean;
}

const PositionedIcon = ({ Icon, className, animation, index, color }: { Icon: any; className: string; animation: any; index: number; color: string }) => (
  <motion.div
    drag
    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
    animate={animation}
    transition={{ duration: 3 + index, repeat: Infinity }}
    className={`absolute ${className} text-[24px] sm:text-[28px] md:text-[32px] lg:text-[42px] xl:text-[50px] ${color} opacity-30 pointer-events-auto z-0`}
  >
    <Icon />
  </motion.div>
);

export function TechAnimation({ rotateX, rotateY, showSubtitle }: Props) {
  const primaryIcons = [
    { Icon: FaLaptopCode, className: 'top-[30%] left-[7%]', color: 'text-blue-400' },
    { Icon: FaRobot, className: 'top-[35%] right-[7%]', color: 'text-blue-300' }
  ];
  const subtitleIcons = [
    { Icon: FaCodeBranch, className: 'top-[42%] left-[6%]', color: 'text-blue-400' },
    { Icon: FaServer, className: 'top-[47%] right-[6%]', color: 'text-blue-400' }
  ];
  return (
    <motion.div style={{ rotateX, rotateY }} className="absolute inset-0 w-full h-full pointer-events-none">
      {primaryIcons.map(({ Icon, className, color }, i) => (
        <PositionedIcon key={`primary-${i}`} Icon={Icon} className={className} animation={{ y: [0, -10, 0] }} index={i} color={color} />
      ))}
      {showSubtitle && subtitleIcons.map(({ Icon, className, color }, i) => (
        <PositionedIcon key={`sub-${i}`} Icon={Icon} className={className} animation={{ y: [0, -10, 0] }} index={i + 2} color={color} />
      ))}
    </motion.div>
  );
}

export function FashionAnimation({ rotateX, rotateY, showSubtitle }: Props) {
  const primaryIcons = [
    { Icon: FaChalkboardTeacher, className: 'top-[30%] left-[6%]', color: 'text-pink-400' },
    { Icon: FaUserGraduate, className: 'top-[35%] right-[6%]', color: 'text-pink-300' }
  ];
  const subtitleIcons = [
    { Icon: FaLightbulb, className: 'top-[42%] left-[6%]', color: 'text-pink-400' },
    { Icon: FaPenNib, className: 'top-[47%] right-[6%]', color: 'text-pink-300' }
  ];
  return (
    <motion.div style={{ rotateX, rotateY }} className="absolute inset-0 w-full h-full pointer-events-none">
      {primaryIcons.map(({ Icon, className, color }, i) => (
        <PositionedIcon key={`primary-${i}`} Icon={Icon} className={className} animation={{ scale: [1, 1.2, 1] }} index={i} color={color} />
      ))}
      {showSubtitle && subtitleIcons.map(({ Icon, className, color }, i) => (
        <PositionedIcon key={`sub-${i}`} Icon={Icon} className={className} animation={{ scale: [1, 1.2, 1] }} index={i + 2} color={color} />
      ))}
    </motion.div>
  );
}

export function StudyAnimation({ rotateX, rotateY, showSubtitle }: Props) {
  const primaryIcons = [
    { Icon: FaGraduationCap, className: 'top-[30%] left-[6%]', color: 'text-purple-400' },
    { Icon: FaBook, className: 'top-[35%] right-[6%]', color: 'text-purple-300' }
  ];
  const subtitleIcons = [
    { Icon: FaChalkboardTeacher, className: 'top-[42%] left-[6%]', color: 'text-purple-400' },
    { Icon: FaLightbulb, className: 'top-[47%] right-[6%]', color: 'text-purple-300' }
  ];
  return (
    <motion.div style={{ rotateX, rotateY }} className="absolute inset-0 w-full h-full pointer-events-none">
      {primaryIcons.map(({ Icon, className, color }, i) => (
        <PositionedIcon key={`primary-${i}`} Icon={Icon} className={className} animation={{ y: [0, -12, 0] }} index={i} color={color} />
      ))}
      {showSubtitle && subtitleIcons.map(({ Icon, className, color }, i) => (
        <PositionedIcon key={`sub-${i}`} Icon={Icon} className={className} animation={{ y: [0, -12, 0] }} index={i + 2} color={color} />
      ))}
    </motion.div>
  );
}
