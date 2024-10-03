package src.navigation;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Trend from '../components/Trend';
import TrendDetail from '../components/TrendDetail';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Trend">
                <Stack.Screen 
                    name="Trend" 
                    component={Trend} 
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate('TrendDetail', { trend_name: 'Some Trend Name' })}
                                title="Details"
                            />
                        ),
                    })}
                />
                <Stack.Screen 
                    name="TrendDetail" 
                    component={TrendDetail} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;