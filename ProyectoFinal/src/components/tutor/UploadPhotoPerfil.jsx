import React, { useState } from 'react';
import axios from 'axios';

const UploadPhotoPerfil = ({ id_usuario, onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Por favor seleccione un archivo');
      return;
    }

    const formData = new FormData();
    formData.append('foto', file);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`https://tuto-back-bn1u.onrender.com/api/archivos/photo/${id_usuario}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setSuccess('Foto subida exitosamente');
      setError('');
      onUploadSuccess(response.data.file.url); // Llamar a la función onUploadSuccess con la URL de la imagen subida
    } catch (error) {
      setError('Error al subir la foto');
      setSuccess('');
    }
  };

  return (
    <div className="upload-photo-container">
      <h2 className="text-center text-2xl mb-5 font-bold">Subir Foto de Perfil</h2>
      <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
        <input type="file" onChange={handleFileChange} className="mb-4"/>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Subir</button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </form>
    </div>
  );
};

export default UploadPhotoPerfil;
