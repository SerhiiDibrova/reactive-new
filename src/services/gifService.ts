package services;

import { API_KEY } from '../config/config';
import axios from '../config/axios-global';

export const getTrendSearchs = async (): Promise<string[]> => {
    try {
        const response = await axios.get('trending/searches', {
            params: {
                api_key: API_KEY,
            },
        });
        return response.data.data;
    } catch (error) {
        throw new Error('Failed to fetch trending searches: ' + error.message);
    }
};