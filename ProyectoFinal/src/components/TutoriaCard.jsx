import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TutorCard = ({ id_tutor }) => {
  const [tutorias, setTutorias] = useState([]);

  useEffect(() => {
    const fetchTutorias = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://tuto-back-bn1u.onrender.com/api/tutorias/tutor/${id_tutor}`, {
            headers: {
                'Authorization': `Bearer ${token}`
              }

      });
        setTutorias(response.data.tutorias);
        
      } catch (error) {
        console.error("Error fetching tutorias:", error);
      }
    };

    fetchTutorias();
  }, [id_tutor]);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {tutorias.map((tutoria) => (
      <div key={tutoria.id} className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h2 className="text-xl text-center font-bold text-blue-600 mb-2">Tutoria <span className="font-extrabold text-gray-900">{tutoria.Materium.nombre}</span></h2>
        <p className="text-lg font-semibold text-gray-800">Solicitada por: {tutoria.Estudiante.nombre} {tutoria.Estudiante.apellido}</p>
        <p className="text-gray-600 text-lg mt-2"><span className="font-medium text-purple-600">Materia:</span> {tutoria.Materium.nombre}</p>
        <p className="text-gray-600 text-lg"><span className="font-medium text-green-600">Fecha:</span> {tutoria.Programacion.fecha}</p>
        <p className="text-gray-600 text-lg"><span className="font-medium text-red-600">Hora de Inicio:</span> {tutoria.Programacion.hora_inicio}</p>
        <p className="text-gray-600 text-lg"><span className="font-medium text-yellow-600">Hora de Fin:</span> {tutoria.Programacion.hora_fin}</p>
        <p className="text-gray-600 text-lg"><span className="font-medium text-indigo-600">Estado:</span> {tutoria.estado}</p>
        <p className="text-gray-600 text-lg"><span className="font-medium text-green-600">Link:</span> <a className="p-1" href="">Inicia el {tutoria.Programacion.fecha}</a></p>
      </div>
    ))}
  </div>
  );
};

export default TutorCard;
