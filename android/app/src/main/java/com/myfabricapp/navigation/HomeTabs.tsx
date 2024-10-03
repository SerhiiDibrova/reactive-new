package com.myfabricapp.navigation;

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TrendingScreen from '../screens/TrendingScreen';
import FreshScreen from '../screens/FreshScreen';
import FollowingScreen from '../screens/FollowingScreen';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Trending" tabBarOptions={{ labelStyle: { fontSize: 12 }, style: { backgroundColor: 'white' } }}>
                <Tab.Screen name="Trending" component={TrendingScreen} />
                <Tab.Screen name="Fresh" component={FreshScreen} />
                <Tab.Screen name="Following" component={FollowingScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default HomeTabs;