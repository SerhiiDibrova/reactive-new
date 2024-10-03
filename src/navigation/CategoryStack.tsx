package src.navigation;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import CategoryTabNav from './CategoryTabNav';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Stack = createStackNavigator();
const { width, height } = Dimensions.get('window');

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
    }

    render() {
        if (this.state.hasError) {
            return (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Error occurred!</Text>
                </View>
            );
        }

        return this.props.children; 
    }
}

const CategoryStack = (props) => {
    return (
        <ErrorBoundary>
            <Stack.Navigator>
                <Stack.Screen
                    name={props.route.name}
                    component={CategoryTabNav}
                    options={{
                        headerTitleAlign: 'left',
                        headerLeft: () => <HeaderLeft />,
                        headerRight: () => <HeaderRight />,
                        headerTitleStyle: styles.headerTitle,
                    }}
                />
            </Stack.Navigator>
        </ErrorBoundary>
    );
};

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 16,
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    responsiveContainer: {
        flex: 1,
        padding: width < 400 ? 10 : 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryStack;