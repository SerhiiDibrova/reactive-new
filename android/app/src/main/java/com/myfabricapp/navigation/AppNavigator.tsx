package com.myfabricapp.navigation;

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HeaderRight from '../components/HeaderRight';
import MainScreen from '../screens/MainScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen 
                    name="Main" 
                    component={MainScreen} 
                    options={({ navigation }) => ({
                        headerRight: () => <HeaderRight onHandleOpenDrawer={() => navigation.openDrawer()} />,
                    })} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;