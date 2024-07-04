// src/components/MateriasList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MateriasList = () => {
  const [materias, setMaterias] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener materias
    const fetchMaterias = async () => {
      try {
        const token = localStorage.getItem('token'); // Obtener el token del localStorage
        console.log('Token:', token); // Verificar que el token se está obteniendo correctamente

        const response = await axios.get('https://tuto-back-bn1u.onrender.com/api/materias', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        console.log('Response data:', response.data); // Verificar que la respuesta contiene los datos esperados
        setMaterias(response.data.materias); // Asumiendo que la respuesta es un array de materias
      } catch (err) {
        console.error('Error al obtener las materias:', err);
        setError('Error al obtener las materias');
      }
    };

    fetchMaterias();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (materias.length === 0) {
    return <div>No hay materias disponibles</div>;
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow-md mt-5">
      <h2 className="text-xl font-bold">Materias disponibles</h2>
      <ul>
        {materias.map((materia, index) => (
          <li key={index} className="flex justify-between items-center">
            {materia.nombre} - {materia.nivel_educativo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MateriasList;
