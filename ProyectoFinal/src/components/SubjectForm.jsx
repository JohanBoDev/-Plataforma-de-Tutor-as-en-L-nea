import React, { useState, useContext } from 'react';
import axios from 'axios';
import { TutorContext } from '../context/TutorContext';

const SubjectForm = ({ onSubjectAdded }) => {
  const { tutor } = useContext(TutorContext);
  const [form, setForm] = useState({
    nombre: '',
    intensidad_horaria: '',
    nivel_educativo: '',
    costo_hora_tutoria: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tutor || !tutor.id) {
      console.error('El tutor no está disponible o no tiene un ID válido');
      return;
    }

    try {
      const response = await axios.post('https://tuto-back-bn1u.onrender.com/api/materias', {
        ...form,
        id_tutor: tutor.id, // Asigna el ID del tutor actual
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status === 201) {
        console.log('Materia creada:', response.data);
        onSubjectAdded(response.data.materia); // Llamar a la función pasada como prop
      } else {
        console.error('Error inesperado al crear materia:', response);
      }
    } catch (error) {
      if (error.response) {
        console.error('Error creando materia:', error.response.data);
      } else {
        console.error('Error de red o desconocido:', error);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center  bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-center mb-10 text-xl font-bold ">Agregar materia</h2  >
      <div className="w-full  ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 gap-x-10 ">
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className="border p-2 rounded"
            required
          />
          <input
            type="number"
            name="intensidad_horaria"
            value={form.intensidad_horaria}
            onChange={handleChange}
            placeholder="Intensidad Horaria"
            className="border p-2 rounded"
            required
          />
          <select
            name="nivel_educativo"
            value={form.nivel_educativo}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          >
            <option value="">Selecciona un nivel</option>
            <option value="Bachillerato">Bachillerato</option>
            <option value="Técnico">Técnico</option>
            <option value="Tecnólogo">Tecnólogo</option>
            <option value="Pregrado">Pregrado</option>
            <option value="Posgrado">Posgrado</option>
          </select>
          <input
            type="number"
            name="costo_hora_tutoria"
            value={form.costo_hora_tutoria}
            onChange={handleChange}
            placeholder="Costo por Hora de Tutoria"
            className="border p-2 rounded"
            required
          />
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Añadir Materia
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubjectForm;
