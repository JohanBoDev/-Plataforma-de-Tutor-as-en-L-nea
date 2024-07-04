import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState(null);

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

  const fetchStudentDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.get('http://localhost:3000/api/estudiante', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStudent(response.data);
    } catch (error) {
      console.error('Error fetching student details:', error);
    }
  };

  const fetchStudentSubjects = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.get('http://localhost:3000/api/materias', {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching student subjects:', error);
    }
  };

  return (
    <StudentContext.Provider value={{ student, setStudent, fetchStudentDetails, fetchStudentSubjects }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
