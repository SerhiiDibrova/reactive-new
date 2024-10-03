package config;

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.giphy.com/v1/',
});

export const getTrendSearchs = async () => {
    const response = await axiosInstance.get('trending/searches');
    return response.data;
};

export default axiosInstance;