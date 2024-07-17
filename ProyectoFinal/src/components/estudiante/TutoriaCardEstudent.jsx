import React from 'react';

const TutoriaCardEstudent = ({ tutorias, studentId }) => {
  const today = new Date();

  // Filtra las tutorías del estudiante que no han pasado
  const filteredTutorias = tutorias.filter(tutoria => {
    const tutoriaDate = new Date(tutoria.Programacion.fecha);
    return tutoria.id_estudiante === studentId && tutoriaDate >= today;
  });

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredTutorias.length > 0 ? (
        filteredTutorias.map((tutoria) => (
          <div key={tutoria.id} className="bg-white shadow-lg rounded-lg p-6 mb-4 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-bold text-blue-600 mb-2">Tutoria ID: {tutoria.id}</h2>
            <p className="text-gray-600 text-lg"><span className="font-medium text-purple-600">Materia:</span> {tutoria.Materium.nombre}</p>
            {tutoria.Programacion && (
              <>
                <p className="text-gray-600 text-lg"><span className="font-medium text-green-600">Fecha:</span> {new Date(tutoria.Programacion.fecha).toLocaleDateString()}</p>
                <p className="text-gray-600 text-lg"><span className="font-medium text-red-600">Hora de Inicio:</span> {tutoria.Programacion.hora_inicio}</p>
                <p className="text-gray-600 text-lg"><span className="font-medium text-yellow-600">Hora de Fin:</span> {tutoria.Programacion.hora_fin}</p>
              </>
            )}
            <p className="text-gray-600 text-lg"><span className="font-medium text-indigo-600">Estado:</span> {tutoria.estado}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-lg">No se encontraron tutorías.</p>
      )}
    </div>
  );
};

export default TutoriaCardEstudent;
