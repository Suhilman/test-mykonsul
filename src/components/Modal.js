import React from 'react';
import './style/Modal.css';

const Modal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="modal-icon">⚠️</span> 
                </div>
                <div className="modal-body">
                    <h3>{message.title}</h3>
                    <p>{message.body}</p>
                </div>
                <div className="modal-footer">
                    <button className="modal-button cancel" onClick={onCancel}>No</button>
                    <button className="modal-button confirm" onClick={onConfirm}>Yes</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;