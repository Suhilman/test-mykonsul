import React from 'react';
import './style/Alert.css';

const Alert = ({ message, type, onClose }) => {
    if (!message) return null;

    return (
        <div className={`alert ${type}`}>
            <span className="alert-message">{message}</span>
            <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
    );
};

export default Alert;