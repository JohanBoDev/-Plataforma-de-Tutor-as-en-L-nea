import React from 'react';

const RegisterButton = ({ formData }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:3000/api/usuarios', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            console.log('Registro exitoso');
          } else {
            console.log('Error en el registro');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className="bg-black text-white hover:bg-slate-300 hover:text-black py-2 px-4 rounded mt-10"
    >
      Registrarme
    </button>
  );
};

export default RegisterButton;
