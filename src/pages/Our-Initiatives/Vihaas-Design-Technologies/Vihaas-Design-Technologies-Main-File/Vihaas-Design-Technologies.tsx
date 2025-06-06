import React from "react";
import VihaasDesignTechnologiesComponentBackground from "../Vihaas-Design-Technologies-Components/Vihaas-Design-Technologies-Component-Background";
import VihaasDesignTechnologiesComponentIntro from "../Vihaas-Design-Technologies-Components/Vihaas-Design-Technologies-Component-Intro";
import VihaasDesignTechnologiesComponentAbout from "../Vihaas-Design-Technologies-Components/Vihaas-Design-Technologies-Component-About";
import VihaasDesignTechnologiesComponentProgramIntro from "../Vihaas-Design-Technologies-Components/Vihaas-Design-Technologies-Component-ProgramIntro";
import VihaasWhoCanJoinSection from "../Vihaas-Design-Technologies-Components/Vihaas-Design-Technologies-Component-WhoCanJoin";
import VisionComponent from "../Vihaas-Design-Technologies-Components/Vihaas-Design-Technologies-Component-Vision";
import VihaasDesignTechnologiesComponentFAQ from "../Vihaas-Design-Technologies-Components/Vihaas-Design-Technologies-Component-FAQ";
// import { FlippableCardsProgramIntro } from "../Vihaas-Design-Technologies-Components/Vihaas-Design-Technologies-Component-ProgramIntro";

const VihaasDesignTechnologies: React.FC = () => (
  <div>
    {/* Background/Hero Image */}
    <VihaasDesignTechnologiesComponentBackground />
    
    <VihaasDesignTechnologiesComponentAbout />
    <VisionComponent />
    <VihaasDesignTechnologiesComponentIntro />
    <VihaasDesignTechnologiesComponentProgramIntro />
    {/* <FlippableCardsProgramIntro /> */}
    <VihaasWhoCanJoinSection />
    <VihaasDesignTechnologiesComponentFAQ />
    
  </div>
);

export default VihaasDesignTechnologies;
