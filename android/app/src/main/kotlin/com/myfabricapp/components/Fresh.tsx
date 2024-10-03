package com.myfabricapp.components

import React from 'react'
import { Text } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'

const Fresh = (props) => {
    const routeName = props.route?.name || 'Default'

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to {routeName} Section</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
    },
})

export default Fresh