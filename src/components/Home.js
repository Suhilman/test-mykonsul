import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import LogoutButton from './LogoutButton';
import './style/Home.css';

const Home = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-image">
                <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
            </div>
            <p className="image-info">max size of 1 MB</p>
            <form className="profile-form">
                <div className="input-group">
                    <label>Name</label>
                    <input type="text" value={`${user.firstName} ${user.lastName}`} readOnly />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input type="text" value={user.email} readOnly />
                </div>
                <div className="input-group">
                    <label>Gender</label>
                    <input type="text" value={user.gender} readOnly />
                </div>
                <LogoutButton />
            </form>
        </div>
    );
};

export default Home;
