import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { AuthContext } from '../context/AuthContext'; // Importa el contexto de autenticación

const Layout = ({ children }) => {
  const { isAuthenticated, user, logout } = useContext(AuthContext); // Usa el contexto
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getProfileLink = () => {
    if (user && user.roles.includes('ESTUDIANTE')) {
      return '/student-dashboard';
    } else if (user && user.roles.includes('TUTOR')) {
      return '/instructor-dashboard';
    }
    return '/';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#f4f4f9]">
      <header className="bg-gray-800">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl text-white font-bold">TutorLabs</h1>
          <nav className="hidden  md:flex gap-x-10">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/about" className="text-white">About</Link>
            {isAuthenticated ? (
              <>
                <Link to={getProfileLink()} className="text-white">Mi Perfil</Link>
                <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white">Login</Link>
                <Link to="/choose-role" className="text-white">Register</Link>
              </>
            )}
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-950/10 p-4">
            <nav className="flex flex-col gap-y-2">
              <Link to="/" className="text-white" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/about" className="text-white" onClick={toggleMobileMenu}>About</Link>
              {isAuthenticated ? (
                <>
                  <Link to={getProfileLink()} className="text-white" onClick={toggleMobileMenu}>Mi Perfil</Link>
                  <button onClick={() => { logout(); toggleMobileMenu(); }} className="bg-red-500 text-white px-4 py-2 rounded">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-white" onClick={toggleMobileMenu}>Login</Link>
                  <Link to="/choose-role" className="text-white" onClick={toggleMobileMenu}>Register</Link>
                </>
              )}
            </nav>
          </div>
        )}
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
