import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../assets/V-Lead_Logo1-2048x488.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
    { name: "About Us", path: "/aboutus" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-16">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logoImg}
            alt="V-Lead Logo"
            className="h-9 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* DESKTOP NAV - Updated Styling */}
        <nav className="hidden md:flex items-center gap-2"> {/* Reduced gap here */}
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md' // Active state: blue background, white text
                    : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700' // Inactive: hover effect
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium
                       hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl
                       transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Get in Touch
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-gray-800 hover:text-blue-600 transition-colors p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-40 md:hidden transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          <nav className="flex flex-col space-y-6 flex-grow">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-2xl font-semibold ${
                    isActive ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
                  } transition-colors duration-200`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="mt-8">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-blue-600 text-white py-4 rounded-full font-semibold text-lg
                         hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;