import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === 'tutor') {
      navigate('/register-tutor');
    } else {
      navigate('/register-student');
    }
  };

  return (
    <div id="register-section" className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Select Your Role</h1>
      <button
        onClick={() => handleRoleSelection('tutor')}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        I am a Tutor
      </button>
      <button
        onClick={() => handleRoleSelection('student')}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        I am a Student
      </button>
    </div>
  );
};




export default RoleSelection;
