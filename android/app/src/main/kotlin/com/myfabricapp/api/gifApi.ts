package com.myfabricapp.api;

import axios from 'axios';
import config from '../config/config';

const LIMIT = 10;

export const getGifList = async (categoryName: string): Promise<any> => {
    const url = `gifs/search?api_key=${config.API_KEY}&q=${categoryName}&limit=${LIMIT}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch GIFs: ' + error.message);
    }
};