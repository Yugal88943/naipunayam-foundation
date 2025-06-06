// import partnerWithUsImage from '@/assets/Get-Involved-Section/Partner_With_Us.png';
import partnerWithUsVideo from '@/assets/Get-Involved-Section/join_hands_with_naipunayam_foundation.mp4';

const PartnerWithUsComponentBackgroundImage = () => (
  <section className="w-full mt-[1px]">
    <video
      src={partnerWithUsVideo}
      // alt="Partner With Us"
      className="w-full aspect-[16/9] object-cover object-center"
      draggable={false}
      autoPlay
      muted
    />
  </section>
);

export default PartnerWithUsComponentBackgroundImage;
