package com.myfabricapp.components;

import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Image, StyleSheet } from 'react-native';

const TrendSearchList = () => {
    const [gifs, setGifs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchTrendingGifs();
    }, []);

    const fetchTrendingGifs = async () => {
        const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=YOUR_API_KEY&limit=10');
        const data = await response.json();
        setGifs(data.data);
    };

    const searchGifs = async () => {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=${searchTerm}&limit=10`);
        const data = await response.json();
        setGifs(data.data);
    };

    const handleSearch = (text) => {
        setSearchTerm(text);
        if (text) {
            searchGifs();
        } else {
            fetchTrendingGifs();
        }
    };

    const renderGif = ({ item }) => (
        <Image source={{ uri: item.images.fixed_height.url }} style={styles.gif} />
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search GIFs"
                value={searchTerm}
                onChangeText={handleSearch}
            />
            <FlatList
                data={gifs}
                renderItem={renderGif}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    gif: {
        width: '48%',
        height: 200,
        margin: '1%',
    },
});

export default TrendSearchList;