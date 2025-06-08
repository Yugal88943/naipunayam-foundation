  import aboutUsVideo from '@/assets/About-Section/about_naipunayam_foundation_background.mp4';

  const AboutComponentBackgroundImages = () => (
      <section className="w-full mt-[1px]">
      <video
        src={aboutUsVideo}
        autoPlay
        muted
        playsInline
        className="w-full aspect-[16/9] object-cover object-center"
        draggable={false}
      />
    </section>
  );
  export default AboutComponentBackgroundImages;