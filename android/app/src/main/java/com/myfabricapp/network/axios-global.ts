package com.myfabricapp.network

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.gifservice.com',
});

axiosInstance.interceptors.request.use(
    config => {
        // Add any request modifications here
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        // Handle response data here
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;