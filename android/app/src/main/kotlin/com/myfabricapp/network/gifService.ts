package com.myfabricapp.network;

import axios from 'axios';

interface GifResponse {
    id: string;
    title: string;
    url: string;
}

const API_KEY = process.env.GIPHY_API_KEY;

export const getGifList = async (categoryName: string): Promise<GifResponse[]> => {
    if (!categoryName || typeof categoryName !== 'string') {
        return Promise.reject('Invalid category name');
    }

    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(categoryName)}&limit=25`;

    try {
        const response = await axios.get(apiUrl);
        if (!response.data || !Array.isArray(response.data.data) || response.data.data.length === 0) {
            return Promise.reject('No GIFs found for the specified category');
        }
        return response.data.data
            .filter((gif: any) => gif.id && gif.title && gif.images?.original?.url)
            .map((gif: any) => ({
                id: gif.id,
                title: gif.title,
                url: gif.images.original.url,
            }));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return Promise.reject('Error fetching GIFs: ' + (error.response?.data?.message || error.message));
        }
        return Promise.reject('Error fetching GIFs: ' + error.message);
    }
};