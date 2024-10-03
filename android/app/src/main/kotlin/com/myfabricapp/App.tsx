package com.myfabricapp

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { enableFabric } from 'react-native-fabric'
import { View, Text } from 'react-native'

const Stack = createStackNavigator()

const App = () => {
    enableFabric()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

const DetailsScreen = () => {
    return (
        <View>
            <Text>Details Screen</Text>
        </View>
    )
}

export default App