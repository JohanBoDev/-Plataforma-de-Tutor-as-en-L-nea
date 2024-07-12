import React from 'react';
import tutor from '../assets/tutor.svg';
import estudiantes from '../assets/estudiante.svg';
import educacion from '../assets/educacion.svg';
import mision from '../assets/mision.svg';
import valores from '../assets/valores.svg';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <main className="container mx-auto p-8 text-center">
        <section className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-800">Sobre TutorLabs</h2>
          <p className="mb-6 text-lg md:text-2xl text-gray-700">
            TutorLabs es una plataforma que conecta a estudiantes con tutores experimentados para sesiones de aprendizaje personalizadas. Nuestra misión es proporcionar educación accesible y de alta calidad para todos.
          </p>
          <img 
            src={educacion} 
            alt="Educación" 
            className="rounded-lg shadow-lg mb-12 mx-auto w-full max-w-xl"
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">Nuestra Misión</h3>
            <p className="text-md md:text-lg mb-6 text-gray-600">
              En TutorLabs, nuestra misión es hacer que el aprendizaje sea accesible y agradable para todos. Creemos en el poder de la educación personalizada.
            </p>
            <img 
              src={mision}
              alt="Misión" 
              className="rounded-lg w-full object-contain"
              style={{ maxHeight: '200px' }}
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">Nuestros Tutores</h3>
            <p className="text-md md:text-lg mb-6 text-gray-600">
              Nuestros tutores son profesionales experimentados que tienen pasión por la enseñanza. Están aquí para ayudarte a tener éxito en tu viaje de aprendizaje.
            </p>
            <img 
              src={tutor}
              alt="Tutor" 
              className="rounded-lg w-full object-contain"
              style={{ maxHeight: '200px' }}
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">Nuestros Estudiantes</h3>
            <p className="text-md md:text-lg mb-6 text-gray-600">
              Atendemos a estudiantes de todas las edades y niveles, proporcionando sesiones de tutoría personalizadas que se adaptan a las necesidades y objetivos individuales de aprendizaje.
            </p>
            <img 
              src={estudiantes}
              alt="Estudiantes" 
              className="rounded-lg w-full object-contain"
              style={{ maxHeight: '200px' }}
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">Nuestros Valores</h3>
            <p className="text-md md:text-lg mb-6 text-gray-600">
              Valoramos la dedicación, el conocimiento y la pasión por la enseñanza. Nos comprometemos a proporcionar una educación de alta calidad a través de un aprendizaje personalizado.
            </p>
            <img 
              src={valores}
              alt="Valores" 
              className="rounded-lg w-full object-contain"
              style={{ maxHeight: '200px' }}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
