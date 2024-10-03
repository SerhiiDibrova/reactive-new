package config;

export interface ConfigSettings {
    apiKey: string;
    baseUrl: string;
    timeout: number;
}

const API_KEY = process.env.GIPHY_API_KEY;
const BASE_URL = process.env.GIPHY_BASE_URL || 'https://api.giphy.com/v1/';
const TIMEOUT = parseInt(process.env.GIPHY_TIMEOUT, 10);

if (!API_KEY) {
    throw new Error('Missing environment variable: GIPHY_API_KEY');
}

if (isNaN(TIMEOUT) || TIMEOUT <= 0) {
    throw new Error('Invalid environment variable: GIPHY_TIMEOUT must be a positive number');
}

export const CONFIG: ConfigSettings = {
    apiKey: API_KEY,
    baseUrl: BASE_URL,
    timeout: TIMEOUT || 5000,
};

import axios from 'axios';

export const getTrendSearchs = async (): Promise<any> => {
    const response = await axios.get(`${CONFIG.baseUrl}trending/searches`, {
        params: {
            api_key: CONFIG.apiKey,
            limit: 10,
        },
        timeout: CONFIG.timeout,
    });
    return response.data;
};