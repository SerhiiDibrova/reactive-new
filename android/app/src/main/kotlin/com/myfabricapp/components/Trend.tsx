package com.myfabricapp.components

import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

const Trend = (props) => {
    const { trend_name, navigation } = props

    const handlePress = () => {
        navigation.navigate('Trend Detail', { trend_name })
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View>
                <Text style={TrendStyles.trendText}>{trend_name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const TrendStyles = StyleSheet.create({
    trendText: {
        fontSize: 16,
        color: '#000',
        padding: 10,
    },
})

export default Trend