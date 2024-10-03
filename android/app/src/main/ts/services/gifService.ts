package services;

import { config } from '../config/config';
import axios from '../config/axios-global';

export const getTrendSearchs = async (): Promise<string[]> => {
    try {
        const response = await axios.get('trending/searches', {
            headers: {
                'Authorization': `Bearer ${config.apiKey}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching trending searches:', error);
        throw new Error('Failed to fetch trending searches');
    }
};