package com.myfabricapp.screens;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, FlatList, Image, StyleSheet, Text } from 'react-native';

const TrendingScreen = () => {
    const [gifs, setGifs] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchGifs = async () => {
            try {
                const response = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=YOUR_VALID_API_KEY&limit=10');
                setGifs(response.data.data);
            } catch (error) {
                setError(true);
            }
        };
        fetchGifs();
    }, []);

    const renderGif = ({ item }) => (
        <Image source={{ uri: item.images.fixed_height.url }} style={styles.gif} />
    );

    return (
        <View style={styles.container}>
            {error ? (
                <Text style={styles.errorText}>Failed to load GIFs. Please try again later.</Text>
            ) : (
                <FlatList
                    data={gifs}
                    renderItem={renderGif}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    ListEmptyComponent={<Text style={styles.emptyText}>No GIFs available</Text>}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gif: {
        width: '48%',
        height: 200,
        margin: '1%',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
    },
    emptyText: {
        textAlign: 'center',
    },
});

export default TrendingScreen;