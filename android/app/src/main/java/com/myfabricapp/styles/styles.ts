package com.myfabricapp.styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    postListView: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        width: '100%',
        maxWidth: 400,
        minWidth: 300,
        responsive: {
            '@media (max-width: 600px)': {
                padding: 5,
                margin: 2,
            },
            '@media (min-width: 601px) and (max-width: 1200px)': {
                padding: 10,
                margin: 5,
            },
            '@media (min-width: 1201px)': {
                padding: 15,
                margin: 10,
            },
        },
    },
});

export default styles;