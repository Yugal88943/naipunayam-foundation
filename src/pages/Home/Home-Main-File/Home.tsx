// src/Pages/Home/Home-Main-File/Home.tsx

import HomeComponentIntro from '@/pages/Home/Home-Components/Home-Component-Intro';
import HomeComponentAbout from '@/pages/Home/Home-Components/Home-Component-About';
import HomeComponentSustainableDevelopment from '@/pages/Home/Home-Components/Home-Component-Sustainable-Development';
import HomeComponentOurInitiatives from '@/pages/Home//Home-Components/Home-Component-Our-Initiatives'; 
import HomeComponentVolunteerSupport from '@/pages//Home/Home-Components/Home-Component-Volunteer-Support';
const Home = () => {
  return (
    <div>
     
      <HomeComponentIntro />
      <HomeComponentAbout />
      <HomeComponentSustainableDevelopment />
      <HomeComponentOurInitiatives />
      <HomeComponentVolunteerSupport />

      {/* Additional components can be added here as needed */}
    </div>
  );
};

export default Home;
