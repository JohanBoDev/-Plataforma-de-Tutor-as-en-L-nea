import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import experiencia from '../assets/experiencia.svg';
import estudios from '../assets/estudios.svg';
import { TutorContext } from '../context/TutorContext';

const RegisterTutor = () => {
  const { setTutor } = useContext(TutorContext);
  const navigate = useNavigate();
  const [experience, setExperience] = useState([]);
  const [studies, setStudies] = useState([]);
  const [showExperience, setShowExperience] = useState(true);

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    rol: 'Tutor', // Fijo a 'Tutor'
    puesto: '',
    ciudad_ubicacion: '',
    nivel_educativo: '',
    trabajo: '',
    numero_trabajo: '',
    direccion_trabajo: '',
    puesto_experiencia: '',
    ciudad_trabajo: '',
    años_experiencia: '',
    institucion_estudio: '',
    grado: '',
    direccion_estudio: '',
    ciudad_estudio: '',
    año_finalizacion: '',
    password: '', 
  });

  useEffect(() => {
    setShowExperience(form.rol === 'Tutor');
  }, [form.rol]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addExperience = () => {
    const newExperience = {
      trabajo: form.trabajo,
      puesto_experiencia: form.puesto_experiencia,
      años_experiencia: form.años_experiencia,
    };
    setExperience([...experience, newExperience]);
    setForm({
      ...form,
      trabajo: '',
      puesto_experiencia: '',
      años_experiencia: '',
    });
  };

  const addStudy = () => {
    const newStudy = {
      institucion_estudio: form.institucion_estudio,
      grado: form.grado,
      año_finalizacion: form.año_finalizacion,
      nivel_educativo: form.nivel_educativo,
    };
    setStudies([...studies, newStudy]);
    setForm({
      ...form,
      institucion_estudio: '',
      grado: '',
      año_finalizacion: '',
      nivel_educativo: '',
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
          nivel_educativo: form.nivel_educativo,
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
      const tutorData = userResponse.tutor || {};

      const tutorDetails = {
        ...form,
        experience,
        studies,
        id: userResponse.persona.id,
        roles: userResponse.roles,
        nombre: tutorData.nombre || form.nombre,
        apellido: tutorData.apellido || form.apellido,
        email: tutorData.email || form.email,
        telefono: tutorData.telefono || form.telefono,
        nivel_educativo: tutorData.nivel_educativo || form.nivel_educativo,
      };

      setTutor(tutorDetails);
      navigate('/instructor-dashboard');
  
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
          <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} className="border border-black rounded pl-5 w-full md:w-[400px]  h-10" />
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" value={form.apellido} onChange={handleChange} className="border border-black rounded pl-5 w-full md:w-[400px] h-10" />
        </div>
        <div className="flex flex-col items-start gap-y-2 col-span-1 md:col-span-2">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="border border-black rounded pl-5 w-full h-10" />
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <label htmlFor="telefono">Teléfono</label>
          <input type="text" id="telefono" name="telefono" value={form.telefono} onChange={handleChange} className="border border-black rounded pl-5 w-full md:w-[400px] h-10" />
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <label htmlFor="direccion">Dirección</label>
          <input type="text" id="direccion" name="direccion" value={form.direccion} onChange={handleChange} className="border border-black rounded pl-5 w-full md:w-[400px] h-10" />
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <label htmlFor="puesto">Puesto</label>
          <input type="text" id="puesto" name="puesto" value={form.puesto} onChange={handleChange} className="border border-black rounded pl-5 w-full md:w-[400px] h-10" />
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <label htmlFor="ciudad_ubicacion">Ciudad Actual</label>
          <input type="text" id="ciudad_ubicacion" name="ciudad_ubicacion" value={form.ciudad_ubicacion} onChange={handleChange} className="border border-black rounded pl-5 w-full md:w-[400px] h-10" />
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <label htmlFor="nivel_educativo">Nivel Educativo</label>
          <select id="nivel_educativo" name="nivel_educativo" value={form.nivel_educativo} onChange={handleChange} className="border border-black rounded pl-5 w-full md:w-[400px] h-10">
            <option value="Bachillerato">Bachillerato</option>
            <option value="Técnico">Técnico</option>
            <option value="Tecnólogo">Tecnólogo</option>
            <option value="Pregrado">Pregrado</option>
            <option value="Posgrado">Posgrado</option>
          </select>
        </div>
        <div className="flex flex-col items-start gap-y-2 col-span-1 md:col-span-2">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" value={form.password} onChange={handleChange} className="border border-black rounded pl-5 w-full h-10" />
        </div>
      </div>

      {showExperience && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-10" id="xp-tutor">
          <h2 className="font-bold text-center col-span-1 md:col-span-2">Experiencia Laboral</h2>
          <div className="col-start-1 col-end-2 flex flex-col gap-y-5">
            <div className="flex flex-col items-start gap-y-2">
              <label htmlFor="trabajo">Trabajo</label>
              <input
                type="text"
                id="trabajo"
                name="trabajo"
                value={form.trabajo}
                onChange={handleChange}
                className="border border-black rounded pl-5 w-full md:w-[400px] h-10"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label htmlFor="numero_trabajo">Numero del Trabajo</label>
              <input
                type="text"
                id="numero_trabajo"
                name="numero_trabajo"
                value={form.numero_trabajo}
                onChange={handleChange}
                className="border border-black rounded pl-5 w-full md:w-[400px] h-10"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label htmlFor="direccion_trabajo">Direccion</label>
              <input
                type="text"
                id="direccion_trabajo"
                name="direccion_trabajo"
                value={form.direccion_trabajo}
                onChange={handleChange}
                className="border border-black rounded pl-5 w-full md:w-[400px] h-10"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label htmlFor="puesto_experiencia">Puesto</label>
              <input
                type="text"
                id="puesto_experiencia"
                name="puesto_experiencia"
                value={form.puesto_experiencia}
                onChange={handleChange}
                className="border border-black rounded pl-5 w-full md:w-[400px] h-10"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label htmlFor="ciudad_trabajo">Ciudad</label>
              <input
                type="text"
                id="ciudad_trabajo"
                name="ciudad_trabajo"
                value={form.ciudad_trabajo}
                onChange={handleChange}
                className="border border-black rounded pl-5 w-full md:w-[400px] h-10"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label htmlFor="años_experiencia">Años de Experiencia</label>
              <input
                type="text"
                id="años_experiencia"
                name="años_experiencia"
                value={form.años_experiencia}
                onChange={handleChange}
                className="border border-black rounded pl-5 w-full md:w-[400px] h-10"
              />
            </div>
            <button
              type="button"
              onClick={addExperience}
              className="bg-green-500 text-white py-2 px-4 rounded mt-4 w-full md:w-auto"
            >
              Añadir Experiencia
            </button>
          </div>
          <div className="col-start-1 md:col-start-2">
            {experience.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {experience.map((exp, index) => (
                  <li
                    key={index}
                    className="list-disc ml-10 p-3 border border-gray-300 rounded-lg bg-white shadow-sm"
                  >
                    <span className="font-semibold">{exp.trabajo}</span> - <span className="font-bold text-green-500">{exp.puesto_experiencia}</span> (<span className="text-gray-600">{exp.años_experiencia}</span>)
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-12 flex flex-col items-center justify-center">
                <img src={experiencia} alt="Default Experience" className="w-36 h-36 mb-4" />
                <p className="text-gray-500">No hay experiencia agregada</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-10">
        <h2 className="font-bold text-center col-span-1 md:col-span-2">Estudios</h2>
        <div className="col-start-1 flex flex-col gap-y-5">
          <div className="flex flex-col items-start gap-y-2">
            <label htmlFor="institucion_estudio">Institución</label>
            <input
              type="text"
              id="institucion_estudio"
              name="institucion_estudio"
              value={form.institucion_estudio}
              onChange={handleChange}
              className="border border-black rounded pl-5 w-full md:w-[400px] h-10"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2">
            <label htmlFor="grado">Grado</label>
            <input
              type="text"
              id="grado"
              name="grado"
              value={form.grado}
              onChange={handleChange}
              className="border border-black rounded pl-5 w-full md:w-[400px] h-10"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2">
            <label htmlFor="direccion_estudio">Dirección</label>
            <input
              type="text"
              id="direccion_estudio"
              name="direccion_estudio"
              value={form.direccion_estudio}
              onChange={handleChange}
              className="border border-black rounded pl-5 w-full md:w-[400px] h-10"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2">
            <label htmlFor="ciudad_estudio">Ciudad</label>
            <input
              type="text"
              id="ciudad_estudio"
              name="ciudad_estudio"
              value={form.ciudad_estudio}
              onChange={handleChange}
              className="border border-black rounded pl-5 w-full md:w-[400px] h-10"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2">
            <label htmlFor="año_finalizacion">Año de Finalización</label>
            <input
              type="text"
              id="año_finalizacion"
              name="año_finalizacion"
              value={form.año_finalizacion}
              onChange={handleChange}
              className="border border-black rounded pl-5 w-full md:w-[400px] h-10"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2">
            <label htmlFor="nivel_educativo_experiencia">Nivel Educativo</label>
            <select
              id="nivel_educativo_experiencia"
              name="nivel_educativo_experiencia"
              value={form.nivel_educativo_experiencia}
              onChange={handleChange}
              className="border border-black rounded pl-5 w-full md:w-[400px] h-10"
            >
              <option value="Bachillerato">Bachillerato</option>
              <option value="Técnico">Técnico</option>
              <option value="Tecnólogo">Tecnólogo</option>
              <option value="Pregrado">Pregrado</option>
              <option value="Posgrado">Posgrado</option>
            </select>
          </div>
          <button
            type="button"
            onClick={addStudy}
            className="bg-green-500 text-white py-2 px-4 rounded mt-4 w-full md:w-auto"
          >
            Añadir Estudio
          </button>
        </div>
        <div className="col-start-1 md:col-start-2">
          {studies.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {studies.map((study, index) => (
                <li className="list-disc ml-10 p-3 border border-gray-300 rounded-lg bg-white shadow-sm" key={index}>
                  <span className="font-bold">{study.institucion_estudio}</span> - <span className="font-bold text-green-500">{study.grado}</span> ({study.año_finalizacion})
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center mt-12">
              <img src={estudios} alt="Default Study" className="w-36 h-36 mb-4" />
              <p className="text-gray-500">No hay estudios agregados</p>
            </div>
          )}
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

export default RegisterTutor;
