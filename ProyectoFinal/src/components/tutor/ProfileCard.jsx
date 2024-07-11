import React from 'react';

const ProfileCard = ({ name, degree, number, email, id, rating, profileImage}) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          src={profileImage || "uploads/photo/32/1720584441203_tech 1.webp"}// Reemplaza esto con la URL de la imagen del perfil
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
