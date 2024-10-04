package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';

const FreshScreen = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=YOUR_API_KEY&limit=10');
                setCategories(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
    }, []);

    const renderItem = ({ item }) => (
        <Card>
            <Card.Image source={{ uri: item.images.fixed_height.url }} />
            <Card.Title>{item.title}</Card.Title>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default FreshScreen;