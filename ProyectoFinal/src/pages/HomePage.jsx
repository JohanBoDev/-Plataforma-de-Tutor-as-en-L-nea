import React from 'react';
import { HashLink } from 'react-router-hash-link';
import ContactUs from '../components/ContactUs';
import educacionHome from '../assets/educacionHome.webp'
import educamoti from '../assets/educamoti.webp'
import minTics from '../assets/minTics.webp'
import tech from '../assets/tech.webp'

const HomePage = () => {
  return (
    <div className="bg-gray-100 shadow-lg">
      <main className="container mx-auto p-4">
        <section className="text-center mt-8 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Agencia especializada en Educación</h2>
          <p className="mb-8 text-xl md:text-2xl text-[#828282]">Planea tus clases ahora</p>
          <img 
            className="mt-5 md:w-full w-[450px] object-cover" 
            src={educacionHome}
            alt="Education"
          />
        </section>
        <section className="mt-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center mt-10">Beneficios de Usar TutorLabs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded p-6">
              <h4 className="text-xl md:text-2xl font-bold mb-2 text-gray-700">Acceso a Tutores Expertos</h4>
              <p>Obtén acceso a una red de tutores altamente calificados y con experiencia en diversas materias.</p>
            </div>
            <div className="bg-white shadow-lg rounded p-6">
              <h4 className="text-xl md:text-2xl font-bold mb-2 text-gray-700">Flexibilidad de Horarios</h4>
              <p>Programa sesiones de tutoría en los horarios que más te convengan, adaptándose a tu agenda.</p>
            </div>
            <div className="bg-white shadow-lg rounded p-6">
              <h4 className="text-xl md:text-2xl font-bold mb-2 text-gray-700">Aprendizaje Personalizado</h4>
              <p>Recibe atención individualizada que se adapta a tus necesidades y objetivos de aprendizaje.</p>
            </div>
          </div>
          <div className="text-center mt-10 ">
            <HashLink to="/register-student" className="bg-black text-white p-4 rounded">Registrarme</HashLink>
          </div>
        </section>
        <section className="mt-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-5 text-center mt-10">Sponsors</h3>
          <p className="font-normal text-xl md:text-2xl text-[#828282] mb-10 text-center mt-10">Project Managers</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-white shadow-lg rounded flex justify-center items-center">
              <img 
                className="w-full max-w-xs h-auto" 
                src={tech}
                alt="Sponsor 1"
              />
            </div>
            <div className="p-4 bg-white shadow-lg rounded flex justify-center items-center">
              <img 
                className="w-full max-w-xs h-auto" 
                src={educamoti} 
                alt="Sponsor 2"
              />
            </div>
            <div className="p-4 bg-white shadow-lg rounded flex justify-center items-center">
              <img 
                className="w-full max-w-xs h-auto object-cover object-center"  
                src={minTics}
                alt="Sponsor 3"
              />
            </div>
          </div>
        </section>
        <section>
          <ContactUs />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
