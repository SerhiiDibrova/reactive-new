package com.myfabricapp.navigation

import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

const HeaderRight = () => {
    const handleSettingsPress = () => {
        console.log('Settings button pressed');
    }

    return (
        <View style={styles.container}>
            <Button title="Settings" onPress={handleSettingsPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        right: 10,
        top: 10,
    },
});

export default HeaderRight