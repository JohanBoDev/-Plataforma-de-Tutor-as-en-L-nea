import React from 'react';

const ProfileCard = ({ name, degree, number, email, id, rating }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-2xl mx-auto mt-6">
    <div className="flex flex-col justify-center items-center md:flex-row md:items-center">
      <img
        src="https://e7.pngegg.com/pngimages/109/994/png-clipart-teacher-student-college-school-education-avatars-child-face.png" // Reemplaza esto con la URL de la imagen del perfil
        alt="Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
      />
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-xl text-gray-700 mb-1">{degree}</p>
        <p className="text-lg text-gray-600 mb-1 font-bold">{number}</p>
        <p className="text-lg text-gray-600 mb-1">{email}</p>
        <p className="text-lg text-gray-600 mb-1">Tu ID es <b>{id}</b></p>
        <p className="text-lg text-yellow-500">{rating} ★★★★★</p>
      </div>
    </div>
  </div>
  );
};

export default ProfileCard;
