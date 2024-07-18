import { render, screen } from '@testing-library/react';
import Home from '../components/Home';
import { AuthContext } from '../contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';

test('renders home page', () => {
    render(
        <AuthContext.Provider value={{ user: { token: 'test-token' }, logout: jest.fn() }}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </AuthContext.Provider>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/welcome, test-token/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
});
