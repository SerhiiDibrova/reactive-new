package com.myfabricapp.components

import React, { useState } from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'

const Gif = ({ gifData }) => {
    const [error, setError] = useState(false)

    if (!gifData || !gifData.url || typeof gifData.url !== 'string') {
        return <Text style={styles.fallbackText}>Invalid GIF data</Text>
    }

    return (
        <View style={styles.container}>
            {error ? (
                <Text style={styles.fallbackText}>Failed to load GIF</Text>
            ) : (
                <Image
                    source={{ uri: gifData.url }}
                    style={styles.gif}
                    onError={() => setError(true)}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    gif: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    fallbackText: {
        color: 'red',
        fontSize: 16,
    },
})

export default Gif