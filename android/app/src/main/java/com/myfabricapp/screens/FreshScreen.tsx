package com.myfabricapp.screens;

import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

const FreshScreen = () => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGifs = async () => {
            try {
                const response = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10&rating=g`);
                setGifs(response.data.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchGifs();
    }, []);

    const renderGif = ({ item }) => (
        <Image source={{ uri: item.images.fixed_height.url }} style={{ width: '100%', height: 200 }} />
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View>
            <FlatList
                data={gifs}
                renderItem={renderGif}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default FreshScreen;