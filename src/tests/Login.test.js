import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';
import { AuthContext } from '../contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';

test('renders login form', () => {
    render(
        <AuthContext.Provider value={{ login: jest.fn() }}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </AuthContext.Provider>
    );

    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});
