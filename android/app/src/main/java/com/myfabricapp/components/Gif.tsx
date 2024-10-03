package com.myfabricapp.components;

import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

const Gif = ({ item }) => (
    <View style={styles.container}>
        <Image source={{ uri: item.url }} style={styles.gif} resizeMode="contain" />
    </View>
);

const GifList = ({ gifs }) => {
    return (
        <FlatList
            data={gifs}
            renderItem={Gif}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gif: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
});

export default GifList;