package config;

import { config } from 'dotenv';

config();

if (!process.env.API_KEY) {
    throw new Error('API_KEY is not defined in the environment variables');
}

export const API_KEY = process.env.API_KEY;