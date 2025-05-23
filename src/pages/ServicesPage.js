import React, { useState } from 'react';

const serviceDetails = [
  {
    title: "Desarrollo de Páginas Web",
    details: "Creamos sitios web modernos, responsivos y optimizados para tu negocio o emprendimiento. Incluye sitios corporativos, landing pages, tiendas online (e-commerce) y optimización SEO para mejorar tu presencia digital.",
  },
  {
    title: "Aplicaciones Web Personalizadas",
    details: "Desarrollamos aplicaciones web a medida para automatizar procesos, mejorar la gestión y ofrecer experiencias únicas a tus usuarios. Sistemas de gestión, portales de clientes, dashboards interactivos e integraciones con APIs externas.",
  },
  {
    title: "Bases de Datos y Backend",
    details: "Diseño, implementación y mantenimiento de bases de datos seguras y escalables. Modelado de datos, bases SQL y NoSQL, desarrollo de APIs REST y GraphQL, migración y optimización de datos.",
  },
  {
    title: "Ciberseguridad y Protección de Datos",
    details: "Protegemos tus sistemas y datos con auditorías de seguridad, implementación de firewalls, backups, recuperación ante desastres y capacitación en buenas prácticas de seguridad digital.",
  },
  {
    title: "Consultoría y Transformación Digital",
    details: "Te asesoramos en la adopción de nuevas tecnologías, automatización de procesos, migración a la nube y soporte técnico para impulsar la digitalización de tu empresa.",
  }
];

const ServicesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Desarrollo de Páginas Web",
      description: "Sitios corporativos, landing pages, e-commerce y optimización SEO.",
      icon: "🌐"
    },
    {
      title: "Aplicaciones Web Personalizadas",
      description: "Sistemas de gestión, portales, dashboards e integraciones a medida.",
      icon: "🛠️"
    },
    {
      title: "Bases de Datos y Backend",
      description: "Modelado, implementación y mantenimiento de bases de datos seguras.",
      icon: "🗄️"
    },
    {
      title: "Ciberseguridad y Protección de Datos",
      description: "Auditoría, firewalls, backups y capacitación en seguridad digital.",
      icon: "🛡️"
    },
    {
      title: "Consultoría y Transformación Digital",
      description: "Diagnóstico, automatización, migración a la nube y soporte.",
      icon: "💡"
    }
  ];

  const handleOpenModal = (index) => {
    setSelectedService(serviceDetails[index]);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-yellow-500 mb-4 font-['Montserrat'] tracking-tight drop-shadow-lg pt-24 scroll-mt-32">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-2xl text-white max-w-3xl mx-auto font-['Poppins']">
            Soluciones modernas en desarrollo web, aplicaciones personalizadas, bases de datos, ciberseguridad y consultoría tecnológica
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-yellow-500 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:border-yellow-400"
            >
              <div className="text-4xl mb-4 text-center text-yellow-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-yellow-500 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-white text-center">
                {service.description}
              </p>
              <div className="mt-6 text-center">
                <button
                  className="inline-flex items-center text-yellow-500 hover:text-white font-semibold transition-colors duration-300"
                  onClick={() => handleOpenModal(index)}
                >
                  Saber más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-900 border border-yellow-500 rounded-xl shadow-2xl p-8 max-w-lg w-full relative animate-fade-in">
              <button
                className="absolute top-4 right-4 text-yellow-500 hover:text-white text-2xl font-bold"
                onClick={handleCloseModal}
                aria-label="Cerrar"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">{selectedService.title}</h3>
              <p className="text-white text-lg">{selectedService.details}</p>
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="mt-16 bg-yellow-500 rounded-xl shadow-lg p-8 text-black text-center">
          <h3 className="text-2xl font-bold mb-4">
            ¿Necesitas un servicio personalizado?
          </h3>
          <p className="text-lg mb-6">
            Contáctanos para discutir tus necesidades específicas y encontrar la mejor solución para tu empresa
          </p>
          <button
            className="bg-black text-yellow-500 font-bold py-3 px-8 rounded-lg hover:bg-gray-900 transition-colors duration-300"
            onClick={() => {
              const phone = '51947726382';
              const message = 'Hola, estoy interesado en los servicios de INGENIUM ACADEMY.';
              window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            Contactar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 