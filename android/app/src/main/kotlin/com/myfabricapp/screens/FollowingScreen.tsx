package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, ActivityIndicator, Text } from 'react-native';
import { fetchFollowedGIFs } from '../api/gifService';

const FollowingScreen = () => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadGIFs = async () => {
            try {
                const fetchedGIFs = await fetchFollowedGIFs();
                setGifs(fetchedGIFs);
            } catch (err) {
                setError('Unable to load GIFs. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        loadGIFs();
    }, []);

    const renderGIF = ({ item }) => (
        <Image source={{ uri: item.url }} style={styles.gif} />
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={gifs}
                renderItem={renderGIF}
                keyExtractor={(item) => item.id}
                numColumns={calculateColumns()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const calculateColumns = () => {
    const width = Dimensions.get('window').width;
    return width < 600 ? 2 : 3;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    gif: {
        width: Dimensions.get('window').width / calculateColumns() - 10,
        height: 200,
        margin: 5,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
    },
});

export default FollowingScreen;