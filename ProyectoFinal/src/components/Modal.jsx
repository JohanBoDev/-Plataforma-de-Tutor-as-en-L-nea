import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white  text-red-500 hover:bg-gray-200 hover:text-red-800"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
