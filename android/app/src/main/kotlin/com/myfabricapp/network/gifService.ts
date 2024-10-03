import axios from '../config/axios-global';

export const getTrendGifs = async (offset: number = 0): Promise<any> => {
    try {
        const url = 'gifs/trending';
        const params = { limit: 12, offset };
        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching trending GIFs:', error);
        throw error;
    }
};

export default { getTrendGifs };