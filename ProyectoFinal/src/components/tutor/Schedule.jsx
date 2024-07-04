import React, { useState, useEffect } from 'react';
import { MagicMotion } from "react-magic-motion";

const Schedule = ({ initialSchedule = [] }) => {
  const [schedule, setSchedule] = useState(() => {
    // Recuperar el estado del localStorage si existe
    const savedSchedule = localStorage.getItem('schedule');
    return savedSchedule ? JSON.parse(savedSchedule) : initialSchedule;
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ date: '', subject: '', time: '' });

  useEffect(() => {
    // Guardar el estado en localStorage cada vez que cambia
    localStorage.setItem('schedule', JSON.stringify(schedule));
  }, [schedule]);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(schedule[index]);
  };

  const handleDelete = (index) => {
    const newSchedule = schedule.filter((_, i) => i !== index);
    setSchedule(newSchedule);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSchedule = [...schedule];
    if (editingIndex !== null) {
      newSchedule[editingIndex] = formData;
      setEditingIndex(null);
    } else {
      newSchedule.push(formData);
    }
    setSchedule(newSchedule);
    setFormData({ date: '', subject: '', time: '' });
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md mt-5">
      <h2 className="text-xl font-bold">Programar clases</h2>
      <MagicMotion>
      {schedule.map((item, index) => (
        <div key={index} className="border-b py-2 flex justify-between items-center">
          <div>
            <p>{item.date} - {item.subject}</p>
            <p>{item.time}</p>
          </div>
          <div>
            <button onClick={() => handleEdit(index)} className="bg-blue-500 text-white py-1 px-2 rounded mr-2">
              Editar
            </button>
            <button onClick={() => handleDelete(index)} className="bg-red-500 text-white py-1 px-2 rounded">
             Eliminar clase
            </button>
          </div>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="flex flex-col mb-4">
          <label className="mb-1">Fecha</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1">Materia</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1">Hora</label>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          />
        </div>
        <button type="submit" className="bg-black text-white py-2 px-4 rounded">
          {editingIndex !== null ? 'Editar Clase' : 'Agregar Clase'}
        </button>
       
      </form> </MagicMotion>
    </div>
  );
};

export default Schedule;
