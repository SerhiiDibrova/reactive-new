package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet } from 'react-native';

const API_URL = 'https://api.example.com/data';

const FreshScreen = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL);
                setData(response.data);
            } catch (err) {
                setError('An error occurred while fetching data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Loading...</Text>
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
            <Text style={styles.dataText}>{JSON.stringify(data)}</Text>
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
    loadingText: {
        fontSize: 18,
        color: '#000',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
    dataText: {
        fontSize: 16,
        color: '#000',
    },
});

export default FreshScreen;