import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import logo from '../../assets/Logo-Naipunayam/logo.png';
import { Link } from 'react-router-dom';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    const menuRef = useRef(null);
    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target)) {
                closeMenu();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        {
            name: 'Our Initiatives',
            subItems: [
                { name: 'Vihaas Design Technologies', href: '/initiatives/vihaas-design-technologies' },
                { name: 'Vihaas Tech Pro', href: '/initiatives/vihaas-tech-pro' },
                { name: 'HanzaS', href: '/initiatives/hanzas' }
            ]
        },
        {
            name: 'Get Involved',
            subItems: [
                { name: 'Partner With Us', href: '/get-involved/partner-with-us' },
                { name: 'Volunteer', href: '/get-involved/volunteer' }
            ]
        },
        { name: 'Blog & News', href: '/blog-news' },
        { name: 'Gallery', href: '/gallery' }
    ];
    return (_jsxs(motion.header, { initial: { y: -80, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.8, ease: 'easeOut' }, className: "sticky top-0 z-50 w-full bg-white/80 text-black backdrop-blur-md shadow-md scroll-smooth", style: { backgroundColor: 'rgba(255,255,255,0.8)', WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }, children: [_jsxs("div", { className: "relative max-w-[1440px] mx-auto w-full flex items-center justify-between px-4 py-3", children: [_jsx(Link, { to: "/", onClick: closeMenu, children: _jsxs(motion.div, { className: "flex items-center space-x-3 min-w-0 flex-shrink hover:scale-105 transition-transform duration-300 ease-in-out", whileHover: { scale: 1.05 }, transition: { type: 'spring', stiffness: 200 }, children: [_jsx("img", { src: logo, alt: "Naipunayam Logo", className: "h-12 w-12 rounded-full shadow-lg" }), _jsxs("span", { className: "truncate text-base sm:text-lg md:text-xl font-semibold whitespace-nowrap", children: [_jsx("span", { className: "text-blue-500 font-extrabold", children: "Naipunayam" }), ' ', _jsx("span", { className: "text-green-400 font-bold", children: "Foundation" })] })] }) }), _jsx("nav", { className: "hidden xl:flex flex-1 justify-center items-center space-x-6 text-sm font-medium", children: navItems.map((item) => (_jsx("div", { className: "relative group", children: item.subItems ? (_jsxs(_Fragment, { children: [_jsxs("button", { className: "flex items-center text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:drop-shadow-xl", children: [item.name, " ", _jsx(ChevronDown, { className: "ml-1 w-4 h-4" })] }), _jsx("div", { className: "absolute left-0 mt-2 w-60 bg-white text-black rounded-md shadow-lg py-2 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto invisible group-hover:visible transition-all duration-300 ease-in-out z-50 border border-gray-200 delay-150", children: item.subItems.map((sub) => (_jsx(Link, { to: sub.href, className: "block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 hover:drop-shadow-lg rounded-md", onClick: closeMenu, children: sub.name }, sub.name))) })] })) : (_jsx(Link, { to: item.href, className: "text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 hover:drop-shadow-xl", onClick: closeMenu, children: item.name })) }, item.name))) }), _jsxs("div", { className: "hidden xl:flex items-center space-x-4", children: [_jsx("a", { href: "https://www.instagram.com/naipunayam/", target: "_blank", rel: "noopener noreferrer", className: "text-gray-700 hover:text-pink-600 text-lg transition-transform duration-200 hover:scale-110", children: _jsx(FaInstagram, {}) }), _jsx("a", { href: "https://www.facebook.com/naipunayam", target: "_blank", rel: "noopener noreferrer", className: "text-gray-700 hover:text-blue-500 text-lg transition-transform duration-200 hover:scale-110", children: _jsx(FaFacebookF, {}) }), _jsx(Link, { to: "/contact-us", className: "bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold text-sm transition-transform duration-200 hover:scale-110 shadow-lg", onClick: closeMenu, children: "Contact Us" })] }), _jsx("div", { className: "xl:hidden ml-auto", ref: menuRef, children: _jsx("button", { onClick: toggleMenu, children: isOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) }) })] }), _jsx(AnimatePresence, { children: isOpen && (_jsxs(motion.nav, { ref: menuRef, initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.3 }, className: "xl:hidden bg-white text-black px-4 pb-4", children: [navItems.map((item) => (_jsx("div", { children: item.subItems ? (_jsxs("details", { className: "group", children: [_jsx("summary", { className: "cursor-pointer py-2 text-gray-800 font-medium", children: item.name }), _jsx("div", { className: "pl-4", children: item.subItems.map((sub) => (_jsx(Link, { to: sub.href, className: "block py-2 text-gray-800 hover:text-blue-600", onClick: closeMenu, children: sub.name }, sub.name))) })] })) : (_jsx(Link, { to: item.href, className: "block py-2 text-gray-800 hover:text-blue-600", onClick: closeMenu, children: item.name })) }, item.name))), _jsxs("div", { className: "flex justify-center space-x-6 mt-4", children: [_jsx("a", { href: "https://www.instagram.com/naipunayam/", target: "_blank", rel: "noopener noreferrer", className: "text-gray-700 hover:text-pink-600 text-lg", children: _jsx(FaInstagram, {}) }), _jsx("a", { href: "https://www.facebook.com/naipunayam", target: "_blank", rel: "noopener noreferrer", className: "text-gray-700 hover:text-blue-500 text-lg", children: _jsx(FaFacebookF, {}) })] }), _jsx(Link, { to: "/contact-us", className: "block mt-4 bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-md font-semibold shadow-md", onClick: closeMenu, children: "Contact Us" })] })) })] }));
}
