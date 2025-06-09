// src/pages/Contact-Us/Contact-Us.tsx
import ContactUsComponentIntro from '../Contact-Us-Components/Contact-Us-Component-Intro';
import ContactCardsSection from '../Contact-Us-Components/ContactCardsSection';
import ContactLocationMap from '../Contact-Us-Components/Contact-Us-Component-Location-Map';

const ContactUs = () => {
  return (
    <div>
      <ContactUsComponentIntro />
      <ContactCardsSection />
      <ContactLocationMap />
    </div>
  );
};

export default ContactUs;
