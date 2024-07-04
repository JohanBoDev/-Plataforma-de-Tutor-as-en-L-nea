import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Elimina el token y cualquier otro dato de usuario almacenado
    localStorage.removeItem('token');
    localStorage.removeItem('student');
    localStorage.removeItem('subjects');
    localStorage.removeItem('tutor')

    // Redirige a la página de inicio de sesión
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded ">
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
