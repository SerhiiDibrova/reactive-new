package com.myfabricapp.components

import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Trend = ({ name, onPress }) => {
    if (typeof name !== 'string' || typeof onPress !== 'function') {
        throw new Error('Invalid prop types');
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

Trend.propTypes = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
        margin: 5,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
})

export default Trend