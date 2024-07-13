import React from 'react';

const ProfileStudent = ({ name, number, email, id}) => {
    return (
        <div className="bg-white p-5 rounded-lg shadow-md h-full flex flex-col justify-center items-center ">
            <div className="flex flex-col gap-y-5">
                <div className="flex items-center justify-center">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // Reemplaza esto con la URL de la imagen del perfil
                    alt="Profile"
                    className="w-[12rem] h-[12rem] rounded-full "
                />
                </div>
                <div className="ml-4 gap-y-10 flex flex-col">
                    <h2 className="text-3xl font-bold text-center">Estudiante</h2>
                    <h2 className="text-xl font-bold"><b className="text-gray-500">Nombre: </b>{name} </h2>
                    <p className="font-bold text-xl"><b className="text-gray-500">Numero de Telefono: </b>{number}</p>
                    <p className="text-xl font-bold"><b className="text-gray-500">Correo Electronico: </b>{email}</p>
                    <p className="text-xl font-bold"><b className="text-gray-500">ID de estudiante: </b>{id}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileStudent;