package com.myfabricapp.components

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Home = () => {
    try {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hello from home</Text>
            </View>
        )
    } catch (error) {
        console.error(error)
        return null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
})

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

// Ensure Fabric is enabled in the project configuration by checking build.gradle for fabric: true.