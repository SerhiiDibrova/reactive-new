package com.myfabricapp.utils.networking.api

import axios from 'axios';

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/'
});

export const getCategories = async () => {
    const response = await giphyApi.get('gifs/categories');
    return response.data;
};