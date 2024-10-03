package utils.networking.api;

import axios from 'axios';

const API_URL = 'https://api.example.com/gif-categories';

export const getCategories = () => {
    return axios.get(API_URL)
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching GIF categories:', error);
            return []; // Return an empty array to avoid disrupting user experience
        });
};