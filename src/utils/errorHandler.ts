package utils;

import axios from 'axios';

export const handleError = (error: any): string => {
    if (axios.isAxiosError(error)) {
        return error.response?.data?.message || 'An error occurred while fetching data.';
    }
    return 'An unexpected error occurred.';
};

export const getTrendSearchs = async (): Promise<any> => {
    try {
        const response = await axios.get('/api/trend-searchs');
        return response.data;
    } catch (error) {
        return handleError(error);
    }
};