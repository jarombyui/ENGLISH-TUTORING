import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const serviceDetails = [
  {
    title: "Clases Intensivas de Inglés",
    details: "Sesiones de 90 minutos con docentes nativos y materiales actualizados, para avanzar rápidamente en comprensión, conversación y gramática.",
  },
  {
    title: "Conversatorios con Nativos de USA",
    details: "Práctica real de inglés conversacional con hablantes nativos, mejorando fluidez, pronunciación y confianza.",
  },
  {
    title: "Cultura Americana",
    details: "Talleres y clases sobre costumbres, historia, vida universitaria y profesional en Estados Unidos.",
  },
  {
    title: "Asesoría para Aplicar a Universidades Americanas",
    details: "Acompañamiento integral en el proceso de postulación: selección de universidades, preparación de documentos, ensayos, entrevistas y becas.",
  },
  {
    title: "Certificación Internacional de Inglés",
    details: "Evaluación y certificación de nivel de inglés (A1, A2, B1, B2, C1, C2) reconocida internacionalmente, útil para estudios y trabajo en el extranjero.",
  },
  {
    title: "Preparación para Exámenes Internacionales",
    details: "Cursos intensivos para TOEFL, IELTS y otros exámenes de certificación.",
  }
];

const ServicesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Clases Intensivas de Inglés",
      description: "Sesiones de 90 minutos con docentes nativos y materiales actualizados.",
      icon: "📚"
    },
    {
      title: "Conversatorios con Nativos de USA",
      description: "Práctica real de inglés conversacional con hablantes nativos.",
      icon: "🗣️"
    },
    {
      title: "Cultura Americana",
      description: "Talleres y clases sobre costumbres, historia y vida en EE.UU.",
      icon: "🇺🇸"
    },
    {
      title: "Asesoría para Aplicar a Universidades Americanas",
      description: "Acompañamiento integral en el proceso de postulación.",
      icon: "🎓"
    },
    {
      title: "Certificación Internacional de Inglés",
      description: "Evaluación y certificación de nivel de inglés reconocida internacionalmente.",
      icon: "📄"
    },
    {
      title: "Preparación para Exámenes Internacionales",
      description: "Cursos intensivos para TOEFL, IELTS y otros exámenes.",
      icon: "📝"
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
    <>
      <Helmet>
        <title>Servicios de Inglés, Cultura y Asesoría | INGENIUM ACADEMY</title>
        <meta name="description" content="Servicios de alto impacto: clases intensivas de inglés, conversatorios con nativos, cultura americana, asesoría universitaria y certificación internacional." />
        <meta property="og:title" content="Servicios de Inglés, Cultura y Asesoría | INGENIUM ACADEMY" />
        <meta property="og:description" content="Servicios de inglés, cultura americana, asesoría universitaria y certificación internacional. ¡Transforma tu futuro!" />
        <meta property="og:image" content="https://ingeniumacademy.netlify.app/images/ingenium-academy-logo.png" />
        <meta property="og:url" content="https://ingeniumacademy.netlify.app/servicios" />
      </Helmet>
      <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-yellow-500 mb-4 font-['Montserrat'] tracking-tight drop-shadow-lg pt-24 scroll-mt-32">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-2xl text-white max-w-3xl mx-auto font-['Poppins']">
              Servicios de alto impacto para tu futuro académico y profesional: inglés intensivo, cultura americana, asesoría universitaria y certificación internacional.
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
              ¿Quieres transformar tu futuro?
            </h3>
            <p className="text-lg mb-6">
              Contáctanos para descubrir cómo nuestros servicios pueden ayudarte a alcanzar tus metas académicas y profesionales.
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
    </>
  );
};

export default ServicesPage; 