package com.myfabricapp.navigation

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTabs from './HomeTabs'
import Category from './Category'
import { HeaderTitle } from '@react-navigation/elements'
import { Button } from 'react-native'

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={HomeTabs} 
                options={{
                    headerTitle: () => (
                        <HeaderTitle style={{ textAlign: 'center', flex: 1 }}>
                            Home
                        </HeaderTitle>
                    ),
                    headerLeft: () => (
                        <Button title="Menu" onPress={() => {}} />
                    ),
                    headerRight: () => (
                        <Button title="Settings" onPress={() => {}} />
                    ),
                }} 
            />
            <Stack.Screen 
                name="Trend Detail" 
                component={Category} 
            />
        </Stack.Navigator>
    )
}

export default HomeStack