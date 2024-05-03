// Modal.js
import React from 'react';
import './SwapModalNew.css';

const Modal = ({ title, content, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
