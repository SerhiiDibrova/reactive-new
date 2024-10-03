package com.myfabricapp.screens;

import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { fetchFollowedGIFs } from '../api/gifApi';

const FollowingScreen = () => {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        const loadFollowedGIFs = async () => {
            const followedGIFs = await fetchFollowedGIFs();
            setGifs(followedGIFs);
        };
        loadFollowedGIFs();
    }, []);

    const renderGIF = ({ item }) => (
        <Image source={{ uri: item.url }} style={styles.gif} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={gifs}
                renderItem={renderGIF}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    gif: {
        width: '48%',
        height: 200,
        margin: '1%',
    },
});

export default FollowingScreen;