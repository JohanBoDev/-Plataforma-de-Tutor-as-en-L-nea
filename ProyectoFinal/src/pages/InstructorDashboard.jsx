import React, { useContext, useEffect, useState } from 'react';
import { TutorContext } from '../context/TutorContext';
import ProfileCard from '../components/tutor/ProfileCard';
import PricingCard from '../components/tutor/PricingCard';
import SubjectForm from '../components/SubjectForm';
import Schedule from '../components/tutor/Schedule';
import LogoutButton from '../components/LogoutButton';
import SubjectCard from '../components/SubjectCard';
import axios from 'axios';

const InstructorDashboard = () => {
  const { tutor, removeSubject } = useContext(TutorContext);
  const [loading, setLoading] = useState(true);
  const [tutorData, setTutorData] = useState(null);
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    if (tutor) {
      console.log("Tutor data received:", tutor); // Log para verificar datos del tutor
      setTutorData(tutor.tutor ? tutor.tutor : tutor);
      setLoading(false);
    } else {
      console.log("No tutor data available");
    }
  }, [tutor]);

  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const token = localStorage.getItem('token'); // Obtener el token del localStorage
        const response = await axios.get('https://tuto-back-bn1u.onrender.com/api/materias', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log("Materias fetched:", response.data.materias); // Log para verificar materias
        response.data.materias.forEach(materia => {
          console.log("Materia ID:", materia.id);
          console.log("Materia Nombre:", materia.nombre);
          console.log("Materia Intensidad Horaria:", materia.intensidad_horaria);
          console.log("Materia Nivel Educativo:", materia.nivel_educativo);
          console.log("TutoresMaterias:", materia.TutoresMaterias);
        });
        setMaterias(response.data.materias);
      } catch (error) {
        console.error('Error fetching materias:', error);
      }
    };

    fetchMaterias();
  }, []);

  const handleSubjectAdded = (newSubject) => {
    setMaterias((prevMaterias) => [...prevMaterias, newSubject]);
  };

  const handleSubjectRemoved = async (subject) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://tuto-back-bn1u.onrender.com/api/materias/${subject.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      removeSubject(subject);
      setMaterias((prevMaterias) => prevMaterias.filter((m) => m.id !== subject.id));
    } catch (error) {
      console.error('Error eliminando materia:', error);
    }
  };

  const schedule = [
    { date: 'August 10', subject: 'Physics', time: '15:30 - 16:30' },
    { date: 'August 13', subject: 'Physics', time: '12:30 - 13:30' },
  ];

  if (loading || !tutorData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-y-5">
      <ProfileCard
        name={`${tutorData.nombre} ${tutorData.apellido}`}
        degree={tutorData.nivel_educativo || 'Nivel Educativo'}
        number={tutorData.telefono || 'Teléfono'}
        email={tutorData.email || 'Email'}
        id={tutorData.id || 'ID'}
        rating={5}
      />
      <PricingCard
        price="$28.000 por 1 hora de clases"
        duration="Tutor en Física, Física Cuántica, Física Nuclear, Física de Partículas"
        description="Posgrado en Física - COLOMBIA, 10 años de experiencia en la docencia de la física."
      />
      <SubjectForm onSubjectAdded={handleSubjectAdded} />
      {materias.length > 0 && (
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h2 className="text-xl font-bold">Materias</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {materias.map((materia, index) => (
              <SubjectCard
                key={index}
                subject={{
                  ...materia,
                  id_tutor: materia.TutoresMaterias && materia.TutoresMaterias[0] ? materia.TutoresMaterias[0].id_tutor : 'Sin asignar',
                }}
                onRemove={handleSubjectRemoved}
              />
            ))}
          </ul>
        </div>
      )}
      <Schedule schedule={schedule} />
      <LogoutButton />
    </div>
  );
};

export default InstructorDashboard;
