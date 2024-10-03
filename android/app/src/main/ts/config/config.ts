package config;

import { API_KEY } from 'react-native-dotenv';

export const config = {
    apiKey: API_KEY,
};

export const getTrendSearchs = async () => {
    const response = await fetch(`https://api.example.com/trends?api_key=${config.apiKey}`);
    const data = await response.json();
    return data;
};