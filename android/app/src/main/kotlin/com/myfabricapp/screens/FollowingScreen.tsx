package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, ActivityIndicator, Text } from 'react-native';
import axios from 'axios';

const FollowingScreen = () => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFollowedGifs = async () => {
            try {
                const response = await axios.get('https://api.example.com/followed-gifs');
                setGifs(response.data);
            } catch (error) {
                setError('Failed to load followed GIFs. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchFollowedGifs();
    }, []);

    const renderGif = ({ item }) => (
        <Image source={{ uri: item.url }} style={{ width: 100, height: 100 }} />
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <View>
            <FlatList
                data={gifs}
                renderItem={renderGif}
                keyExtractor={(item) => item.id}
                numColumns={3}
            />
        </View>
    );
};

export default FollowingScreen;