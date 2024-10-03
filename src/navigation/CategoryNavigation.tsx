package src.navigation;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import CategoryScreen from '../screens/CategoryScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';

enableScreens();

const Stack = createStackNavigator();

const CategoryNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Category" component={CategoryScreen} />
                <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default CategoryNavigation;