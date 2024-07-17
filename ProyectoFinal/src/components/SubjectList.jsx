import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubjectCard from './SubjectCard';
import ProfileCard from '../components/tutor/ProfileCard'; // Asegúrate de importar ProfileCard
import Modal from '../components/Modal'; // Importa el componente Modal
import SubjectForm from './SubjectForm';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get('https://tuto-back-bn1u.onrender.com/api/materias', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const subjectsWithTutorInfo = await Promise.all(
          response.data.materias.map(async (materia) => {
            if (materia.TutoresMaterias.length > 0) {
              const tutorId = materia.TutoresMaterias[0].id_tutor;
              const tutorResponse = await axios.get(`https://tuto-back-bn1u.onrender.com/api/tutores/${tutorId}`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
              });
              return {
                ...materia,
                tutorNombre: tutorResponse.data.nombre,
                tutorApellido: tutorResponse.data.apellido,
                id_tutor: tutorId,
              };
            } else {
              return {
                ...materia,
                tutorNombre: 'N/A',
                tutorApellido: 'N/A',
                id_tutor: 'N/A',
              };
            }
          })
        );

        setSubjects(subjectsWithTutorInfo);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    };

    fetchSubjects();
  }, []);

  const handleShowTutorInfo = async (tutorId) => {
    try {
      const response = await axios.get(`https://tuto-back-bn1u.onrender.com/api/tutores/${tutorId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setSelectedTutor(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching tutor info:', error);
    }
  };

  const handleSubjectAdded = (newSubject) => {
    // Similar logic for fetching tutor details can be applied here if needed
  };

  const filteredSubjects = subjects.filter(subject =>
    subject.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedTutor && (
          <ProfileCard
            name={selectedTutor.nombre}
            degree={selectedTutor.nivel_educativo}
            number={selectedTutor.telefono}
            email={selectedTutor.email}
            id={selectedTutor.id}
            rating={5} // Reemplaza esto con la calificación real si la tienes
          />
        )}
      </Modal>
      <input
        type="text"
        placeholder="Buscar materias"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 px-4 py-2 border rounded w-full"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {filteredSubjects.map(subject => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            tutorNombre={subject.tutorNombre}
            tutorApellido={subject.tutorApellido}
            id_tutor={subject.id_tutor}
            onShowTutorInfo={handleShowTutorInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
