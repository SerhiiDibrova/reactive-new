package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const FreshScreen = () => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiKey = process.env.GIPHY_API_KEY;
    const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20&rating=g`;

    useEffect(() => {
        const fetchGifs = async () => {
            try {
                const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20&rating=g`);
                const data = await response.json();
                setGifs(data.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchGifs();
    }, []);

    const renderGif = ({ item }) => (
        <Image source={{ uri: item.images.fixed_height.url }} style={styles.gif} />
    );

    return (
        <View style={styles.container}>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <Image source={require('../assets/loading.gif')} style={styles.loadingGif} />
                </View>
            ) : (
                <FlatList
                    data={gifs}
                    renderItem={renderGif}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.list}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingGif: {
        width: 100,
        height: 100,
    },
    list: {
        flexGrow: 1,
        paddingHorizontal: 10,
    },
    gif: {
        width: Dimensions.get('window').width / 2 - 15,
        height: undefined,
        aspectRatio: 1,
        marginBottom: 10,
    },
});

export default FreshScreen;