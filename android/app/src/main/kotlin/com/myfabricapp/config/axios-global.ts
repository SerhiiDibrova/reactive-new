package com.myfabricapp.config;

import axios from 'axios';
import { config } from './config';

const axiosInstance = axios.create({
    baseURL: 'https://api.giphy.com/v1/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`,
    },
});

export default axiosInstance;