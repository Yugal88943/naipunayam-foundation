import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/Home/Home-Main-File/Home.tsx
import HomeComponentIntro from '@/pages/Home/Home-Components/Home-Component-Intro';
import HomeComponentAbout from '@/pages/Home/Home-Components/Home-Component-About';
import HomeComponentSustainableDevelopment from '@/pages/Home/Home-Components/Home-Component-Sustainable-Development';
import HomeComponentOurInitiatives from '@/pages/Home/Home-Components/Home-Component-Our-Initiatives';
import HomeComponentVolunteerSupport from '@/pages/Home/Home-Components/Home-Component-Volunteer-Support';
const Home = () => {
    return (_jsxs("div", { className: "w-full", children: [_jsx(HomeComponentIntro, {}), _jsx(HomeComponentAbout, {}), _jsx(HomeComponentSustainableDevelopment, {}), _jsx(HomeComponentOurInitiatives, {}), _jsx(HomeComponentVolunteerSupport, {})] }));
};
export default Home;
