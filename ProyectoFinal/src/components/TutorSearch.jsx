import React, { useState } from 'react';
import axios from 'axios';

const TutorSearch = () => {
  const [tutorId, setTutorId] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setTutorId(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://tuto-back-bn1u.onrender.com/api/tutores', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const tutor = response.data.find(tutor => tutor.id.toString() === tutorId);
      console.log('API Response:', response.data);
      setResult(tutor);
      setError(''); // Clear any previous error messages
    } catch (error) {
      console.error('Error al obtener los datos del tutor:', error);
      setError('Error al obtener los datos del tutor');
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md h-full flex flex-col gap-y-5">
      <h2 className="text-xl font-bold mb-4">Buscar Tutor y Sus clases</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <input
        type="text"
        placeholder="ID del tutor"
        value={tutorId}
        onChange={handleChange}
        className="mb-2 px-4 py-2 border rounded w-full"
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded">
        Buscar
      </button>
      <div className="mt-4">
        {result ? (
          <div>
            <div className="border-b py-2">
              <p><b>ID:</b> {result.id}</p>
              <p><b>Nombre:</b> {result.nombre} {result.apellido}</p>
              <p><b>Email:</b> {result.email}</p>
              <p><b>Nivel Educativo:</b> {result.nivel_educativo}</p>
            </div>
            <h3 className="text-lg font-bold mt-4">Esta es la disponibilidad del tutor <span className="text-blue-800 font-bold uppercase">{result.nombre}</span></h3>
            {result.Disponibilidads
              && result.Disponibilidads
                .length > 0 ? (
              <ul>
                {result.Disponibilidads
                  .map((availability) => (
                    <li key={availability.id} className="border-b py-2">
                      <p><b>ID:</b> {availability.id}</p>
                      <p><b>Fecha:</b> {availability.fecha}</p>
                      <p><b>Hora de Inicio:</b> {availability.hora_inicio}</p>
                      <p><b>Hora de Fin:</b> {availability.hora_fin}</p>
                      <p><b>Tipo de Sesión:</b> {availability.tipo_sesion}</p>
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="mt-5">El tutor {result.nombre} {result.apellido} no esta disponible.</p>
            )}
          </div>
        ) : (
          <p>No hay resultados</p>
        )}
      </div>
    </div>
  );
};

export default TutorSearch;
