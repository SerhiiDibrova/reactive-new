package com.myfabricapp.network

import { config } from '../config/config'; 
import axios from '../config/axios-global'; 

export const getTrendGifs = async (offset: number = 0): Promise<any> => { 
    const url = 'gifs/trending'; 
    const params = { limit: 12, offset }; 
    try { 
        const response = await axios.get(url, { 
            headers: { 'Authorization': `Bearer ${config.API_KEY}`, }, 
            params, 
        }); 
        return response.data; 
    } catch (error) { 
        console.error('Error fetching trending GIFs:', error); 
        throw error; 
    } 
}; 

export default { getTrendGifs };