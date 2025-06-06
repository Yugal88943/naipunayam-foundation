// src/pages/About/About-Main-File/AboutUs.tsx

import AboutComponentIntro from '../About-Components/About-Component-Intro';
import AboutComponentBackgroundImages from '../About-Components/About-Component-Background-Images';
import AboutComponentFounders from '../About-Components/About-Component-Founders';
import AboutComponentMission from '../About-Components/About-Component-Mission';
import AboutComponentVision from '../About-Components/About-Component-Vision';
import AboutComponentImpactAchieved from '../About-Components/About-Component-Impact-Achieved';
import AboutComponentWhatPeopleSay from '../About-Components/About-Component-What-People-Say';
import AboutComponentFAQs from '../About-Components/About-Component-FAQs';


// import other About components as you create them

const AboutUs = () => {
  return (
    <div>
      <AboutComponentBackgroundImages />
      {/* This component can be used for background images or effects */}  
      <AboutComponentIntro />
      <AboutComponentFounders />
      <AboutComponentMission />
      <AboutComponentVision />
      <AboutComponentImpactAchieved />
      <AboutComponentWhatPeopleSay />
      <AboutComponentFAQs />
      {/* Add more About section components below as you build them */}
    </div>
  );
};

export default AboutUs;
