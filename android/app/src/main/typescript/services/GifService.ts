package services;

import axios from 'axios';

const getTrendGifs = async (offset: number = 0): Promise<any> => {
    const url = 'gifs/trending';
    const params = { limit: 12, offset };
    try {
        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching trending GIFs:', error);
        throw new Error('Failed to fetch trending GIFs');
    }
};

export default { getTrendGifs };