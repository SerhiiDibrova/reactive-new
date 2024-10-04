package com.myfabricapp.navigation

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HeaderLeft = () => {
    const navigation = useNavigation()

    const handleBackPress = () => {
        navigation.goBack()
    }

    return (
        <TouchableOpacity onPress={handleBackPress}>
            <Text>Back</Text>
        </TouchableOpacity>
    )
}

export default HeaderLeft