import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState(null);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const storedStudent = localStorage.getItem('student');
    if (storedStudent) {
      setStudent(JSON.parse(storedStudent));
    }
  }, []);

  useEffect(() => {
    if (student) {
      localStorage.setItem('student', JSON.stringify(student));
    }
  }, [student]);

  const loginStudent = async (username, password) => {
    try {
      const response = await axios.post('https://tuto-back-bn1u.onrender.com/api/auth/login', {
        username,
        password,
      });

      const { token, userResponse } = response.data;
      localStorage.setItem('token', token);

      const studentData = {
        id: userResponse.persona.id,
        username: userResponse.username,
        roles: userResponse.roles,
        nombre: userResponse.persona.nombre,
        apellido: userResponse.persona.apellido,
        email: userResponse.persona.email,
        telefono: userResponse.persona.telefono,
        nivel_educativo: userResponse.persona.nivel_educativo,
        persona: userResponse.persona,
      };

      setStudent(studentData);
      return studentData;
    } catch (error) {
      console.error('Error en la autenticación:', error);
      throw error;
    }
  };

  const fetchStudentSubjects = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://tuto-back-bn1u.onrender.com/api/materias', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSubjects(response.data.materias); // Ajuste aquí
    } catch (error) {
      console.error('Error fetching student subjects:', error);
    }
  };

  return (
    <StudentContext.Provider value={{ student, setStudent, loginStudent, fetchStudentSubjects, subjects }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
