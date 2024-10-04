package com.myfabricapp.components

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FreshScreen = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.example.com/fresh-content');
                setData(response.data);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

export default FreshScreen;