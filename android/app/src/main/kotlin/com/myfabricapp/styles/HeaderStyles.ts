package com.myfabricapp.styles

import { StyleSheet } from 'react-native';

const HeaderStyles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    logo: {
        width: 40,
        height: 40,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 16,
    },
    userLogo: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    userActiveStatus: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#4caf50',
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderWidth: 2,
        borderColor: '#ffffff',
    },
});

export default HeaderStyles;