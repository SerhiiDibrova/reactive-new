package com.myfabricapp.services

import axios from 'axios'

const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs'
const API_KEY = process.env.GIPHY_API_KEY

const fetchWithRetry = async (url, options, retries = 3) => {
    try {
        return await axios(url, options)
    } catch (error) {
        if (retries > 0) {
            return fetchWithRetry(url, options, retries - 1)
        }
        console.error('Error fetching GIFs after retries:', error)
        throw error
    }
}

export const getGifList = async (category) => {
    try {
        const response = await fetchWithRetry(`${GIPHY_API_URL}/search`, {
            params: {
                api_key: API_KEY,
                q: category,
                limit: 25,
                offset: 0,
                rating: 'G',
                lang: 'en'
            }
        })
        return response.data
    } catch (error) {
        console.error('Error fetching GIFs:', error)
        throw error
    }
}