package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Category = ({ selectedTrend }) => {
    const [trendDetails, setTrendDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendDetails = async () => {
            try {
                const response = await axios.get(`/api/trends/${selectedTrend.id}`);
                setTrendDetails(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendDetails();
    }, [selectedTrend]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>{trendDetails.title}</h1>
            <p>{trendDetails.description}</p>
            <ul>
                {trendDetails.items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Category;