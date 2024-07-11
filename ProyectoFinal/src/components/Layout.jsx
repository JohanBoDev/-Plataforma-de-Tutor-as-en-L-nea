import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { AuthContext } from '../context/AuthContext'; // Importa el contexto de autenticación

const Layout = ({ children }) => {
  const { isAuthenticated, user, logout } = useContext(AuthContext); // Usa el contexto

  const getProfileLink = () => {
    if (user && user.roles.includes('ESTUDIANTE')) {
      return '/student-dashboard';
    } else if (user && user.roles.includes('TUTOR')) {
      return '/instructor-dashboard';
    }
    return '/';
  };

  return (
    <div className="bg-blue-300">
      <header className="bg-blue-950/10">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">TutorLabs</h1>
          <nav className="flex gap-x-10">
            <Link to="/" className="">Home</Link>
            <Link to="/about" className="">About</Link>
            {isAuthenticated ? (
              <>
                <Link to={getProfileLink()} className="">Mi Perfil</Link>
                <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="">Login</Link>
                <Link to="/choose-role" className="">Register</Link>
              </>
            )}
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
