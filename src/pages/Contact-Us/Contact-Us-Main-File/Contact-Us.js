import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/Contact-Us/Contact-Us.tsx
import ContactUsComponentIntro from '../Contact-Us-Components/Contact-Us-Component-Intro';
import ContactCardsSection from '../Contact-Us-Components/ContactCardsSection';
import ContactLocationMap from '../Contact-Us-Components/Contact-Us-Component-Location-Map';
const ContactUs = () => {
    return (_jsxs("div", { children: [_jsx(ContactUsComponentIntro, {}), _jsx(ContactCardsSection, {}), _jsx(ContactLocationMap, {})] }));
};
export default ContactUs;
