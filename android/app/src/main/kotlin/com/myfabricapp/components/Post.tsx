package com.myfabricapp.components

import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

const Post = (props) => {
    try {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 32 }}>Welcome to Post Section</Text>
            </View>
        )
    } catch (error) {
        return null
    }
}

export default Post