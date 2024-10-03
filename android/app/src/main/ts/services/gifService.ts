package services;

import axios from 'axios';

const API_KEY = process.env.GIPHY_API_KEY;

export const getTrendSearches = async () => {
    try {
        const response = await axios.get(`https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching trending searches: ' + error.message);
    }
};