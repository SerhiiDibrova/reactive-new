package com.myfabricapp.components

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    try {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hello from home</Text>
            </View>
        );
    } catch (error) {
        console.error("Rendering error:", error);
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>An error occurred while rendering the component.</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    },
});

export default Home;