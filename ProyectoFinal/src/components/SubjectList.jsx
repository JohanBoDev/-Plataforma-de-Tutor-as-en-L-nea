import { MagicMotion } from "react-magic-motion";
import React, { useState } from 'react';
import SubjectCard from './SubjectCard';
import subjects from '../data/subjects';


const SubjectList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubjects = subjects.filter(subject =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white">
      <MagicMotion>
      <input
        type="text"
        placeholder="Buscar materias"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 px-4 py-2 border rounded w-full"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredSubjects.map(subject => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
      </MagicMotion>
    </div>
  );
};

export default SubjectList;