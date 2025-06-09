// ContactCardsSection.tsx
import GeneralInquiryCard from "./Contact-Us-Component-General-Inquiry";
import CallUsCard from "./Contact-Us-Component-Call-Us";
import LocationAddressCard from "./Contact-Us-Component-Location-Address";

const ContactCardsSection = () => (

  <div className="w-full bg-gradient-to-br from-white to-gray-50">
      <div
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 px-2 py-10 justify-items-center items-stretch"
      style={{ minHeight: '1px', justifyContent: 'center' }}
    >
      <GeneralInquiryCard />
      <CallUsCard />
      <LocationAddressCard />
    </div>
  </div>
);

export default ContactCardsSection;
