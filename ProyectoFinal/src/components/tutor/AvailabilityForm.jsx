import React, { useState } from 'react';
import axios from 'axios';

const AvailabilityForm = ({ tutorId }) => {
  const [fecha, setFecha] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  const [tipoSesion, setTipoSesion] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('https://tuto-back-bn1u.onrender.com/api/disponibilidades', {
        id_tutor: tutorId,
        tipo_sesion: tipoSesion,
        fecha,
        hora_inicio: horaInicio,
        hora_fin: horaFin
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSuccess('Disponibilidad agregada exitosamente');
      setError('');
    } catch (error) {
      setError('Error al agregar disponibilidad');
      setSuccess('');
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-center font-bold text-2xl mb-4">Agregar disponibilidad</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Fecha:</label>
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Hora de Inicio:</label>
          <input type="time" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} required className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Hora de Fin:</label>
          <input type="time" value={horaFin} onChange={(e) => setHoraFin(e.target.value)} required className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tipo de Sesión:</label>
          <select value={tipoSesion} onChange={(e) => setTipoSesion(e.target.value)} className="w-full px-3 py-2 border rounded-lg">
            <option value="Presencial">Presencial</option>
            <option value="Virtual">Virtual</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg">Guardar</button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </form>
    </div>
  );
};

export default AvailabilityForm;
