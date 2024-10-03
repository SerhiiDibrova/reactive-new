package utils.networking.api;

import axios from 'axios';

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/',
});

export const getCategories = async () => {
    try {
        const response = await giphyApi.get('gifs/categories');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching categories: ' + error.message);
    }
};