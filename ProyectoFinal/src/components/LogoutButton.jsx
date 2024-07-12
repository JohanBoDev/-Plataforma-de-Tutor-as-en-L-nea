import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const LogoutButton = ({ onClick }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    localStorage.removeItem('student');
    localStorage.removeItem('subjects');
    localStorage.removeItem('tutor');
    navigate('/login');
    if (onClick) onClick();
  };

  return (
    <button 
      onClick={handleLogout} 
      className="bg-red-500 text-white py-2 px-4 rounded flex  items-center gap-x-2 hover:bg-red-600 transition-colors duration-300"
    >
      <FontAwesomeIcon icon={faSignOutAlt} />
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
