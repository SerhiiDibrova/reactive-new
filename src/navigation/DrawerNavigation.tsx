package src.navigation;

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import TrendingScreen from '../screens/TrendingScreen';
import { View, Text } from 'react-native';

const Drawer = createDrawerNavigator();

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
                <View>
                    <Text>Something went wrong!</Text>
                </View>
            );
        }

        return this.props.children; 
    }
}

const DrawerNavigation: React.FC = () => {
    return (
        <ErrorBoundary>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Trending" component={TrendingScreen} />
            </Drawer.Navigator>
        </ErrorBoundary>
    );
};

export default DrawerNavigation;