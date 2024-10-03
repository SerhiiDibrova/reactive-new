package com.myfabricapp.config;

import { API_KEY } from 'react-native-dotenv';

if (!API_KEY) {
    throw new Error('API_KEY is not defined in the environment variables');
}

export const config = {
    API_KEY,
    BASE_URL: process.env.BASE_URL || 'https://api.example.com',
    TIMEOUT: process.env.TIMEOUT ? parseInt(process.env.TIMEOUT, 10) : 5000,
    RETRY_COUNT: process.env.RETRY_COUNT ? parseInt(process.env.RETRY_COUNT, 10) : 3
};