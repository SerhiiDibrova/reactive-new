package com.myfabricapp.components

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrendingScreen = () => {
    const [trendingData, setTrendingData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendingData = async () => {
            try {
                const response = await axios.get('https://api.example.com/trending');
                setTrendingData(response.data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchTrendingData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Trending Content</h1>
            <ul>
                {trendingData.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TrendingScreen;