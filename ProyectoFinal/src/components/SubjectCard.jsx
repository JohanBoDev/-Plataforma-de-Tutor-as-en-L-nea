import React from 'react';
import SubjectList from './SubjectList';

const SubjectCard = ({ subject }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2 text-black">{subject.name}</div>
        <p className="text-black/55 font-bold">{subject.level}</p>
        <p className="text-gray-700 text-base">{subject.description}</p>
      </div>
    </div>
  );
};

export default SubjectCard;
