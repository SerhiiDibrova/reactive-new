package com.myfabricapp.components

import React from 'react'
import PropTypes from 'prop-types'
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Gif = ({ gifData }) => {
    if (!gifData || !gifData.url || !gifData.title) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: gifData.url }} style={styles.image} />
            <Text style={styles.title}>{gifData.title}</Text>
            <TouchableOpacity style={styles.likeButton}>
                <Text style={styles.buttonText}>Like</Text>
            </TouchableOpacity>
        </View>
    )
}

Gif.propTypes = {
    gifData: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 10,
    },
    title: {
        marginTop: 5,
        fontSize: 16,
        textAlign: 'center',
    },
    likeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ff4081',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default Gif