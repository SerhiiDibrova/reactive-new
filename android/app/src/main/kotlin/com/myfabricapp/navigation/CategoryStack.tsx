package com.myfabricapp.navigation

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CategoryTabNav from './CategoryTabNav'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import { Text, View } from 'react-native'

const Stack = createStackNavigator()

const CategoryStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Category" 
                component={CategoryTabNav} 
                options={{
                    headerTitle: () => (
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Categories</Text>
                    ),
                    headerLeft: () => <HeaderLeft />,
                    headerRight: () => <HeaderRight />
                }} 
            />
        </Stack.Navigator>
    )
}

export default CategoryStack