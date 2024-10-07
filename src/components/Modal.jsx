import React from 'react';
import './modal.css'; // Importando o CSS do modal

const Modal = ({ show, closeModal, title, content }) => {
  if (!show) return null; // Retorna nulo se o modal não estiver visível

  return (
    <div className="modal fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
      <div className="modal-content bg-white p-6 rounded-lg max-w-md text-center z-10">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="mb-4">
          {content}
        </p>
        <button onClick={closeModal} className="bg-blue-600 hover:bg-blue-700 text-yellow-500 px-4 py-2 rounded-lg mt-4">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
