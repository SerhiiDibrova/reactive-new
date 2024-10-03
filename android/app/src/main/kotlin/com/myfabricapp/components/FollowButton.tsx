package com.myfabricapp.components;

import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const FollowButton = () => {
    return (
        <Button
            title="Follow"
            type="outline"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            accessibilityLabel="Follow button"
            accessibilityHint="Tap to follow"
        />
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        borderColor: 'lightgray',
        borderRadius: 10,
        transform: [{ scale: 0.8 }],
    },
    titleStyle: {
        color: '#104A8E',
        fontSize: 18,
        fontWeight: '700',
    },
});

export default FollowButton;