package com.myfabricapp.components;

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Gif = ({ gifData }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: gifData.url }} style={styles.gif} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    gif: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default Gif;