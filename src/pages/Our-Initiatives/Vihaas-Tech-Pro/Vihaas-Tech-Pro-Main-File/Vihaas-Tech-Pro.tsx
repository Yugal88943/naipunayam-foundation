import React from "react";
import VihaasTechProComponentBackground from "../Vihaas-Tech-Pro-Components/Vihaas-Tech-Pro-Component-Background";
import VihaasTechProComponentIntro from "../Vihaas-Tech-Pro-Components/Vihaas-Tech-Pro-Component-Intro";
import VihaasTechProComponentMission from "../Vihaas-Tech-Pro-Components/Vihaas-Tech-Pro-Component-Mission";
import VihaasTechProComponentPrograms from "../Vihaas-Tech-Pro-Components/Vihaas-Tech-Pro-Component-Programs";
import FAQSection from "../Vihaas-Tech-Pro-Components/Vihaas-Tech-Pro-Component-FAQ";

const VihaasTechPro: React.FC = () => (
<div>
   
    <VihaasTechProComponentBackground />
    <VihaasTechProComponentIntro />
    <VihaasTechProComponentMission />
    <VihaasTechProComponentPrograms />
    <FAQSection />
</div>
);

export default VihaasTechPro;
