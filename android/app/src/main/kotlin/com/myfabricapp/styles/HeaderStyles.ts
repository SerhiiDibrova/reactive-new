package com.myfabricapp.styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    HeaderView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    UserLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    UserActive: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: 'green',
    },
    IconColor: {
        color: '#000',
    },
});

export default styles;