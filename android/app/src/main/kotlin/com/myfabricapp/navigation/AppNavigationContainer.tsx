package com.myfabricapp.navigation

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './DrawerNavigation'

const AppNavigationContainer: React.FC = () => {
    return (
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>
    )
}

export default AppNavigationContainer