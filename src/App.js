import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "relative", children: [" ", _jsx(Header, {}), _jsx(ScrollToTop, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/contact-us", element: _jsx(ContactUs, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutUs, {}) }), _jsx(Route, { path: "/initiatives/hanzas", element: _jsx(HanzaS, {}) }), _jsx(Route, { path: "/initiatives/vihaas-design-technologies", element: _jsx(VihaasDesignTechnologies, {}) }), _jsx(Route, { path: "/initiatives/vihaas-tech-pro", element: _jsx(VihaasTechPro, {}) }), _jsx(Route, { path: "/get-involved/volunteer", element: _jsx(Volunteer, {}) }), _jsx(Route, { path: "/get-involved/partner-with-us", element: _jsx(PartnerWithUs, {}) }), _jsx(Route, { path: "/blog-news", element: _jsx(BlogNews, {}) }), _jsx(Route, { path: "/blog-news/women_empowerment", element: _jsx(BlogNewsDetailHanzaS, {}) }), _jsx(Route, { path: "/blog-news/women_empowerment_hanzas", element: _jsx(BlogNewsDetailHanzaS2, {}) }), _jsx(Route, { path: "/blog-news/vihaas-design-technologies", element: _jsx(BlogNewsDetailVihaasDesign, {}) }), _jsx(Route, { path: "/blog-news/free-soldering-training", element: _jsx(BlogNewsDetailSolderingTraining, {}) }), _jsx(Route, { path: "/blog-news/vihaas-tech-pro-1", element: _jsx(BlogNewsDetailVihaasTechPro1, {}) }), _jsx(Route, { path: "/blog-news/vihaas-tech-pro-2", element: _jsx(BlogNewsDetailVihaasTechPro2, {}) }), _jsx(Route, { path: "/gallery", element: _jsx(Gallery, {}) })] }), _jsx(Footer, {})] }));
}
export default App;
