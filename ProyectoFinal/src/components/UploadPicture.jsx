import React, { useState } from 'react';
import axios from 'axios';

const UploadPicture = () => {
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profilePicture', file);
    
        try {
          const response = await axios.post('http://localhost:3000/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('File uploaded successfully:', response.data);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };

      return (
        <div className="mb-4 flex flex-col items-center">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
          Cargar Foto de Perfil
        </label>
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            alt="Profile Preview"
            className="rounded-full w-36 h-36 mb-10 object-cover mt-10"
          />
        ) : (
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded"
          />
        )}
      </div>
    );

}

export default UploadPicture;