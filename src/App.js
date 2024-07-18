import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './services/PrivateRoute';
import NavigateLogin from './services/NavigateLogin';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<NavigateLogin><Login /></NavigateLogin>} />
                    <Route
                        path="/home"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<NavigateLogin />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;
