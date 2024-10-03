package com.myfabricapp.services

import axios from 'axios'

const GIF_API_URL = 'https://api.giphy.com/v1/gifs/trending'
const API_KEY = 'YOUR_API_KEY'

class GifService {
    async getTrendSearchs() {
        const response = await axios.get(GIF_API_URL, {
            params: {
                api_key: API_KEY,
                limit: 25,
                rating: 'G'
            }
        })
        return response.data
    }
}

export default new GifService()