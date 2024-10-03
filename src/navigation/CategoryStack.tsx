package src.navigation;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryTabNav from './CategoryTabNav';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import { View, Text, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

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
            return <View style={styles.errorContainer}><Text>Something went wrong.</Text></View>;
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
                        headerTitle: () => (
                            <View style={styles.headerTitle}>
                                <Text style={styles.titleText}>{props.route.name}</Text>
                            </View>
                        ),
                        headerLeft: () => <HeaderLeft />,
                        headerRight: () => <HeaderRight />,
                    }} 
                />
            </Stack.Navigator>
        </ErrorBoundary>
    );
};

const styles = StyleSheet.create({
    headerTitle: {
        flex: 1,
        alignItems: 'flex-start',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryStack;