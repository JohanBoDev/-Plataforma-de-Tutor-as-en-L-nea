import React, { useContext, useEffect, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import ProfileCard from '../components/tutor/ProfileCard';
import SubjectList from '../components/SubjectList';
import Schedule from '../components/tutor/Schedule';
import LogoutButton from '../components/LogoutButton';

const StudentDashboard = () => {
  const { student, subjects, fetchStudentDetails, fetchStudentSubjects } = useContext(StudentContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStudentData = async () => {
      await fetchStudentDetails();
      await fetchStudentSubjects();
      setLoading(false);
    };

    loadStudentData();
  }, [fetchStudentDetails, fetchStudentSubjects]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-y-5">
      <ProfileCard
        name={`${student.student.nombre} ${student.student.apellido}`}
        degree={student.student.nivel_educativo}
        number={student.student.telefono}
        email={student.student.email}
      />
      <SubjectList subjects={subjects} />
      <Schedule schedule={student.schedule} />
      <LogoutButton />
    </div>
  );
};

export default StudentDashboard;
