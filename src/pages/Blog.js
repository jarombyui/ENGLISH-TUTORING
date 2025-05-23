import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

const initialBlogPosts = [
  {
    id: 1,
    title: '¿Por qué el inglés es la llave para estudiar y trabajar en el extranjero?',
    excerpt: 'Descubre cómo dominar el inglés puede abrirte puertas a becas, universidades y empleos internacionales.',
    date: '10 de Junio, 2024',
    author: 'Equipo INGENIUM ACADEMY',
    category: 'Oportunidades',
    image: '/images/us-university.jpg',
    readTime: '4 min',
    tags: ['Inglés', 'Estudios', 'Trabajo', 'Internacional']
  },
  {
    id: 2,
    title: 'Historias de éxito: Nuestros estudiantes en universidades de USA',
    excerpt: 'Testimonios reales de alumnos que lograron ingresar a universidades americanas gracias a su preparación en INGENIUM ACADEMY.',
    date: '5 de Junio, 2024',
    author: 'Equipo INGENIUM ACADEMY',
    category: 'Testimonios',
    image: '/images/succes-students.jpg',
    readTime: '5 min',
    tags: ['Éxito', 'Universidades', 'USA', 'Testimonios']
  },
  {
    id: 3,
    title: 'Tips para aprender inglés rápido y sin frustraciones',
    excerpt: 'Consejos prácticos de nuestros docentes nativos para avanzar más rápido y disfrutar el proceso.',
    date: '1 de Junio, 2024',
    author: 'Equipo INGENIUM ACADEMY',
    category: 'Aprendizaje',
    image: '/images/tips-learn-english.jpg',
    readTime: '3 min',
    tags: ['Tips', 'Aprendizaje', 'Inglés', 'Nativos']
  },
  {
    id: 4,
    title: '¿Cómo es la vida universitaria en Estados Unidos?',
    excerpt: 'Conoce de primera mano las experiencias, retos y oportunidades de estudiar en USA.',
    date: '28 de Mayo, 2024',
    author: 'Equipo INGENIUM ACADEMY',
    category: 'Cultura',
    image: '/images/life-students.jpg',
    readTime: '4 min',
    tags: ['Cultura', 'USA', 'Universidad', 'Experiencias']
  },
  {
    id: 5,
    title: 'La importancia de certificar tu nivel de inglés',
    excerpt: 'Por qué una certificación internacional puede marcar la diferencia en tu CV y tu futuro académico.',
    date: '20 de Mayo, 2024',
    author: 'Equipo INGENIUM ACADEMY',
    category: 'Certificación',
    image: '/images/english-level-certification.jpg',
    readTime: '3 min',
    tags: ['Certificación', 'Inglés', 'CV', 'Futuro']
  },
  {
    id: 6,
    title: 'Preparando tu postulación: Lo que buscan las universidades americanas',
    excerpt: 'Guía paso a paso para destacar en tu aplicación y aumentar tus posibilidades de éxito.',
    date: '15 de Mayo, 2024',
    author: 'Equipo INGENIUM ACADEMY',
    category: 'Universidades',
    image: '/images/college-application.jpg',
    readTime: '5 min',
    tags: ['Postulación', 'Universidades', 'USA', 'Guía']
  }
];

const fallbackPosts = [
  {
    id: 4,
    title: 'Marketing Digital para Empresas de Software',
    excerpt: 'Estrategias efectivas para promocionar tu empresa de software y llegar a más clientes potenciales en el mundo digital.',
    date: '28 de Febrero, 2024',
    author: 'Equipo INGENIUM ACADEMY',
    category: 'Marketing Digital',
    image: '/images/blog-images/marketing-empresas.jpg',
    readTime: '5 min',
    tags: ['Marketing', 'Digital', 'Empresas', 'Software']
  },
  {
    id: 5,
    title: 'Seguridad en Aplicaciones Web',
    excerpt: 'Principales amenazas y mejores prácticas para proteger tus aplicaciones web y los datos de tus usuarios.',
    date: '20 de Febrero, 2024',
    author: 'Equipo INGENIUM ACADEMY',
    category: 'Seguridad',
    image: '/images/blog-images/seguridad-web.png',
    readTime: '6 min',
    tags: ['Seguridad', 'Web', 'Aplicaciones', 'Datos']
  }
];

