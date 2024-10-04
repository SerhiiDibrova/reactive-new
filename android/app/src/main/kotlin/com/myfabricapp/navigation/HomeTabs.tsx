package com.myfabricapp.navigation

import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TrendingScreen from '../screens/TrendingScreen'
import FreshScreen from '../screens/FreshScreen'
import FollowingScreen from '../screens/FollowingScreen'

const Tab = createMaterialTopTabNavigator()

const HomeTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Trending">
            <Tab.Screen name="Trending" component={TrendingScreen} />
            <Tab.Screen name="Fresh" component={FreshScreen} />
            <Tab.Screen name="Following" component={FollowingScreen} />
        </Tab.Navigator>
    )
}

export default HomeTabs