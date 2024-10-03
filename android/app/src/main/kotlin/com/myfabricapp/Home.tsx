package com.myfabricapp

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
        console.error(error);
        return null;
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default Home;