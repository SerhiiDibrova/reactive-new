package src.navigation;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import { Dimensions } from 'react-native';
import { ErrorBoundary } from 'react-error-boundary';

const AppNavigationContainer: React.FC = () => {
    const { width, height } = Dimensions.get('window');
    const isPortrait = height > width;

    try {
        return (
            <ErrorBoundary fallback={<div>Something went wrong!</div>}>
                <NavigationContainer>
                    <DrawerNavigation isPortrait={isPortrait} />
                </NavigationContainer>
            </ErrorBoundary>
        );
    } catch (error) {
        return <div>Error occurred during navigation: {error.message}</div>;
    }
};

export default AppNavigationContainer;