import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AvailabilityList = ({ availabilityId }) => {
  const [availability, setAvailability] = useState(null);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://tuto-back-bn1u.onrender.com/api/disponibilidades/${availabilityId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setAvailability(response.data.disponibilidad);
      } catch (error) {
        console.error('Error fetching availability:', error);
      }
    };

    console.log("Availability ID:", availabilityId);

    fetchAvailability();
  }, [availabilityId]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Disponibilidad</h2>
      {availability ? (
        <div className="border p-2 mb-2 rounded-lg">
          <p><b>Id de tutor: </b>{availability.Tutor.id}</p>
          <p><b>Fecha:</b> {availability.fecha}</p>
          <p><b>Hora de Inicio:</b> {availability.hora_inicio.slice(0, 5)}</p>
          <p><b>Hora de Fin:</b> {availability.hora_fin.slice(0, 5)}</p>
          <p><b>Tipo de Sesión:</b> {availability.tipo_sesion}</p>
        </div>
      ) : (
        <p>No hay disponibilidad.</p>
      )}
    </div>
  );
};

export default AvailabilityList;
