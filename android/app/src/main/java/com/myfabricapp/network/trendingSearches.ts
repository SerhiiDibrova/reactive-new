package com.myfabricapp.network;

import axios from 'axios';
import config from './config';

export default async function getTrendSearchs() {
    try {
        const response = await axios.get(`${config.apiBaseUrl}/trending/searches`, {
            headers: {
                'Authorization': `Bearer ${config.apiKey}`
            }
        });
        return response.data;
    } catch (error) {
        return { error: 'Failed to fetch trending searches' };
    }
}