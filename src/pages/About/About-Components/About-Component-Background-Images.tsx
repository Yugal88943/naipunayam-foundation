  import aboutUsVideo from '@/assets/About-Section/about_naipunayam_foundation_background.webm';

  const AboutComponentBackgroundImages = () => (
      <section className="w-full mt-[1px]">
      <video
        src={aboutUsVideo}
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
  export default AboutComponentBackgroundImages;