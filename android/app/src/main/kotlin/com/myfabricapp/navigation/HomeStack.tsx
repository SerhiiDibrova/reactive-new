package com.myfabricapp.navigation

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTabs from '../components/HomeTabs'
import Category from '../components/Category'
import YourLeftComponent from '../components/YourLeftComponent'
import YourRightComponent from '../components/YourRightComponent'

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={HomeTabs} 
                options={{
                    headerTitleAlign: 'center',
                    headerLeft: () => <YourLeftComponent />,
                    headerRight: () => <YourRightComponent />,
                    headerTitleStyle: { fontWeight: 'bold' }
                }} 
            />
            <Stack.Screen 
                name="TrendDetail" 
                component={Category} 
            />
        </Stack.Navigator>
    )
}

export default HomeStack