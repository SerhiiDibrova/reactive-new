package com.myfabricapp.navigation

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import HeaderRight from '../components/HeaderRight'

const Drawer = createDrawerNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={({ navigation }) => ({
                        headerRight: () => <HeaderRight onOpenDrawer={() => navigation.openDrawer()} />
                    })} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator