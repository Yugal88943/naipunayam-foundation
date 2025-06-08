// import { useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';

// //Header
// import Header from '@/components/Header-TSX/Header';
// //Footer
// import Footer from './components/Footer-TSX/Footer';
// //Home Section
// import Home from './pages/Home/Home-Main-File/Home';
// //Contact Us Section
// import ContactUs from './pages/Contact-Us/Contact-Us-Main-File/Contact-Us';
// //About Us Section
// import AboutUs from './pages/About/About-Main-File/AboutUs';
// //Our Initiatives Section
// import HanzaS from './pages/Our-Initiatives/HanzaS/HanzaS-Main-File/HanzaS';
// import VihaasDesignTechnologies from './pages/Our-Initiatives/Vihaas-Design-Technologies/Vihaas-Design-Technologies-Main-File/Vihaas-Design-Technologies';
// import VihaasTechPro from "./pages/Our-Initiatives/Vihaas-Tech-Pro/Vihaas-Tech-Pro-Main-File/Vihaas-Tech-Pro";
// //Get Involved Section
// import Volunteer from './pages/Get-Involved/Volunteer/Volunteer-Main-File/Volunteer';
// import PartnerWithUs from './pages/Get-Involved/Partner-With-Us/Partner-With-Us-Main-File/Partner-With-Us';
// //Blog & News Section
// import BlogNews from './pages/Blog-News/Blog-News-Main-File/Blog-News';
// import BlogNewsDetailHanzaS from './pages/Blog-News/Blog-News-Components/BlogNewsDetailHanzaS';
// import BlogNewsDetailHanzaS2 from "@/pages/Blog-News/Blog-News-Components/BlogNewsDetailHanzaS2";
// import BlogNewsDetailVihaasDesign from "@/pages/Blog-News/Blog-News-Components/BlogNewsDetailVihaasDesign";
// import BlogNewsDetailSolderingTraining from "@/pages/Blog-News/Blog-News-Components/BlogNewsDetailSolderingTraining";
// import BlogNewsDetailVihaasTechPro1 from "@/pages/Blog-News/Blog-News-Components/BlogNewsDetailVihaasTechPro1";
// import BlogNewsDetailVihaasTechPro2 from "@/pages/Blog-News/Blog-News-Components/BlogNewsDetailVihaasTechPro2";
// //Gallery Section
// import Gallery from './pages/Gallery/Gallery-Main-File/Gallery';
// //Scroller : React + Vite : Default Missing So that's Why
// import ScrollToTop from "./components/ScrollToTop";

// function App() {
//   // Viewport fix for iOS/Safari: Apple products creating issues so that's why
//   useEffect(() => {
//     const setVh = () => {
//       document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
//     };
//     setVh();
//     window.addEventListener('resize', setVh);
//     return () => window.removeEventListener('resize', setVh);
//   }, []);

//   return (
//     <>
//       <Header />
//       <ScrollToTop />  
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/initiatives/hanzas" element={<HanzaS />} />
//         <Route path="/initiatives/vihaas-design-technologies" element={<VihaasDesignTechnologies />} />
//         <Route path="/initiatives/vihaas-tech-pro" element={<VihaasTechPro />} />
//         <Route path="/get-involved/volunteer" element={<Volunteer />} />
//         <Route path="/get-involved/partner-with-us" element={<PartnerWithUs />} />
//         //Blog and News
//         <Route path="/blog-news" element={<BlogNews />} />
//         <Route path="/blog-news/1" element={<BlogNewsDetailHanzaS />} />
//         <Route path="/blog-news/2" element={<BlogNewsDetailHanzaS2 />} />
//         <Route path="/blog-news/vihaas-design-technologies" element={<BlogNewsDetailVihaasDesign />} />
//         <Route path="/blog-news/free-soldering-training" element={<BlogNewsDetailSolderingTraining />} />
//         <Route path="/blog-news/vihaas-tech-pro-1" element={<BlogNewsDetailVihaasTechPro1 />} />
//         <Route path="/blog-news/vihaas-tech-pro-2" element={<BlogNewsDetailVihaasTechPro2 />} />


//         <Route path="/gallery" element={<Gallery />} />
     
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

//New Code
// src/App.tsx
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Header & Footer
import Header from '@/components/Header-TSX/Header';
import Footer from './components/Footer-TSX/Footer';

// Scroll to top on route change
import ScrollToTop from "./components/ScrollToTop";

// Home
import Home from './pages/Home/Home-Main-File/Home';

// Contact Us
import ContactUs from './pages/Contact-Us/Contact-Us-Main-File/Contact-Us';

// About Us
import AboutUs from './pages/About/About-Main-File/AboutUs';

// Our Initiatives
import HanzaS from './pages/Our-Initiatives/HanzaS/HanzaS-Main-File/HanzaS';
import VihaasDesignTechnologies from './pages/Our-Initiatives/Vihaas-Design-Technologies/Vihaas-Design-Technologies-Main-File/Vihaas-Design-Technologies';
import VihaasTechPro from "./pages/Our-Initiatives/Vihaas-Tech-Pro/Vihaas-Tech-Pro-Main-File/Vihaas-Tech-Pro";

// Get Involved
import Volunteer from './pages/Get-Involved/Volunteer/Volunteer-Main-File/Volunteer';
import PartnerWithUs from './pages/Get-Involved/Partner-With-Us/Partner-With-Us-Main-File/Partner-With-Us';

// Blog & News
import BlogNews from './pages/Blog-News/Blog-News-Main-File/Blog-News';
import BlogNewsDetailHanzaS from './pages/Blog-News/Blog-News-Components/BlogNewsDetailHanzaS';
import BlogNewsDetailHanzaS2 from "@/pages/Blog-News/Blog-News-Components/BlogNewsDetailHanzaS2";
import BlogNewsDetailVihaasDesign from "@/pages/Blog-News/Blog-News-Components/BlogNewsDetailVihaasDesign";
import BlogNewsDetailSolderingTraining from "@/pages/Blog-News/Blog-News-Components/BlogNewsDetailSolderingTraining";
import BlogNewsDetailVihaasTechPro1 from "@/pages/Blog-News/Blog-News-Components/BlogNewsDetailVihaasTechPro1";
import BlogNewsDetailVihaasTechPro2 from "@/pages/Blog-News/Blog-News-Components/BlogNewsDetailVihaasTechPro2";

// Gallery
import Gallery from './pages/Gallery/Gallery-Main-File/Gallery';

function App() {
  // iOS Safari viewport height fix
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <div className="relative"> {/* Prevents scroll offset errors */}
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Initiatives */}
        <Route path="/initiatives/hanzas" element={<HanzaS />} />
        <Route path="/initiatives/vihaas-design-technologies" element={<VihaasDesignTechnologies />} />
        <Route path="/initiatives/vihaas-tech-pro" element={<VihaasTechPro />} />

        {/* Get Involved */}
        <Route path="/get-involved/volunteer" element={<Volunteer />} />
        <Route path="/get-involved/partner-with-us" element={<PartnerWithUs />} />

        {/* Blog + News */}
        <Route path="/blog-news" element={<BlogNews />} />
        <Route path="/blog-news/1" element={<BlogNewsDetailHanzaS />} />
        <Route path="/blog-news/2" element={<BlogNewsDetailHanzaS2 />} />
        <Route path="/blog-news/vihaas-design-technologies" element={<BlogNewsDetailVihaasDesign />} />
        <Route path="/blog-news/free-soldering-training" element={<BlogNewsDetailSolderingTraining />} />
        <Route path="/blog-news/vihaas-tech-pro-1" element={<BlogNewsDetailVihaasTechPro1 />} />
        <Route path="/blog-news/vihaas-tech-pro-2" element={<BlogNewsDetailVihaasTechPro2 />} />

        {/* Gallery */}
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

