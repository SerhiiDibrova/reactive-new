package src.navigation;

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CategoryScreen from '../screens/CategoryScreen';
import FreshScreen from '../screens/FreshScreen';
import { View, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught in ErrorBoundary: ", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Something went wrong.</Text>
                </View>
            );
        }

        return this.props.children; 
    }
}

const CategoryTabNav = (props) => {
    return (
        <ErrorBoundary>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: 'white' },
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarItemStyle: { flex: 1 },
                    tabBarIndicatorStyle: { backgroundColor: 'blue' },
                    tabBarScrollEnabled: true,
                }}
            >
                <Tab.Screen name="Hot" children={() => <CategoryScreen {...props} />} />
                <Tab.Screen name="Fresh" component={FreshScreen} />
            </Tab.Navigator>
        </ErrorBoundary>
    );
};

export default CategoryTabNav;