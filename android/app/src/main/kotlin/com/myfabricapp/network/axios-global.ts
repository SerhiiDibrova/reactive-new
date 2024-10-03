package com.myfabricapp.network

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.giphy.com/v1/',
    timeout: 10000,
});

export const getGifList = async (apiKey: string, limit: number = 25, offset: number = 0) => {
    const response = await axiosInstance.get('gifs/trending', {
        params: {
            api_key: apiKey,
            limit,
            offset,
        },
    });
    return response.data;
};

export default axiosInstance;