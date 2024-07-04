import { MagicMotion } from 'react-magic-motion';
import React from 'react';

const SubjectCard = ({ subject, onRemove,  }) => (
  <MagicMotion>
    <div className="border p-4 mt-5 bg-white rounded shadow-md flex flex-col justify-between gap-y-5">
      <div>
        <h2><b>{subject.nombre}</b></h2>
        <p><b>Horas semanal:</b> {subject.intensidad_horaria}</p>
        <p><b>Nivel Educativo:</b> {subject.nivel_educativo}</p>
        <p><b>ID del tutor:</b> {subject.id_tutor}</p>
      </div>
      <button
        onClick={() => onRemove(subject)}
        className="bg-red-500 text-white py-1 px-2 rounded mt-2"
      >
        Eliminar
      </button>
    </div>
  </MagicMotion>
);

export default SubjectCard;
