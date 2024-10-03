package src.components;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../screens/CategoryScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';

const Stack = createStackNavigator();

const CategoryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
        </Stack.Navigator>
    );
};

export default CategoryStack;