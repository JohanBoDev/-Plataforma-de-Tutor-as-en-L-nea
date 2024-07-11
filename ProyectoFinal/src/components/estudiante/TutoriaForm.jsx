import React, { useState } from 'react';
import axios from 'axios';

const TutoriaForm = ({ onTutoriaAdded }) => {
  const [formData, setFormData] = useState({
    id_tutor: '',
    id_estudiante: '',
    id_materia: '',
    fecha: '',
    hora_inicio: '',
    hora_fin: '',
    id_disponibilidad: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('https://tuto-back-bn1u.onrender.com/api/tutorias', {
        id_tutor: formData.id_tutor,
        id_estudiante: formData.id_estudiante,
        id_materia: formData.id_materia,
        programacion: {
          fecha: formData.fecha,
          hora_inicio: formData.hora_inicio,
          hora_fin: formData.hora_fin,
          id_disponibilidad: formData.id_disponibilidad
        }
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      onTutoriaAdded(); // Llamar la función para actualizar la lista de tutorías
    } catch (error) {
      console.error('Error creando la tutoría:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Solicitar Tutoría</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">ID Tutor</label>
          <input
            type="text"
            name="id_tutor"
            value={formData.id_tutor}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">ID Estudiante</label>
          <input
            type="text"
            name="id_estudiante"
            value={formData.id_estudiante}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">ID Materia</label>
          <input
            type="text"
            name="id_materia"
            value={formData.id_materia}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Fecha</label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Hora de Inicio</label>
          <input
            type="time"
            name="hora_inicio"
            value={formData.hora_inicio}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Hora de Fin</label>
          <input
            type="time"
            name="hora_fin"
            value={formData.hora_fin}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">ID Disponibilidad</label>
          <input
            type="text"
            name="id_disponibilidad"
            value={formData.id_disponibilidad}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition ease-in-out duration-150"
      >
        Solicitar Tutoría
      </button>
    </form>
  );
};

export default TutoriaForm;
