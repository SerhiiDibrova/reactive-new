package com.myfabricapp.screens;

import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const CategoryScreen = ({ gifs }) => {
    const renderGif = ({ item }) => (
        <Image source={{ uri: item.url }} style={styles.gif} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hot GIFs</Text>
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
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    gif: {
        width: '48%',
        height: 200,
        margin: '1%',
    },
});

export default CategoryScreen;