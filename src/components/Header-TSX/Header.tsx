import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import logo from '../../assets/Logo-Naipunayam/logo.webp';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
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

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full bg-white/80 text-black backdrop-blur-md shadow-md scroll-smooth"
      style={{ backgroundColor: 'rgba(255,255,255,0.8)', WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}
    >
      <div className="relative max-w-[1440px] mx-auto w-full flex items-center justify-between px-4 py-3">
        <Link to="/" onClick={closeMenu}>
          <motion.div
            className="flex items-center space-x-3 min-w-0 flex-shrink hover:scale-105 transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img src={logo} alt="Naipunayam Logo" className="h-12 w-12 rounded-full shadow-lg" />
            <span className="truncate text-base sm:text-lg md:text-xl font-semibold whitespace-nowrap">
              <span className="text-blue-500 font-extrabold">Naipunayam</span>{' '}
              <span className="text-green-400 font-bold">Foundation</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.subItems ? (
                <>
                  <button className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:drop-shadow-xl">
                    {item.name} <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-60 bg-white text-black rounded-md shadow-lg py-2 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto invisible group-hover:visible transition-all duration-300 ease-in-out z-50 border border-gray-200 delay-150">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 hover:drop-shadow-lg rounded-md"
                        onClick={closeMenu}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.href}
                  className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 hover:drop-shadow-xl"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Social + CTA desktop */}
        <div className="hidden xl:flex items-center space-x-4">
          <a href="https://www.instagram.com/naipunayam/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600 text-lg transition-transform duration-200 hover:scale-110"><FaInstagram /></a>
          <a href="https://www.facebook.com/naipunayam" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 text-lg transition-transform duration-200 hover:scale-110"><FaFacebookF /></a>
          <Link
            to="/contact-us"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold text-sm transition-transform duration-200 hover:scale-110 shadow-lg"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="xl:hidden ml-auto" ref={menuRef}>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white text-black px-4 pb-4"
          >
            {navItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <details className="group">
                    <summary className="cursor-pointer py-2 text-gray-800 font-medium">
                      {item.name}
                    </summary>
                    <div className="pl-4">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block py-2 text-gray-800 hover:text-blue-600"
                          onClick={closeMenu}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-2 text-gray-800 hover:text-blue-600"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://www.instagram.com/naipunayam/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600 text-lg"><FaInstagram /></a>
              <a href="https://www.facebook.com/naipunayam" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 text-lg"><FaFacebookF /></a>
            </div>

            <Link
              to="/contact-us"
              className="block mt-4 bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-md font-semibold shadow-md"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
