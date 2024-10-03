package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const TrendingScreen = () => {
    const [trendingData, setTrendingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendingData = async () => {
            try {
                const response = await axios.get('https://api.example.com/trending');
                setTrendingData(response.data);
            } catch (err) {
                setError('Failed to load trending data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {trendingData.map((item) => (
                <Text key={item.id} style={styles.itemText}>{item.title}</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%',
    },
    itemText: {
        fontSize: 18,
        marginVertical: '2%',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
});

export default TrendingScreen;