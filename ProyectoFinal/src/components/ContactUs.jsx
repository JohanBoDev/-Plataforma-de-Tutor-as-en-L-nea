// src/pages/ContactUs.jsx
import React from 'react';

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
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <img
          src="https://s3-alpha-sig.figma.com/img/7486/9f8d/e2a81dcf0e2a32e81843670de90bde81?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cmmjgFPv0APwVTZsbxQDLtk5FaFBRXMTWk0brLIfHJG2jMynBX8JSZxk3R6YzizSlCcT8VV5EVWsAkzJrGJ65TOc6SS0Wfh48TK2Jb-rpQm2gLblIYmKiqYIkqkKXZIwgT7hrwqlYIgbrNLHu1-SNgIr3Jw~sNx4CIxRJXghATY-lXqajM3XDAi6P~Rnoqheo8Uf~uGsfs-2xAPNkH6Qh9RJs58LoYhHsA7FUkHOoFeKYZT7E8wvNGj0FF6dsS4CE9WKed4T9y4qiFHMj3rcC-uxQrAPvSVcbyjRgxpZVdKwjMO5oyAW0DcXq16imkS47mvJGeXmHbUepROVjinVxA__"
          alt="Contact Us"
          className="w-64 h-64 lg:w-96 lg:h-96 object-contain"
        />
      </div>
    </div>
  );
};

export default ContactUs;
