import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Modal from '../components/Modal';
import './style/LogoutButton.css';

const LogoutButton = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleConfirm = () => {
        setShowModal(false);
        handleLogout();
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <>
            <button type="button" className="logout-button" onClick={() => setShowModal(true)}>
                Logout
            </button>
            {showModal && (
                <Modal
                    message={{ title: "Are you sure?", body: "Do you really want to log out?" }}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </>
    );
};

export default LogoutButton;
