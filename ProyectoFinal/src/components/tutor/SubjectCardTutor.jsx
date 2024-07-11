import { MagicMotion } from 'react-magic-motion';
import React from 'react';


const SubjectCardTutor = ({ subject, onRemove }) => (
  <MagicMotion>
    <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl font-bold text-blue-600 mb-2">Materia: {subject.nombre}</h2>
      <p className="text-gray-600 text-lg"><span className="font-medium text-purple-600">ID:</span> {subject.id}</p>
      <p className="text-gray-600 text-lg"><span className="font-medium text-green-600">Intensidad Horaria:</span> {subject.intensidad_horaria}</p>
      <p className="text-gray-600 text-lg"><span className="font-medium text-gray-600">Nivel Educativo:</span> {subject.nivel_educativo}</p>
      
      <button id="btnEliminar"
        onClick={() => onRemove(subject)}
        className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-700"
      >
        Eliminar
      </button>
    </div>
  </MagicMotion>
);

export default SubjectCardTutor;
