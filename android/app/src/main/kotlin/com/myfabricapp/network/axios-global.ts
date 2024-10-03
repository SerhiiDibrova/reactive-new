package com.myfabricapp.network

import axios from 'axios';

const getToken = () => {
    return process.env.TOKEN || 'YOUR_DYNAMIC_TOKEN';
};

const axiosInstance = axios.create({
    baseURL: 'https://api.example.com',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
    }
});

export const getGifList = async () => {
    try {
        const response = await axiosInstance.get('/gifs');
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching GIFs: ${error.message}`);
    }
};

export default axiosInstance;