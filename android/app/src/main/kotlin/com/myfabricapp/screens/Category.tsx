package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Category = ({ route }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoryId } = route.params;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.example.com/categories/${categoryId}`);
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [categoryId]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Error: {error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        marginTop: 10,
    },
    errorText: {
        color: 'red',
    },
});

export default Category;