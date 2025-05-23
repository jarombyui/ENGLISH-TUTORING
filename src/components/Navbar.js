import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const menuItems = [
    { name: 'INICIO', path: '/' },
    { name: '¿QUIÉNES SOMOS?', path: '/about' },
    { name: 'CURSOS', path: '/cursos' },
    { name: 'SERVICIOS', path: '/servicios' },
    { name: 'BUZÓN DE SUGERENCIAS', path: '/sugerencias' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTÁCTANOS', path: '/contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 bg-black transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/images/INGENIUM ACADEMY.png"
                alt="Ingenium Academy Logo"
                className="h-auto max-h-16 md:max-h-20 w-auto max-w-[220px] md:max-w-[300px] object-contain drop-shadow-lg px-2 py-1"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={
                  'text-yellow-500 hover:text-white px-3 py-2 text-sm lg:text-base font-semibold transition-colors duration-200 tracking-wide'
                }
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-500 p-2 rounded-md hover:bg-opacity-10 hover:bg-gray-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black shadow-lg rounded-b-lg">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-yellow-500 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 