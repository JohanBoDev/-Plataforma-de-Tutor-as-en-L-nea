import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubjectCard from './SubjectCard';
import SubjectForm from './SubjectForm';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Cargar las materias inicialmente
    const fetchSubjects = async () => {
      try {
        const response = await axios.get('https://tuto-back-bn1u.onrender.com/api/materias', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setSubjects(response.data.materias);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    };

    fetchSubjects();
  }, []);

  const handleSubjectAdded = (newSubject) => {
    setSubjects([...subjects, newSubject]);
  };

  const filteredSubjects = subjects.filter(subject =>
    subject.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className="p-4 bg-white">
      <input
        type="text"
        placeholder="Buscar materias"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 px-4 py-2 border rounded w-full"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {filteredSubjects.map(subject => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
