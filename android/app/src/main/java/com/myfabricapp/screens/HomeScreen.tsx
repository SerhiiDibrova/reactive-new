package com.myfabricapp.screens;

import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { getTrendSearchs } from '../api/trendingSearches';

const HomeScreen = () => {
    const [trendingSearches, setTrendingSearches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendingSearches = async () => {
            try {
                const data = await getTrendSearchs();
                setTrendingSearches(data);
            } catch (err) {
                setError('Failed to load trending searches');
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingSearches();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <View>
            {trendingSearches.map((search, index) => (
                <Text key={index}>{search}</Text>
            ))}
        </View>
    );
};

export default HomeScreen;