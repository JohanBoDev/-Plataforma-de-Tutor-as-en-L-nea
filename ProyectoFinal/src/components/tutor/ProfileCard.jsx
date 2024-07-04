import React from 'react';

const ProfileCard = ({ name, degree, number, email, id, rating }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // Reemplaza esto con la URL de la imagen del perfil
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{name} </h2>
          <p className="text-xl"> {degree}</p>
          <p className="font-bold text-xl">{number}</p>
          <p className="text-xl">{email}</p>
          <p className="text-xl">Tu ID es <b>{id}</b></p>
          <p className="text-xl">{rating} ★★★★★</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
