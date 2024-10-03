package com.myfabricapp.components

import React from 'react'
import { Button } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'

const FollowButton = () => {
    return (
        <View>
            <Button
                title="Follow"
                type="outline"
                buttonStyle={styles.buttonStyle}
                titleStyle={styles.titleStyle}
                accessibilityLabel="Follow button"
                accessible={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        borderColor: 'lightgray',
        borderRadius: 10,
        transform: [{ scale: 0.8 }]
    },
    titleStyle: {
        color: '#104A8E',
        fontSize: 18,
        fontWeight: '700'
    }
})

export default FollowButton