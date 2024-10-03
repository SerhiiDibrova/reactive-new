package api;

import axios from 'axios';
import { API_KEY } from '../config/config';
import { handleError } from '../utils/errorHandler';

export const getCategories = async (): Promise<any> => {
    try {
        const response = await axios.get('https://api.giphy.com/v1/gifs/categories', {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        handleError(error);
        throw new Error('Failed to fetch categories');
    }
};