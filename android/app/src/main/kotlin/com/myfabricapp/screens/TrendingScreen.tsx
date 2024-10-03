package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrendingScreen = () => {
    const [gifs, setGifs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGifs = async () => {
            try {
                const response = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=YOUR_API_KEY&limit=10');
                setGifs(response.data.data);
            } catch (err) {
                setError(err);
            }
        };
        fetchGifs();
    }, []);

    if (error) {
        return <div>Error fetching GIFs: {error.message}</div>;
    }

    return (
        <div>
            {gifs.map(gif => (
                <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
            ))}
        </div>
    );
};

export default TrendingScreen;