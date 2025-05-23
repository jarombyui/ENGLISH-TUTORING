import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Quiénes Somos | INGENIUM ACADEMY</title>
        <meta name="description" content="Conoce a INGENIUM ACADEMY, academia de inglés y cultura americana con docentes nativos, asesoría universitaria y certificación internacional." />
        <meta property="og:title" content="Quiénes Somos | INGENIUM ACADEMY" />
        <meta property="og:description" content="Academia de inglés y cultura americana, asesoría universitaria y certificación internacional." />
        <meta property="og:image" content="https://ingeniumacademy.netlify.app/images/ingenium-academy-logo.png" />
        <meta property="og:url" content="https://ingeniumacademy.netlify.app/about" />
      </Helmet>
      <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-yellow-500 mb-4 font-['Montserrat'] tracking-tight drop-shadow-lg pt-24 scroll-mt-32">
              ¿Quiénes Somos?
            </h2>
            <p className="mt-4 text-2xl text-white max-w-3xl mx-auto font-['Poppins']">
              INGENIUM ACADEMY es una academia de idiomas especializada en la enseñanza de inglés y cultura americana, con un enfoque práctico, intensivo y personalizado. Nuestro equipo está conformado por docentes nativos y expertos en educación internacional, comprometidos con el éxito académico y profesional de nuestros estudiantes.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 mb-16">
            <div className="bg-gray-900 border border-yellow-500 rounded-3xl shadow-2xl p-10 flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-500/10 text-yellow-500 rounded-full p-4 mb-4 shadow-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-2 font-['Montserrat']">Nuestra Misión</h3>
              <p className="text-white font-['Poppins'] text-lg">Empoderar a niños, jóvenes y adultos para que dominen el inglés y comprendan la cultura americana, abriéndoles puertas a oportunidades educativas y laborales en el extranjero.</p>
            </div>

            <div className="bg-gray-900 border border-yellow-500 rounded-3xl shadow-2xl p-10 flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-500/10 text-yellow-500 rounded-full p-4 mb-4 shadow-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-2 font-['Montserrat']">Nuestra Visión</h3>
              <p className="text-white font-['Poppins'] text-lg">Ser la academia líder en formación de ciudadanos globales, reconocida por la excelencia en la enseñanza de idiomas, la asesoría internacional y la certificación de competencias lingüísticas.</p>
            </div>
          </div>

          <div className="bg-gray-900 border border-yellow-500 rounded-3xl shadow-2xl p-10">
            <h3 className="text-2xl font-bold text-yellow-500 mb-8 text-center font-['Montserrat']">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-yellow-500/10 text-yellow-500 rounded-full p-4 mb-3 shadow-lg group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="font-semibold text-yellow-500 text-lg font-['Montserrat'] mb-1">Excelencia educativa</h4>
                <p className="text-white font-['Poppins']">Buscamos la máxima calidad en cada clase y en la atención a nuestros estudiantes.</p>
              </div>
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-yellow-500/10 text-yellow-500 rounded-full p-4 mb-3 shadow-lg group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-semibold text-yellow-500 text-lg font-['Montserrat'] mb-1">Innovación en métodos de aprendizaje</h4>
                <p className="text-white font-['Poppins']">Adoptamos nuevas tecnologías y metodologías para ofrecer clases modernas y efectivas.</p>
              </div>
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-yellow-500/10 text-yellow-500 rounded-full p-4 mb-3 shadow-lg group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                </div>
                <h4 className="font-semibold text-yellow-500 text-lg font-['Montserrat'] mb-1">Cercanía y acompañamiento personalizado</h4>
                <p className="text-white font-['Poppins']">Acompañamos a cada estudiante en su proceso, adaptándonos a sus metas y necesidades.</p>
              </div>
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-yellow-500/10 text-yellow-500 rounded-full p-4 mb-3 shadow-lg group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="font-semibold text-yellow-500 text-lg font-['Montserrat'] mb-1">Compromiso con el éxito</h4>
                <p className="text-white font-['Poppins']">Nos esforzamos para que cada estudiante logre sus objetivos académicos y profesionales.</p>
              </div>
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-yellow-500/10 text-yellow-500 rounded-full p-4 mb-3 shadow-lg group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-semibold text-yellow-500 text-lg font-['Montserrat'] mb-1">Integridad y ética profesional</h4>
                <p className="text-white font-['Poppins']">Actuamos con honestidad, transparencia y responsabilidad en todo momento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 