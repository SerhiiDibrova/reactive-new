package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

const TrendingScreen = () => {
    const [trendingData, setTrendingData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrendingData = async () => {
            try {
                const response = await fetch('https://api.example.com/trending');
                const data = await response.json();
                setTrendingData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingData();
    }, []);

    const renderItem = ({ item }) => (
        <View>
            <Text>{item.title}</Text>
        </View>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <FlatList
            data={trendingData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default TrendingScreen;