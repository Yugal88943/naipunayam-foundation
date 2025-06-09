// HanzaS.tsx
import React from "react";
import HanzaSComponentBackground from '../HanzaS-Components/HanzaS-Component-Background';
import HanzaSComponentIntro from "../HanzaS-Components/HanzaS-Component-Intro";
import HanzaSComponentVision from "../HanzaS-Components/HanzaS-Component-Vision";
import HanzaSComponentMission from "../HanzaS-Components/HanzaS-Component-Mission";
import HanzaSComponentProgramIntro from "../HanzaS-Components/HanzaS-Component-ProgramIntro";
import HanzaSComponentProgramBenefit from "../HanzaS-Components/HanzaS-Component-ProgramBenefit";
import HanzaSComponentWhoCanJoin from "../HanzaS-Components/HanzaS-Component-WhoCanJoin";
import HanzaSComponentFAQs from "../HanzaS-Components/HanzaS-Component-FAQs";

const HanzaS: React.FC = () => {
  return (
    <div>
      {/* Hero/Background Section */}
      <HanzaSComponentBackground />
      <HanzaSComponentIntro />
      <HanzaSComponentVision />
      <HanzaSComponentMission />
      <HanzaSComponentProgramIntro />
      <HanzaSComponentProgramBenefit />
      <HanzaSComponentWhoCanJoin />
      <HanzaSComponentFAQs />
    </div>
  );
};

export default HanzaS;
