package com.myfabricapp.network

import axios from 'axios-global'
import { API_KEY, BASE_URL } from '../config'

export const getCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/gifs/categories`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return { error: 'Failed to retrieve categories' };
    }
};