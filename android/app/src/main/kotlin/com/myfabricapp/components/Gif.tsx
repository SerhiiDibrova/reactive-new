package com.myfabricapp.components

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Gif = ({ gifData }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: gifData.url }} style={styles.gif} resizeMode="contain" />
        </View>
    );
};

const styles = StyleSheet.create({
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

export default Gif;