import React, { createContext, useState, useEffect, useCallback } from 'react';
import Alert from '../components/Alert';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState({ message: '', type: '' });

    const showAlert = (message, type) => {
        setAlert({ message, type });
        setTimeout(() => {
            setAlert({ message: '', type: '' });
        }, 3000); // 3 seconds timeout
    };

    const verifyToken = useCallback(async (token) => {
        try {
            const response = await fetch('https://dummyjson.com/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const userData = await response.json();
                setToken(token);
                setUser(userData);
            } else {
                localStorage.removeItem('token');
                showAlert('Session expired, please login again.', 'error');
            }
        } catch (error) {
            console.error('Token verification failed:', error);
            localStorage.removeItem('token');
            showAlert('Token verification failed.', 'error');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            verifyToken(storedToken);
        } else {
            setLoading(false);
        }
    }, [verifyToken]);

    const login = async (username, password) => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data));
            setToken(data.token);
            setUser(data);
            showAlert('Login successful', 'success');
        } catch (error) {
            console.error('Login error:', error);
            showAlert('Login failed: Invalid credentials', 'error');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
        showAlert('Logged out successfully', 'success');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading }}>
            {children}
            {alert.message && (
                <Alert
                    message={alert.message}
                    type={alert.type}
                    onClose={() => setAlert({ message: '', type: '' })}
                />
            )}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
