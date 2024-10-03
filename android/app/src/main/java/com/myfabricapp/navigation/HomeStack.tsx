package com.myfabricapp.navigation;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './HomeTabs';
import Category from './Category';
import YourLeftComponent from './YourLeftComponent';
import YourRightComponent from './YourRightComponent';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={HomeTabs} 
                options={{
                    title: 'Home',
                    headerTitleAlign: 'center',
                    headerLeft: () => <YourLeftComponent />,
                    headerRight: () => <YourRightComponent />,
                    headerTitleStyle: { fontWeight: 'bold' },
                }} 
            />
            <Stack.Screen 
                name="Trend Detail" 
                component={Category} 
            />
        </Stack.Navigator>
    );
};

export default HomeStack;