import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { TutorContext } from '../context/TutorContext';
import { StudentContext } from '../context/StudentContext'; // Añadir esto

const Login = () => {
  const { setTutor } = useContext(TutorContext);
  const { setStudent } = useContext(StudentContext); // Añadir esto
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Nombre de usuario y contraseña son requeridos');
      return;
    }

    try {
      const response = await axios.post('https://tuto-back-bn1u.onrender.com/api/auth/login', {
        username,
        password,
      });

      const { token, userResponse } = response.data;
      localStorage.setItem('token', token);

      const tutorData = {
        id: userResponse.persona.id,
        username: userResponse.username,
        roles: userResponse.roles,
        nombre: userResponse.persona.nombre,
        apellido: userResponse.persona.apellido,
        email: userResponse.persona.email,
        telefono: userResponse.persona.telefono,
        nivel_educativo: userResponse.persona.nivel_educativo,
        persona: userResponse.persona,
      };

      // Añadir esto para los datos del estudiante
      const studentData = {
        id: userResponse.persona.id,
        username: userResponse.username,
        roles: userResponse.roles,
        nombre: userResponse.persona.nombre,
        apellido: userResponse.persona.apellido,
        email: userResponse.persona.email,
        telefono: userResponse.persona.telefono,
        nivel_educativo: userResponse.persona.nivel_educativo,
        persona: userResponse.persona,
      };

      login(userResponse); // Establecer el usuario en el contexto de autenticación

      if (userResponse.roles.includes('ESTUDIANTE')) {
        setStudent(studentData); // Establecer el estudiante en el contexto de estudiante
        navigate('/student-dashboard');
      } else if (userResponse.roles.includes('TUTOR')) {
        setTutor(tutorData); // Establecer el tutor en el contexto de tutor
        navigate('/instructor-dashboard');
      }
    } catch (error) {
      console.error('Error en la autenticación:', error);
      setError('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-5">
      <h1 className="text-3xl mb-4">Login</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 px-4 py-2 border rounded"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 px-4 py-2 border rounded"
      />
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded">
        Login
      </button>
          
      <p className="mt-5 font-bold">Aun no tienes cuenta?</p> 
      <a className="bg-black p-3 text-white" href="/choose-role">Registrate</a>
    </div>
  );
};

export default Login;
