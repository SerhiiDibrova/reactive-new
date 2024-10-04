package com.myfabricapp.navigation

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HeaderRight from '../components/HeaderRight'
import HeaderLeft from '../components/HeaderLeft'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { TransitionPresets } from '@react-navigation/stack'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {
                        backgroundColor: '#fff',
                        width: 240,
                    },
                }}
            >
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen 
                    name="Settings" 
                    component={SettingsScreen} 
                    options={{
                        headerLeft: () => <HeaderLeft />,
                        headerRight: () => <HeaderRight />,
                        headerTitle: 'Settings'
                    }} 
                />
                <Drawer.Screen 
                    name="Profile" 
                    component={ProfileScreen} 
                    options={{
                        headerLeft: () => <HeaderLeft />,
                        headerRight: () => <HeaderRight />,
                        headerTitle: 'Profile'
                    }} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#f4511e' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    headerLeft: () => <HeaderLeft />,
                    headerRight: () => <HeaderRight />,
                    headerTitle: 'Home'
                }} 
            />
            <Stack.Screen 
                name="Details" 
                component={DetailsScreen} 
                options={{
                    headerLeft: () => <HeaderLeft />,
                    headerRight: () => <HeaderRight />,
                    headerTitle: 'Details'
                }} 
            />
        </Stack.Navigator>
    )
}

export default AppNavigator