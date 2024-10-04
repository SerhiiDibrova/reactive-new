package com.myfabricapp.navigation

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTabs from './HomeTabs'
import Category from './Category'
import { Header } from 'react-native-elements'

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={HomeTabs} 
                options={{
                    header: () => (
                        <Header
                            leftComponent={{ text: 'Home', style: { color: '#fff', fontSize: 20, textAlign: 'left' } }}
                            rightComponent={{ icon: 'home', color: '#fff' }}
                            containerStyle={{ backgroundColor: '#3D6DCC' }}
                        />
                    )
                }} 
            />
            <Stack.Screen 
                name="Trend Detail" 
                component={Category} 
                options={{
                    header: () => (
                        <Header
                            leftComponent={{ text: 'Trend Detail', style: { color: '#fff', fontSize: 20, textAlign: 'left' } }}
                            rightComponent={{ icon: 'info', color: '#fff' }}
                            containerStyle={{ backgroundColor: '#3D6DCC' }}
                        />
                    )
                }} 
            />
        </Stack.Navigator>
    )
}

export default HomeStack