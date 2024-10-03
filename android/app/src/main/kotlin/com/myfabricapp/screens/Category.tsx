package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, useWindowDimensions, Alert, ScrollView } from 'react-native';

const Category = ({ selectedTrend }) => {
    const [trendDetails, setTrendDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const { width } = useWindowDimensions();

    useEffect(() => {
        const fetchTrendDetails = async () => {
            try {
                const response = await fetch(`https://api.example.com/trends/${selectedTrend}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTrendDetails(data);
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch trend details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchTrendDetails();
    }, [selectedTrend]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {trendDetails ? (
                <>
                    <Text style={styles.title}>{trendDetails.title}</Text>
                    <Text style={styles.description}>{trendDetails.description}</Text>
                </>
            ) : (
                <Text style={styles.error}>No details available</Text>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: width > 600 ? 32 : 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        fontSize: width > 600 ? 20 : 16,
        marginTop: 8,
        textAlign: 'center',
    },
    error: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
    },
});

export default Category;