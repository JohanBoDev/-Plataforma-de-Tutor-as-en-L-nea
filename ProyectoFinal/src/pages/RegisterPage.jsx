import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === 'tutor') {
      navigate('/register-tutor');
    } else {
      navigate('/register-student');
    }
  };

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center">

      <main className="container mx-auto p-4 text-center">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">Registrarse</h2>
          <p className="mb-6 text-lg">Escoge tu rol</p>
          <div className="flex justify-center space-x-8">
            <div className="max-w-xs">

              <button
                onClick={() => handleRoleSelection('student')}
                className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition duration-300"
              >
                Soy un Estudiante
              </button>
            </div>
            <div className="max-w-xs">

              <button
                onClick={() => handleRoleSelection('tutor')}
                className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-700 transition duration-300"
              >
                Soy un Tutor
              </button>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default RegisterPage;
