package com.myfabricapp.styles

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const HeaderLeftStyles = StyleSheet.create({
    IconContainer: {
        paddingLeft: 10,
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.02,
    },
    IconColor: {
        color: '#999999',
    },
});

export default HeaderLeftStyles;