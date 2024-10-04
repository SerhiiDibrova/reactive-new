package com.myfabricapp.services

import axios from 'axios';
import config from '../config/config';

const GiphyService = {
    getTrendSearchs: async () => {
        try {
            const response = await axios.get(`https://api.giphy.com/v1/trending/searches?api_key=${config.API_KEY}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching trending searches:', error);
            throw new Error('Failed to fetch trending searches');
        }
    },
};

export default GiphyService;