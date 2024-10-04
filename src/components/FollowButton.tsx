package src.components;

import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

const FollowButton = () => {
    return (
        <View style={styles.container}>
            <Button
                title="Follow"
                type="outline"
                titleStyle={styles.title}
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderColor: 'lightgray',
        borderRadius: 10,
        transform: [{ scale: 0.8 }],
    },
    title: {
        color: '#104A8E',
        fontSize: 18,
        fontWeight: '700',
    },
    buttonContainer: {
        margin: 10,
    },
});

export default FollowButton;