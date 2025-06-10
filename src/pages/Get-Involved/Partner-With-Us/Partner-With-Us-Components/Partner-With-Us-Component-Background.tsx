import partnerWithUsVideo from '@/assets/Get-Involved-Section/join_hands_with_naipunayam_foundation.webm';

const PartnerWithUsComponentBackgroundImage = () => (
  <section className="w-full mt-[1px]">
    <video
      src={partnerWithUsVideo}
      autoPlay
      muted
      playsInline
      className="w-full aspect-[16/9] object-cover object-center"
      draggable={false}
      controls={false}
  disablePictureInPicture
  controlsList="nodownload nofullscreen noremoteplayback"
    />
  </section>
);

export default PartnerWithUsComponentBackgroundImage;
