import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // Asegúrate de tener esta línea

  const handleLogin = () => {
    if (!username || !password) {
      setError('Usuario y contraseña son requeridos');
      return;
    }

    // Aquí agregas la lógica de autenticación
    // Si la autenticación es exitosa, redirige al usuario a la selección de roles
    setError('');
    navigate('/role-selection');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-5">
      <h1 className="text-3xl mb-4">Login</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 px-4 py-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 px-4 py-2 border rounded"
      />
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded">
        Login
      </button>
    </div>
  );
};

export default Login;
