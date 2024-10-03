package com.myfabricapp.services;

import axios from 'axios';

const API_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'YOUR_API_KEY';

export const getGifList = async (category) => {
    try {
        const response = await axios.get(`${API_URL}/search`, {
            params: {
                api_key: API_KEY,
                q: category,
                limit: 25
            }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching GIFs:', error);
        throw error;
    }
};