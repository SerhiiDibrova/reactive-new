package com.myfabricapp.navigation;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryTabNav from './CategoryTabNav';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Stack = createStackNavigator();

const CategoryStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={props.route.name} 
                component={CategoryTabNav} 
                options={{
                    headerLeft: () => <HeaderLeft />,
                    headerRight: () => <HeaderRight />,
                    title: 'Category',
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 20, color: '#000' },
                }} 
            />
        </Stack.Navigator>
    );
};

export default CategoryStack;