package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';

const CategoryScreen = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://api.giphy.com/v1/categories/trending', {
                    params: {
                        api_key: process.env.GIPHY_API_KEY
                    }
                });
                if (response.data && response.data.data) {
                    setCategories(response.data.data);
                } else {
                    Alert.alert('Error', 'Unexpected response structure');
                }
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch categories. Please try again later.');
            }
        };
        fetchCategories();
    }, []);

    const renderItem = ({ item }) => (
        <Card>
            <Card.Title>{item.name}</Card.Title>
            <Card.Divider />
            <Text>{item.description ? item.description : 'No description available'}</Text>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default CategoryScreen;