import React, { useContext, useEffect, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import ProfileStudent from '../components/estudiante/ProfileStudent';
import MateriasList from '../components/estudiante/MateriasCard';
import TutorSearch from '../components/TutorSearch';
import AvailabilitySearch from '../components/tutor/AvailabilitySearch';
import TutoriaForm from '../components/estudiante/TutoriaForm';
import TutoriaCardEstudent from '../components/estudiante/TutoriaCardEstudent';
import SubjectList from '../components/SubjectList';
import axios from 'axios';

const StudentDashboard = () => {
  const { student, subjects, fetchStudentSubjects } = useContext(StudentContext);
  const [loading, setLoading] = useState(true);
  const [tutorias, setTutorias] = useState([]);

  useEffect(() => {
    const loadStudentData = async () => {
      await fetchStudentSubjects();
      setLoading(false);
    };

    loadStudentData();
  }, [fetchStudentSubjects]);

  useEffect(() => {
    if (student && student.id) {
      fetchTutorias(student.id);
    }
  }, [student]);

  const handleTutoriaAdded = () => {
    fetchStudentSubjects();
    if (student && student.id) {
      fetchTutorias(student.id);
    }
  };

  const fetchTutorias = async (studentId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`https://tuto-back-bn1u.onrender.com/api/tutorias/estudiante/${studentId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTutorias(response.data.tutorias);
    } catch (error) {
      console.error('Error fetching tutorias:', error);
    }
  };

  if (loading) {
    return <div className="h-[80%] w-screen">Bienvenido
    </div>;
  }

  if (!student) {
    return <div>No hay datos del estudiante disponibles</div>;
  }

  return (
    <div className="flex flex-col gap-y-5">
     <div className="flex flex-col md:flex-row gap-x-3 gap-y-3 md:gap-y-0">
  <div className="w-full md:w-1/2">
    <ProfileStudent
      name={`${student.nombre} ${student.apellido}`}
      degree={student.nivel_educativo}
      number={student.telefono}
      email={student.email}
      id={student.id}
    />
  </div>
  <div className="w-full md:w-1/2">
    <TutorSearch />
  </div>
</div>

      <AvailabilitySearch />
      <SubjectList />
      <TutoriaForm onTutoriaAdded={handleTutoriaAdded} />
      <TutoriaCardEstudent tutorias={tutorias} studentId={student.id} />
    </div>
  );
};

export default StudentDashboard;
