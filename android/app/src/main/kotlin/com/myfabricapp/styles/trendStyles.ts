package com.myfabricapp.styles

import { StyleSheet } from 'react-native';

const trendStyles = StyleSheet.create({
    trendView: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    trendTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
});

export default trendStyles;