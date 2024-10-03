package com.myfabricapp

import React from 'react'
import { View, Text } from 'react-native'

const Post: React.FC = () => {
    try {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 32 }}>
                    Welcome to Post Section
                </Text>
            </View>
        )
    } catch (error) {
        console.error('Error rendering Post component:', error)
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 32 }}>
                    Oops! Something went wrong. Please try again later.
                </Text>
            </View>
        )
    }
}

export default Post