package src.components;

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CategoryScreen from './CategoryScreen';
import FreshScreen from './FreshScreen';
import { View, StyleSheet } from 'react-native';
import ErrorBoundary from './ErrorBoundary';

const Tab = createMaterialTopTabNavigator();

const CategoryTabNav = (props) => {
    return (
        <ErrorBoundary>
            <View style={styles.container}>
                <Tab.Navigator>
                    <Tab.Screen name="Hot">
                        {() => <CategoryScreen {...props} />}
                    </Tab.Screen>
                    <Tab.Screen name="Fresh" component={FreshScreen} />
                </Tab.Navigator>
            </View>
        </ErrorBoundary>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CategoryTabNav;