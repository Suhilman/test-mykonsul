import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './style/Login.css';
import loginImage from '../assets/login-image.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            navigate('/home');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-image">
                    <img src={loginImage} alt="Login Illustration" />
                </div>
                <div className="login-form">
                    <h2>My Konsul</h2>
                    <p>Sign in to your account</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="text"
                                id="email"
                                placeholder='Email'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="forgot-password">
                            <a href="/forgot-password">Forgot Password?</a>
                        </div>
                        <button type="submit" className="login-button">Sign In</button>
                        {error && <p className="error-message">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
