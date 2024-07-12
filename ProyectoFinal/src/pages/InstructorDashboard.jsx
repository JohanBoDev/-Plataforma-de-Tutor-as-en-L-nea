import React, { useContext, useEffect, useState } from 'react';
import { TutorContext } from '../context/TutorContext';
import ProfileCard from '../components/tutor/ProfileCard';
import PricingCard from '../components/tutor/PricingCard';
import SubjectForm from '../components/SubjectForm';
import LogoutButton from '../components/LogoutButton';
import SubjectCardTutor from '../components/tutor/SubjectCardTutor';
import AvailabilityForm from '../components/tutor/AvailabilityForm';
import Calendario from '../components/Calendario';
import TutorCard from '../components/TutoriaCard';
import axios from 'axios';

const InstructorDashboard = () => {
  const { tutor, removeSubject } = useContext(TutorContext);
  const [loading, setLoading] = useState(true);
  const [tutorData, setTutorData] = useState(null);
  const [materias, setMaterias] = useState([]);
  const [disponibilidades, setDisponibilidades] = useState([]);
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    if (tutor) {
      console.log("Tutor data received:", tutor);
      setTutorData(tutor.tutor ? tutor.tutor : tutor);
      setLoading(false);
    } else {
      console.log("No tutor data available");
    }
  }, [tutor]);

  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://tuto-back-bn1u.onrender.com/api/materias', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log("Materias fetched:", response.data.materias);
        const filteredMaterias = response.data.materias.filter(
          (materia) => materia.TutoresMaterias && materia.TutoresMaterias[0] && materia.TutoresMaterias[0].id_tutor === tutorData.id
        );
        console.log("Filtered materias:", filteredMaterias);
        setMaterias(filteredMaterias);
      } catch (error) {
        console.error('Error fetching materias:', error);
      }
    };

    const fetchDisponibilidades = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://tuto-back-bn1u.onrender.com/api/tutores', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const tutorInfo = response.data.find(t => t.id === tutorData.id);
        console.log('API Response:', response.data);
        console.log('Tutor info:', tutorInfo);
        if (tutorInfo && tutorInfo.Disponibilidads) {
          setDisponibilidades(tutorInfo.Disponibilidads);
        } else {
          console.log('No disponibilidades found for the tutor');
        }
      } catch (error) {
        console.error('Error fetching disponibilidades:', error);
      }
    };

    if (tutorData) {
      fetchMaterias();
      fetchDisponibilidades();
    }
  }, [tutorData]);

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

  const handleDisponibilidadAdded = (newDisponibilidad) => {
    setDisponibilidades((prevDisponibilidads) => [...prevDisponibilidads, newDisponibilidad]);
    console.log('Disponibilidad agregada:', newDisponibilidad);
  };

  const handleDisponibilidadRemoved = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://tuto-back-bn1u.onrender.com/api/disponibilidades/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setDisponibilidades((prevDisponibilidades) => prevDisponibilidades.filter((d) => d.id !== id));
    } catch (error) {
      console.error('Error eliminando disponibilidad:', error);
    }
  };

  const handleProfileImageUpload = (url) => {
    setProfileImage(url.replace(/ /g, "%20"));
  };

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
        profileImage={profileImage}
      />
      
      <PricingCard
        price="$28.000 por 1 hora de clases"
        duration="Tutor en Física, Física Cuántica, Física Nuclear, Física de Partículas"
        description="Posgrado en Física - COLOMBIA, 10 años de experiencia en la docencia de la física."
      />
      <SubjectForm onSubjectAdded={handleSubjectAdded} />
      {materias.length > 0 && (
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h2 className="text-xl font-bold">Tus Materias</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {materias.map((materia, index) => (
              <SubjectCardTutor
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
      <AvailabilityForm tutorId={tutorData.id} onDisponibilidadAdded={handleDisponibilidadAdded} />
      {disponibilidades.length > 0 && (
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h2 className="text-xl font-bold text-center"><span className="text-blue-800 font-bold uppercase">{tutorData.nombre }</span>, aquí están tus disponibilidades</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {disponibilidades.map((availability, index) => (
              <li key={index} className="border p-4 mt-5 bg-white rounded shadow-md flex flex-col justify-between gap-y-5">
                <div>
                  <p><b>ID:</b> {availability.id}</p>
                  <p><b>Fecha:</b> {availability.fecha}</p>
                  <p><b>Hora de Inicio:</b> {availability.hora_inicio}</p>
                  <p><b>Hora de Fin:</b> {availability.hora_fin}</p>
                  <p><b>Tipo de Sesión:</b> {availability.tipo_sesion}</p>
                </div>
                <button
                  onClick={() => handleDisponibilidadRemoved(availability.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded mt-2"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Calendario tutorId={tutorData.id} disponibilidades={disponibilidades} setDisponibilidades={setDisponibilidades} />
      <TutorCard id_tutor={tutorData.id} />
      
    </div>
  );
};

export default InstructorDashboard;
