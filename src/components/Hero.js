import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-black min-h-[600px] pt-24">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-yellow-500 mb-4">
          ¡Aprende <span className="text-white">Idiomas</span> por solo
        </h1>
        <p className="text-4xl font-bold text-yellow-500">S/5.00 <span className="text-white">!</span></p>
        <p className="mt-4 text-lg text-white">
          Abierto para <span className="font-bold">todas las edades</span> desde los <span className="font-bold">6 años</span> en adelante.
        </p>
        <button
          className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded font-bold hover:bg-yellow-400 transition"
          onClick={() => navigate('/cursos')}
        >
          Ver Cursos
        </button>
      </div>
      <div className="mt-8 md:mt-0 md:ml-12 flex flex-col items-center">
        <img src="/images/idiomas-group.jpg" alt="Estudiantes felices" className="rounded-lg shadow-lg w-[40rem] h-[32rem] object-cover" />
        <div className="bg-blue-600 text-white rounded-lg px-6 py-4 mt-4 max-w-xs text-center font-semibold shadow-lg">
          Matricúlate hoy y accede <span className="text-yellow-300 font-bold">GRATIS</span> a nuestros talleres de Excel, Emprendimiento, Liderazgo y Quechua.
        </div>
      </div>
    </section>
  );
};

export default Hero; 