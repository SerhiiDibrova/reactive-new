package com.myfabricapp.navigation

import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Trending from '../screens/Trending'
import Fresh from '../screens/Fresh'
import Following from '../screens/Following'

const Tab = createMaterialTopTabNavigator()

const HomeTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Trending" tabBarOptions={{ labelStyle: { fontSize: 12 } }}>
            <Tab.Screen name="Trending" component={Trending} />
            <Tab.Screen name="Fresh" component={Fresh} />
            <Tab.Screen name="Following" component={Following} />
        </Tab.Navigator>
    )
}

export default HomeTabs