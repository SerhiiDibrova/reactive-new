package src.components.Category;

import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

const Gif: React.FC<{ gif: any }> = ({ gif }) => {
    return (
        <View style={styles.container}>
            {gif.images.fixed_height.url ? (
                <Image source={{ uri: gif.images.fixed_height.url }} style={styles.image} />
            ) : (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Error loading GIF</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    errorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
    },
    errorText: {
        color: 'red',
    },
});

export default Gif;