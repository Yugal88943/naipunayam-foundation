import aboutUsVideo from '@/assets/About-Section/about_naipunayam_foundation_background.mp4';



const AboutComponentBackgroundImages = () => (
    <section className="w-full mt-[1px]">
    {/* <img
      src={aboutUsImage}
      alt="About Naipunayam Foundation"
      className="w-full h-[340px] sm:h-[420px] md:h-[500px] lg:h-[580px] xl:h-[640px] object-cover object-center"
      draggable={false}
    /> */}
    <video
  src={aboutUsVideo}
  // alt="About Naipunayam Foundation"
  className="w-full aspect-[16/9] object-cover object-center"
  
  autoPlay
  
  muted
  draggable={false}
/>

  </section>
  
);

export default AboutComponentBackgroundImages;
