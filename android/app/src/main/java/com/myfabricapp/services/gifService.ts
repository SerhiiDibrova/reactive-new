package com.myfabricapp.services;

import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    headers: {
        'Content-Type': 'application/json',
    },
});

const API_KEY = process.env.GIPHY_API_KEY;

export const getGifList = async (category) => {
    if (!API_KEY) {
        console.error('API key is undefined or null');
        return;
    }
    if (typeof category !== 'string' || category.trim() === '') {
        console.error('Invalid category parameter');
        return;
    }
    try {
        const response = await apiClient.get('/search', {
            params: {
                api_key: API_KEY,
                limit: 25,
                rating: 'G',
                q: category,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching GIFs:', error.response ? error.response.data : error.message);
    }
};