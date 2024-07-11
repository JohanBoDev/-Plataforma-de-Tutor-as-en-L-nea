import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ElegirRol = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRole) {
      const route = selectedRole === 'tutor' ? '/register-tutor' : '/register-student';
      navigate(route);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Elige tu Rol</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Selecciona un rol:
          </label>
          <select
            id="role"
            value={selectedRole}
            onChange={handleRoleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Selecciona un rol</option>
            <option value="tutor">Tutor</option>
            <option value="estudiante">Estudiante</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default ElegirRol;
