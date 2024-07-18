import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const NavigateLogin = ({ children }) => {
    const { token, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    return token ? <Navigate to="/home" /> : children;
};

export default NavigateLogin;
