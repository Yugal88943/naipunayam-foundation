// src/pages/Contact-Us/Contact-Us.tsx

import ContactUsComponentIntro from '../Contact-Us-Components/Contact-Us-Component-Intro';
import ContactCardsSection from '../Contact-Us-Components/ContactCardsSection';
import ContactLocationMap from '../Contact-Us-Components/Contact-Us-Component-Location-Map';

// Make sure the file exists at the specified
// Add more imports if you make other Contact Us components

const ContactUs = () => {
  return (
    <div>
      <ContactUsComponentIntro />
      <ContactCardsSection />
      <ContactLocationMap />
      {/* Add more sections or components as needed */}
    </div>
  );
};

export default ContactUs;
