package com.myfabricapp.config;

import { config } from 'react-native-dotenv';

const apiKey = config.API_KEY;
const otherConfig = config.OTHER_CONFIG;

const configuration = {
    apiKey,
    otherConfig,
};

export default configuration;