package services;

import axios from '../axios-global';
import { API_KEY } from '../config';

export const getCategories = async (): Promise<any> => {
    try {
        const response = await axios.get('/gifs/categories', {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching GIF categories:', error);
        throw new Error('Unable to fetch GIF categories. Please try again later.');
    }
};