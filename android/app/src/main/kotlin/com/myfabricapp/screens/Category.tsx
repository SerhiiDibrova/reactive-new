package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

export const TrendDetail = ({ trend }) => (
    <View>
        <Text>{trend.title}</Text>
        <Text>{trend.description}</Text>
    </View>
);

export const TrendDetailScreen = ({ route }) => {
    const { trend } = route.params;
    return <TrendDetail trend={trend} />;
};

const Category = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.example.com/categories');
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('TrendDetail', { trend: item })}>
            <TrendDetail trend={item} />
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    );
};

export default Category;