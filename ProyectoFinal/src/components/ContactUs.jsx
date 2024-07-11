// src/pages/ContactUs.jsx
import React from 'react';
import conocimiento from '../assets/conocimiento.webp'


const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between p-8 lg:p-16 bg-gray-100 mt-10">
      <div className="lg:w-1/2">
        <h1 className="text-4xl font-bold mb-4">Formulario de Contacto</h1>
        <h2 className="text-xl text-gray-600 mb-4">  Si tienes preguntas no dudes en contactarnos   </h2>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input 
              type="text" 
              placeholder="Primer nombre" 
              className="w-1/2 p-2 border border-gray-300 rounded-md"
            />
            <input 
              type="text" 
              placeholder="Apellido" 
              className="w-1/2 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <textarea 
              placeholder="Mensaje" 
              className="w-full p-2 border border-gray-300 rounded-md h-32"
            />
          </div>
          <button 
            type="submit" 
            className="w-full p-2 bg-black text-white rounded-md"
          >
           Enviar
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 flex justify-center  mt-8 lg:mt-0">
        <img
          src={conocimiento}
          alt="Contact Us"
          className="w-64 h-64 lg:w-96 lg:h-96 object-contain"
        />
      </div>
    </div>
  );
};

export default ContactUs;
