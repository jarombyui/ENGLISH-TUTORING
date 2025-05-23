import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', path: '#', icon: 'fab fa-facebook-f' },
    { name: 'Instagram', path: '#', icon: 'fab fa-instagram' },
    { name: 'TikTok', path: '#', icon: 'fab fa-tiktok' },
    { name: 'LinkedIn', path: '#', icon: 'fab fa-linkedin-in' },
  ];

  const footerLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contáctanos', path: '/contacto' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
          {/* Logo y descripción */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="mb-4 sm:mb-6">
              <img
                src="/images/INGENIUM ACADEMY.png"
                alt="Ingenium Academy Logo"
                className="h-16 sm:h-20 md:h-24 w-auto max-w-[200px] object-contain drop-shadow-lg rounded"
              />
            </div>
            <p className="text-white/80 mb-4 text-center sm:text-left text-sm sm:text-base">
              INGENIUM ACADEMY — ¡Educación accesible para todos!
            </p>
          </div>
          {/* Enlaces rápidos */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-yellow-500">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-center sm:text-left">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-yellow-500 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Redes sociales */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-yellow-500">Síguenos</h4>
            <div className="flex space-x-4 sm:space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-white/70 hover:text-yellow-500 transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <i className={`${link.icon} text-xl sm:text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-yellow-500/30 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-white/60 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} INGENIUM ACADEMY. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 