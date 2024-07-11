import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubjectCard from '../SubjectCard';

const MateriasList = ({ subjects }) => {
  const [materias, setMaterias] = useState([]);
  const [tutores, setTutores] = useState({});

  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const token = localStorage.getItem('token');
        const responseMaterias = await axios.get('https://tuto-back-bn1u.onrender.com/api/materias', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setMaterias(Array.isArray(responseMaterias.data) ? responseMaterias.data : []);
        
      } catch (error) {
        console.error("Error fetching materias:", error);
        setMaterias([]);
      }
    };

    const fetchTutor = async (id_tutor) => {
      try {
        const token = localStorage.getItem('token');
        const responseTutor = await axios.get(`https://tuto-back-bn1u.onrender.com/api/tutores/${id_tutor}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setTutores(prevState => ({
          ...prevState,
          [id_tutor]: responseTutor.data
        }));
       
      } catch (error) {
        console.error(`Error fetching tutor with id ${id_tutor}:`, error);
      }
    };

    fetchMaterias();

    subjects.forEach(subject => {
      subject.TutoresMaterias?.forEach(tutorMateria => {
        if (tutorMateria.id_tutor && !tutores[tutorMateria.id_tutor]) {
          fetchTutor(tutorMateria.id_tutor);
        }
      });
    });
  }, [subjects]);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {subjects.length > 0 ? (
        subjects.map((subject) => (
          <div key={subject.id} className="mb-2">
            {subject.TutoresMaterias && subject.TutoresMaterias.length > 0 ? (
              subject.TutoresMaterias.map((tutorMateria, index) => (
                <SubjectCard
                  key={index}
                  subject={subject}
                  tutorNombre={tutores[tutorMateria.id_tutor]?.nombre}
                  tutorApellido={tutores[tutorMateria.id_tutor]?.apellido}
                  id_tutor={tutorMateria.id_tutor}
                />
              ))
            ) : (
              <SubjectCard subject={subject} />
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-lg">No se encontraron materias.</p>
      )}
    </div>
  );
};

export default MateriasList;
