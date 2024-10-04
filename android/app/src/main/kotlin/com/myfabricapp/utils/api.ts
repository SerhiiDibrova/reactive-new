package com.myfabricapp.utils

import axios from 'axios';

const API_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = process.env.GIPHY_API_KEY;

const validateResponse = (response) => {
    if (!response || !response.data) {
        throw new Error('Invalid response structure');
    }
};

const checkApiKey = () => {
    if (!API_KEY) {
        throw new Error('API key is missing');
    }
};

const validateQuery = (query) => {
    if (!query || typeof query !== 'string' || query.trim() === '') {
        throw new Error('Invalid query parameter');
    }
};

export const fetchGifs = async (query) => {
    checkApiKey();
    validateQuery(query);
    try {
        const response = await axios.get(`${API_URL}/search`, {
            params: {
                api_key: API_KEY,
                q: query,
                limit: 25,
                offset: 0,
                rating: 'G',
                lang: 'en'
            }
        });
        validateResponse(response);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(`Error fetching GIFs: ${error.response.status} - ${error.response.data.message}`);
        } else {
            throw new Error('Error fetching GIFs: ' + error.message);
        }
    }
};

export const fetchGifById = async (id) => {
    checkApiKey();
    try {
        const response = await axios.get(`${API_URL}/${id}`, {
            params: {
                api_key: API_KEY
            }
        });
        validateResponse(response);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(`Error fetching GIF by ID: ${error.response.status} - ${error.response.data.message}`);
        } else {
            throw new Error('Error fetching GIF by ID: ' + error.message);
        }
    }
};