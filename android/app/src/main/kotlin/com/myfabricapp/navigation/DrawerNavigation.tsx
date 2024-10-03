package com.myfabricapp.navigation

import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigation: React.FC = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation