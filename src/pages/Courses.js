import React from 'react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Inglés',
      description: 'Clases intensivas de 90 minutos para avanzar rápidamente en tu dominio del idioma.',
      duration: '90 minutos por clase',
      level: 'Todos los niveles',
      image: '/images/english.jpg',
      price: 'Consultar',
      schedule: 'Consultar',
      time: 'Consultar'
    },
    {
      id: 2,
      title: 'Cultura Americana',
      description: 'Dictada por nativos. Aprende sobre costumbres, historia y vida cotidiana en EE.UU.',
      duration: 'Consultar',
      level: 'Todos los niveles',
      image: '/images/american-culture.jpg',
      price: 'Consultar',
      schedule: 'Consultar',
      time: 'Consultar'
    },
    {
      id: 3,
      title: 'Conversatorio',
      description: 'Sesiones de conversación con nativos de USA para mejorar tu fluidez y comprensión.',
      duration: 'Consultar',
      level: 'Intermedio/Avanzado',
      image: '/images/conversation-native.jpg',
      price: 'Consultar',
      schedule: 'Consultar',
      time: 'Consultar'
    },
    {
      id: 4,
      title: 'Asesoría',
      description: 'Orientación y apoyo para aplicar a universidades americanas. Documentación, entrevistas y más.',
      duration: 'Consultar',
      level: 'Avanzado',
      image: '/images/intenational-aplication.jpg',
      price: 'Consultar',
      schedule: 'Consultar',
      time: 'Consultar'
    },
    {
      id: 5,
      title: 'Certificación',
      description: 'Evaluación y certificación de nivel de inglés: A1, A2, B1, B2, C1, C2.',
      duration: 'Consultar',
      level: 'A1, A2, B1, B2, C1, C2',
      image: '/images/english-level-certification.jpg',
      price: 'Consultar',
      schedule: 'Consultar',
      time: 'Consultar'
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-yellow-500 mb-4 font-['Montserrat'] tracking-tight drop-shadow-lg pt-24 scroll-mt-32">
            Nuestros Cursos
          </h2>
          <p className="mt-4 text-2xl text-white max-w-3xl mx-auto font-['Poppins']">
            Programas de inglés y cultura americana con nativos y certificación internacional.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl hover:border-yellow-400 transform hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="relative h-48 bg-black rounded-t-2xl flex items-center justify-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-44 w-auto object-contain rounded-xl shadow-lg"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-semibold text-yellow-500 bg-yellow-500/10 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-lg font-bold text-yellow-500">{course.price}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-sans">{course.title}</h3>
                <p className="text-white/80 mb-4 font-sans">{course.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-white/50">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-white/50">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center text-sm text-white/50">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{course.time}</span>
                  </div>
                </div>
                <button
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 px-4 rounded-lg transition-colors duration-300 font-semibold shadow-md hover:shadow-lg mt-auto"
                  onClick={() => {
                    const phone = '51947726382';
                    const message = `Hola, quiero inscribirme en el curso: ${course.title}`;
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  Inscribirme Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses; 