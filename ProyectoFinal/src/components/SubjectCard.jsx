import { MagicMotion } from 'react-magic-motion';
import React from 'react';

const SubjectCard = ({ subject, tutorNombre, tutorApellido, id_tutor, onShowTutorInfo }) => (
  <MagicMotion>
    <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl font-bold text-blue-600 mb-2">Materia: {subject.nombre}</h2>
      <p className="text-gray-600 text-lg"><span className="font-medium text-purple-600">ID de la materia:</span> {subject.id}</p>
      <p className="text-gray-600 text-lg"><span className="font-medium text-green-600">Intensidad Horaria:</span> {subject.intensidad_horaria}</p>
      <p className="text-gray-600 text-lg"><span className="font-medium text-gray-600">Nivel Educativo:</span> {subject.nivel_educativo}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Tutores:</h3>
        {tutorNombre && tutorApellido ? (
          <p className="text-gray-600 text-lg">
            {tutorNombre} {tutorApellido}
          </p>
        ) : (
          <p className="text-gray-600 text-lg">No hay tutores asignados.</p>
        )}
        <p>
          <span className="font-medium text-blue-600">ID del tutor:</span> {id_tutor}
        </p>
        <button
          onClick={() => onShowTutorInfo(id_tutor)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Mostrar info del tutor
        </button>
      </div>
    </div>
  </MagicMotion>
);

export default SubjectCard;
