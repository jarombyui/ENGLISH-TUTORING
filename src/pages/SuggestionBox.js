import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const SuggestionBox = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: '',
    category: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu sugerencia! La revisaremos pronto.');
    setFormData({
      name: '',
      email: '',
      suggestion: '',
      category: 'general'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Buzón de Sugerencias | INGENIUM ACADEMY</title>
        <meta name="description" content="¿Tienes ideas o sugerencias? Envíanos tus comentarios para mejorar nuestros cursos y servicios de inglés, cultura americana y asesoría internacional." />
        <meta property="og:title" content="Buzón de Sugerencias | INGENIUM ACADEMY" />
        <meta property="og:description" content="Envíanos tus sugerencias para mejorar nuestros cursos y servicios de inglés, cultura americana y asesoría internacional." />
        <meta property="og:image" content="https://ingeniumacademy.netlify.app/images/ingenium-academy-logo.png" />
        <meta property="og:url" content="https://ingeniumacademy.netlify.app/sugerencias" />
      </Helmet>
      <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-yellow-500 mb-4 font-['Montserrat'] tracking-tight drop-shadow-lg pt-24 scroll-mt-32">
              Buzón de Sugerencias
            </h2>
            <p className="mt-4 text-2xl text-white max-w-2xl mx-auto font-['Poppins']">
              ¿Tienes alguna idea, comentario o sugerencia? ¡Queremos escucharte!
            </p>
          </div>

          <div className="mt-12 bg-gray-900 rounded-lg shadow-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-100 text-black placeholder-gray-500 border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-100 text-black placeholder-gray-500 border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-white">
                  Categoría
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-100 text-black placeholder-gray-500 border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                >
                  <option value="general">General</option>
                  <option value="cursos">Cursos</option>
                  <option value="servicios">Servicios</option>
                  <option value="soporte">Soporte Técnico</option>
                </select>
              </div>

              <div>
                <label htmlFor="suggestion" className="block text-sm font-medium text-white">
                  Tu Sugerencia
                </label>
                <textarea
                  id="suggestion"
                  name="suggestion"
                  rows={4}
                  value={formData.suggestion}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-100 text-black placeholder-gray-500 border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-300"
                >
                  Enviar Sugerencia
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestionBox; 