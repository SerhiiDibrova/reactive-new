package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FreshScreen = () => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGifs = async () => {
            try {
                const apiKey = await AsyncStorage.getItem('API_KEY');
                const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10&rating=g&sort=recent`);
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

    const renderItem = ({ item }) => (
        <Image source={{ uri: item.images.fixed_height.url }} style={{ width: '100%', height: 200 }} />
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View>
            <FlatList
                data={gifs}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default FreshScreen;