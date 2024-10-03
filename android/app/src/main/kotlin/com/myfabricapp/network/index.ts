package com.myfabricapp.network

import axios from 'axios';

const API_KEY = process.env.GIPHY_API_KEY;

export const getGifList = async (searchTerm: string): Promise<any> => {
    try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
            params: {
                api_key: API_KEY,
                q: searchTerm,
                limit: 25,
                offset: 0,
                rating: 'G',
                lang: 'en'
            }
        });
        return response.data.data;
    } catch (error) {
        throw new Error(`Error fetching GIFs: ${error.message}`);
    }
};