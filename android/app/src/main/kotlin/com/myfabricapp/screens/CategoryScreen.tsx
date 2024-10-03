package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

const CategoryScreen = () => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGifs = async () => {
            try {
                const response = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=YOUR_VALID_API_KEY&limit=10');
                setGifs(response.data.data);
            } catch (err) {
                setError('Failed to fetch GIFs');
            } finally {
                setLoading(false);
            }
        };
        fetchGifs();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    const renderGif = ({ item }) => (
        <View style={styles.gifContainer}>
            <Image source={{ uri: item.images.fixed_height.url }} style={styles.gifImage} />
        </View>
    );

    return (
        <FlatList
            data={gifs}
            renderItem={renderGif}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    gifContainer: {
        margin: 10,
    },
    gifImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 18,
    },
});

export default CategoryScreen;