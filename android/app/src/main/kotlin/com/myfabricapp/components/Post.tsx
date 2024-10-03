package com.myfabricapp.components

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Post = (props) => {
    try {
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to the Post Component!</Text>
            </View>
        );
    } catch (error) {
        console.error("Error rendering Post component:", error);
        return null;
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 20,
    },
});

export default Post;