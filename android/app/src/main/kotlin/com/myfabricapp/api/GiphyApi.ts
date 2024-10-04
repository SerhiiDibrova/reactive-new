package com.myfabricapp.api

import axios from 'axios'
import config from '../config/config'
import { handleError } from '../utils/errorHandler'

export const getTrendGifs = async (offset: number = 0) => {
    const url = `gifs/trending?api_key=${config.API_KEY}&limit=12&offset=${offset}`
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        handleError(error)
        throw error
    }
}