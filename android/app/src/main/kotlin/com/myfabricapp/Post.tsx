package com.myfabricapp

import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

const Post: React.FC = (props) => {
    try {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 32 }}>Welcome to the Post Component</Text>
            </View>
        )
    } catch (error) {
        console.error(error)
        return null
    }
}

export default Post

// In android/app/build.gradle, ensure Fabric architecture is enabled
// android {
//     ...
//     buildFeatures {
//         fabric true
//     }
// }