const NEWS_API_URL = 'https://newsdata.io/api/1/news?apikey=pub_42094e7e2e2e4b6b8e7e7e7e7e7e7e7e7e7e7&q=mining%20accident%20accidente%20mina%20safety%20seguridad&language=es,en';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const errorImages = useRef({});

  const handleLoadMore = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(NEWS_API_URL);
      const data = await response.json();
      if (data.results && Array.isArray(data.results) && data.results.length > 0) {
        const newPosts = data.results.slice(0, 6).map((item, idx) => ({
          id: `api-${item.link || item.title || idx}`,
          title: item.title,
          excerpt: item.description || item.content || '',
          date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' }) : '',
          author: item.source_id || 'Fuente externa',
          category: 'Noticia Minera',
          image: item.image_url || '/images/blog-sst.jpg',
          readTime: '5 min',
          tags: ['Minería', 'Accidentes', 'SST']
        }));
        setBlogPosts(prev => [...prev, ...newPosts]);
      } else {
        setBlogPosts(prev => [...prev, ...fallbackPosts]);
        setError('No se encontraron más artículos en la API. Mostrando artículos destacados.');
      }
    } catch (err) {
      setBlogPosts(prev => [...prev, ...fallbackPosts]);
      setError('Error al cargar noticias externas. Mostrando artículos destacados.');
    }
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Blog de Inglés, Cultura y Éxito | INGENIUM ACADEMY</title>
        <meta name="description" content="Artículos, tips y testimonios sobre inglés, cultura americana, asesoría universitaria y certificación internacional. Inspírate y transforma tu futuro." />
        <meta property="og:title" content="Blog de Inglés, Cultura y Éxito | INGENIUM ACADEMY" />
        <meta property="og:description" content="Tips, historias de éxito y recursos sobre inglés, cultura americana y asesoría internacional. ¡Motívate a estudiar con nosotros!" />
        <meta property="og:image" content="https://ingeniumacademy.netlify.app/images/ingenium-academy-logo.png" />
        <meta property="og:url" content="https://ingeniumacademy.netlify.app/blog" />
      </Helmet>
      <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-yellow-500 mb-4 font-['Montserrat'] tracking-tight drop-shadow-lg pt-24 scroll-mt-32">
              Blog INGENIUM ACADEMY
            </h2>
            <p className="mt-4 text-2xl text-white max-w-3xl mx-auto font-['Poppins']">
              Descubre las últimas tendencias en desarrollo de software, tecnología y negocios digitales.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, idx) => {
              const key = typeof post.id === 'string' ? post.id : `local-${post.id}`;
              return (
                <div key={key} className="bg-gray-900 border border-yellow-500 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:border-yellow-400">
                  <div className="relative h-48 bg-gray-800">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover object-center rounded-t-xl shadow-md"
                      onError={e => {
                        if (!errorImages.current[key]) {
                          errorImages.current[key] = true;
                          e.target.src = '/images/blog-sst.jpg';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 rounded-t-xl"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-sm font-semibold text-yellow-500 bg-yellow-500/10 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-yellow-500">{post.readTime} de lectura</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 whitespace-normal break-words font-['Montserrat']">{post.title}</h3>
                    <p className="text-white/80 mb-4 font-['Poppins']">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags && post.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 text-xs font-medium text-yellow-500 bg-yellow-500/10 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-2">
                          <span className="text-yellow-500">👤</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white font-['Poppins']">{post.author}</p>
                          <p className="text-xs text-yellow-500 font-['Poppins']">{post.date}</p>
                        </div>
                      </div>
                      <button className="text-yellow-500 hover:text-white transition-colors duration-300 font-semibold font-['Montserrat']">
                        Leer más →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              className="bg-yellow-500 text-black py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors duration-300 font-semibold shadow-md hover:shadow-lg font-['Montserrat']"
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? 'Cargando...' : 'Ver más artículos'}
            </button>
            {error && <p className="mt-4 text-yellow-500 font-['Poppins']">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog; 