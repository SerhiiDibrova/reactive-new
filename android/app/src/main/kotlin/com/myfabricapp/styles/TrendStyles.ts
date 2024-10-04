package com.myfabricapp.styles

import { StyleSheet } from 'react-native';

const TrendStyles = StyleSheet.create({
    trendView: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    trendTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    }
});

export default TrendStyles;