import React from 'react';

const courses = [
  {
    name: 'Inglés',
    description: 'Clases intensivas de 90 minutos para avanzar rápidamente en tu dominio del idioma.',
    level: 'Todos los niveles',
    image: '/images/english.jpg',
  },
  {
    name: 'Cultura Americana',
    description: 'Dictada por nativos. Aprende sobre costumbres, historia y vida cotidiana en EE.UU.',
    level: 'Todos los niveles',
    image: '/images/american-culture.jpg',
  },
  {
    name: 'Conversatorio',
    description: 'Sesiones de conversación con nativos de USA para mejorar tu fluidez y comprensión.',
    level: 'Intermedio/Avanzado',
    image: '/images/conversation-native.jpg',
  },
  {
    name: 'Asesoría',
    description: 'Orientación y apoyo para aplicar a universidades americanas. Documentación, entrevistas y más.',
    level: 'Avanzado',
    image: '/images/intenational-aplication.jpg',
  },
  {
    name: 'Certificación',
    description: 'Evaluación y certificación de nivel de inglés: A1, A2, B1, B2, C1, C2.',
    level: 'A1, A2, B1, B2, C1, C2',
    image: '/images/english-level-certification.jpg',
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-12 px-8">
      <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">Nuestros Cursos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div key={course.name} className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center">
            <img src={course.image} alt={course.name} className="h-32 w-auto mb-4 rounded shadow-md object-contain" />
            <h3 className="text-2xl font-bold text-yellow-500 mb-2">{course.name}</h3>
            <p className="text-white mb-2 text-center">{course.description}</p>
            <p className="text-sm text-gray-300 mb-4">{course.level}</p>
            <button className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition font-semibold" onClick={() => window.location.href = '/cursos'}>
              Ver más
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 