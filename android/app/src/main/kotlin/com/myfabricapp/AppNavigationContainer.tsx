package com.myfabricapp

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { ErrorBoundary } from 'react-error-boundary'
import { Text } from 'react-native'

const Drawer = createDrawerNavigator()

const FallbackComponent: React.FC = () => {
    return <Text>Something went wrong!</Text>
}

const HomeScreen: React.FC = () => {
    return <Text>Home Screen</Text>
}

const SettingsScreen: React.FC = () => {
    return <Text>Settings Screen</Text>
}

const AppNavigationContainer: React.FC = () => {
    return (
        <ErrorBoundary FallbackComponent={FallbackComponent}>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="Settings" component={SettingsScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </ErrorBoundary>
    )
}

export default AppNavigationContainer