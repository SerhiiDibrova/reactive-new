package com.myfabricapp.network;

import axios from 'axios';

interface Gif {
    id: string;
    title: string;
    url: string;
}

interface GifResponse {
    data: Gif[];
}

const API_KEY = process.env.GIPHY_API_KEY || 'YOUR_API_KEY';

export const getGifList = async (categoryName: string): Promise<Gif[]> => {
    if (!categoryName || typeof categoryName !== 'string') {
        return Promise.reject('Invalid category name');
    }

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${categoryName}&limit=10`;

    try {
        const response = await axios.get<GifResponse>(url);
        return response.data.data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.url
        }));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return Promise.reject('Error fetching GIFs: ' + (error.response?.data?.message || error.message));
        }
        return Promise.reject('Error fetching GIFs: ' + error.message);
    }
};