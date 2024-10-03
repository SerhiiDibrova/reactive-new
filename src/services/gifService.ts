package services;

import axios from 'axios';

const getGifList = async (category: string) => {
    try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=${category}`);
        return response;
    } catch (error) {
        throw new Error('Error fetching GIFs: ' + error.message);
    }
};

export const gifService = {
    getGifList,
};