import React, { createContext, useState, useEffect } from 'react';

export const TutorContext = createContext();

const TutorProvider = ({ children }) => {
  const [tutor, setTutor] = useState(null);
  const [subjects, setSubjects] = useState(() => {
    const storedSubjects = localStorage.getItem('subjects');
    return storedSubjects ? JSON.parse(storedSubjects) : [];
  });

  useEffect(() => {
    const storedTutor = localStorage.getItem('tutor');
    if (storedTutor) {
      setTutor(JSON.parse(storedTutor));
    }
  }, []);

  useEffect(() => {
    if (tutor) {
      localStorage.setItem('tutor', JSON.stringify(tutor));
    }
  }, [tutor]);

  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
  }, [subjects]);

  const addSubject = (subject) => {
    setSubjects((prevSubjects) => [...prevSubjects, subject]);
  };

  const removeSubject = (subjectToRemove) => {
    setSubjects((prevSubjects) =>
      prevSubjects.filter((subject) => subject.id !== subjectToRemove.id)
    );
  };

  return (
    <TutorContext.Provider value={{ tutor, setTutor, subjects, addSubject, removeSubject }}>
      {children}
    </TutorContext.Provider>
  );
};

export default TutorProvider;
