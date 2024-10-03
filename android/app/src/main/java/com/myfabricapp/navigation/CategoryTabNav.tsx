package com.myfabricapp.navigation;

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CategoryScreen from '../screens/CategoryScreen';
import FreshScreen from '../screens/FreshScreen';

const Tab = createMaterialTopTabNavigator();

const CategoryTabNav = (props) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#e91e63',
                inactiveTintColor: '#000',
                style: { backgroundColor: '#fff' },
                labelStyle: { fontSize: 14 },
            }}
        >
            <Tab.Screen name="Hot" children={() => <CategoryScreen {...props} />} />
            <Tab.Screen name="Fresh" component={FreshScreen} />
        </Tab.Navigator>
    );
};

export default CategoryTabNav;