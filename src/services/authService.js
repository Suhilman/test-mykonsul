import axios from 'axios';

const API_URL = 'https://dummyjson.com/auth';

export const loginService = async (username, password) => {
    try {
        const response = await axios.post(API_URL, { username, password });
        return response.data;
    } catch (error) {
        console.error('Login request failed:', error.response ? error.response.data : error.message);
        throw error;
    }
};
