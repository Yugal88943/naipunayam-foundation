import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../../assets/Logo-Naipunayam/logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black w-full pt-10 pb-6 px-4 md:px-16 mt-auto mb-0">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
        
        {/* About Section with Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={logo} alt="Naipunayam Logo" className="h-14 w-14 mb-3 rounded-full shadow-md" />
          <h2 className="text-xl font-semibold mb-3 font-serif tracking-wide text-gray-800">
            Naipunayam Foundation
          </h2>
          <p className="text-sm text-gray-600 text-justify leading-relaxed font-light">
            Empowering communities with education, innovation and values. Our mission is to uplift through skill, sustainability, and inclusion.
          </p>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm text-gray-700">
            <Link to="/about" className="hover:text-blue-600 transition duration-300 ease-in-out hover:translate-x-1 hover:scale-105">About Us</Link>
            <Link to="/initiatives/vihaas-design-technologies" className="hover:text-blue-500 transition">Vihaas Design Technologies</Link>
            <Link to="/initiatives/vihaas-tech-pro" className="hover:text-blue-500 transition">Vihaas Tech Pro</Link>
            <Link to="/initiatives/hanzas" className="hover:text-blue-500 transition">HanzaS</Link>
            <Link to="/get-involved/partner-with-us" className="hover:text-blue-500 transition">Partner With Us</Link>
            <Link to="/get-involved/volunteer" className="hover:text-blue-500 transition">Volunteer</Link>
            <Link to="/gallery" className="hover:text-blue-500 transition">Gallery</Link>
            <Link to="/contact-us" className="hover:text-blue-500 transition">Contact Us</Link>
          </div>
        </motion.div>

        {/* Social + Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center flex flex-col items-center justify-start md:justify-center h-full md:col-span-2 lg:col-span-1"
        >
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.instagram.com/naipunayam/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-800 hover:text-pink-600 text-xl transition duration-300 transform hover:scale-110 hover:-translate-y-1"><FaInstagram /></a>
            <a href="https://www.facebook.com/naipunayam" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-800 hover:text-blue-500 text-xl transition duration-300 transform hover:scale-110 hover:-translate-y-1"><FaFacebookF /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-800 hover:text-blue-400 text-xl transition duration-300 transform hover:scale-110 hover:-translate-y-1"><FaLinkedinIn /></a>
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Naipunayam Foundation. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
