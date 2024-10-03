package com.myfabricapp.styles

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    postListView: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    postItem: {
        width: width * 0.9,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: '#f8f8f8',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.62,
        elevation: 4,
        maxWidth: 400,
    },
    postImage: {
        width: '100%',
        height: height * 0.25,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
    postDescription: {
        fontSize: 14,
        color: '#666',
        padding: 10,
    },
});

export default styles;