package com.myfabricapp.navigation

import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import CategoryScreen from '../screens/CategoryScreen'
import FreshScreen from '../screens/FreshScreen'

const Tab = createMaterialTopTabNavigator()

const CategoryTabNav = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Hot" component={CategoryScreen} />
            <Tab.Screen name="Fresh" component={FreshScreen} />
        </Tab.Navigator>
    )
}

export default CategoryTabNav