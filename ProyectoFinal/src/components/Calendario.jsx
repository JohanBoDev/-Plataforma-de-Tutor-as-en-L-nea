import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendario.css';

const CalendarComponent = ({ tutorId, disponibilidades, setDisponibilidades }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  useEffect(() => {
    const fetchDisponibilidades = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://tuto-back-bn1u.onrender.com/api/tutores', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const tutorInfo = response.data.find(t => t.id === tutorId);
        if (tutorInfo && tutorInfo.Disponibilidads) {
          setDisponibilidades(tutorInfo.Disponibilidads);
        } else {
          console.log('No disponibilidades found for the tutor');
        }
      } catch (error) {
        console.error('Error fetching disponibilidades:', error);
      }
    };

    if (tutorId) {
      fetchDisponibilidades();
    }
  }, [tutorId, setDisponibilidades]);

  return (
    <div className="calendar-container p-4 bg-white rounded-lg shadow-md mt-5">
      <h2 className="text-center text-2xl mb-5 font-extrabold">Calendario</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileContent={({ date, view }) => {
          if (view === 'month') {
            const availability = disponibilidades.find(d => 
              new Date(d.fecha).toLocaleDateString('en-US', { timeZone: 'UTC' }) === 
              date.toLocaleDateString('en-US', { timeZone: 'UTC' })
            );
            return availability ? (
              <div className={`availability-tile ${availability.tipo_sesion.toLowerCase()}`}>
                {availability.hora_inicio} - {availability.hora_fin} <br />
                <span className="font-bold text-white">{availability.tipo_sesion}</span>
              </div>
            ) : null;
          }
        }}
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            const availability = disponibilidades.find(d => 
              new Date(d.fecha).toLocaleDateString('en-US', { timeZone: 'UTC' }) === 
              date.toLocaleDateString('en-US', { timeZone: 'UTC' })
            );
            return availability ? 'highlight' : null;
          }
        }}
        className="w-full"
      />
    </div>
  );
};

export default CalendarComponent;
