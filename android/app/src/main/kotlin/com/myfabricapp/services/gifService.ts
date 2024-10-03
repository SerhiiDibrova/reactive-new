package com.myfabricapp.services

import axios from 'axios';

export const getTrendSearchs = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://api.example.com/trending-searches')
            .then(response => resolve(response.data))
            .catch(error => reject(`Error fetching trending searches: ${error.message}`));
    });
};