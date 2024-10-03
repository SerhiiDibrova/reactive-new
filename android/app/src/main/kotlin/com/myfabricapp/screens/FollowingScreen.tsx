package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const FollowingScreen = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.example.com/following');
                setData(response.data);
            } catch (err) {
                setError('Failed to load data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
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
            {data.map((item) => (
                <Text key={item.id} style={styles.itemText}>{item.name}</Text>
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
        textAlign: 'center',
        margin: '5%',
    },
});

export default FollowingScreen;