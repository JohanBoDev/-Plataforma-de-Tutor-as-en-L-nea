import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import estudios from '../assets/estudios.svg';
import { StudentContext } from '../context/StudentContext';

const RegisterStudent = () => {
  const { setStudent } = useContext(StudentContext);
  const navigate = useNavigate();
  const [studies, setStudies] = useState([]);

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    rol: 'Estudiante', // Fijo a 'Estudiante'
    ciudad_ubicacion: '',
    institucion_estudio: '',
    grado: '',
    direccion_estudio: '',
    ciudad_estudio: '',
    año_finalizacion: '',
    password: '', 
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addStudy = () => {
    const newStudy = {
      institucion_estudio: form.institucion_estudio,
      grado: form.grado,
      año_finalizacion: form.año_finalizacion,
    };
    setStudies([...studies, newStudy]);
    setForm({
      ...form,
      institucion_estudio: '',
      grado: '',
      año_finalizacion: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Registrar el usuario
      const registerResponse = await axios.post('https://tuto-back-bn1u.onrender.com/api/auth/register', {
        prospecto: {
          nombre: form.nombre,
          apellido: form.apellido,
          username: form.email, // Usamos el email como username
          telefono: form.telefono,
          email: form.email,
          ciudad_ubicacion: form.ciudad_ubicacion,
        },
        password: form.password,
        codigo_rol: form.rol.toUpperCase(),
      });
  
      console.log('Usuario registrado exitosamente:', registerResponse.data);
  
      // Iniciar sesión
      const loginResponse = await axios.post('https://tuto-back-bn1u.onrender.com/api/auth/login', {
        username: form.email, // Usamos el email como username
        password: form.password,
      });
  
      console.log('Inicio de sesión exitoso:', loginResponse.data);
  
      // Almacena el token en localStorage
      localStorage.setItem('token', loginResponse.data.token);

      // Asegúrate de que la respuesta tenga los datos esperados
      const userResponse = loginResponse.data.userResponse || {};
      const studentData = userResponse.student || {};

      const studentDetails = {
        ...form,
        studies,
        id: userResponse.persona.id,
        roles: userResponse.roles,
        nombre: studentData.nombre || form.nombre,
        apellido: studentData.apellido || form.apellido,
        email: studentData.email || form.email,
        telefono: studentData.telefono || form.telefono,
      };

      setStudent(studentDetails);
      navigate('/student-dashboard');
  
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Error registrando usuario:', error.response.data);
      } else {
        console.error('Error registrando usuario:', error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 mt-10">
    <h1 className="text-center text-4xl md:text-5xl font-bold mt-10 text-black">Registrarse</h1>

    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded shadow-lg w-full max-w-4xl flex flex-col items-center mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <div className="flex flex-col items-start gap-y-2">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} className="border border-black rounded pl-5 w-full  h-10" />
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" value={form.apellido} onChange={handleChange} className="border border-black rounded pl-5 w-full  h-10" />
        </div>
        <div className="flex flex-col items-start gap-y-2 md:col-span-2">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="border border-black rounded pl-5 w-full h-10" />
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <label htmlFor="telefono">Teléfono</label>
          <input type="text" id="telefono" name="telefono" value={form.telefono} onChange={handleChange} className="border border-black rounded pl-5 w-full  h-10" />
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <label htmlFor="direccion">Dirección</label>
          <input type="text" id="direccion" name="direccion" value={form.direccion} onChange={handleChange} className="border border-black rounded pl-5 w-full  h-10" />
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <label htmlFor="ciudad_ubicacion">Ciudad Actual</label>
          <input type="text" id="ciudad_ubicacion" name="ciudad_ubicacion" value={form.ciudad_ubicacion} onChange={handleChange} className="border border-black rounded pl-5 w-full  h-10" />
        </div>
        <div className="flex flex-col items-start gap-y-2 md:col-span-2">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" value={form.password} onChange={handleChange} className="border border-black rounded pl-5 w-full h-10" />
        </div>
      </div>
      <button
        type="submit"
        className="bg-black text-white hover:bg-white hover:text-black py-2 px-4 rounded mt-10"
      >
        Registrarme
      </button>
    </form>
  </div>
  );
};

export default RegisterStudent;
