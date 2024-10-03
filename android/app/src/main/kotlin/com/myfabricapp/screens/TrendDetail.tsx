package com.myfabricapp.screens

import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'

const TrendDetail = () => {
    const route = useRoute()
    const { trend_name } = route.params

    return (
        <View>
            <Text>{trend_name}</Text>
        </View>
    )
}

export default TrendDetail