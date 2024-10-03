package com.myfabricapp.navigation

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import CategoryScreen from '../screens/CategoryScreen'
import FreshScreen from '../screens/FreshScreen'
import HeaderLeft from '../components/HeaderLeft'
import HeaderRight from '../components/HeaderRight'
import { Text, View } from 'react-native'

const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator()

const CategoryTabNav = (props) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: { backgroundColor: 'white' },
                labelStyle: { fontSize: 16, fontWeight: '600' },
                indicatorStyle: { backgroundColor: 'blue' },
                scrollEnabled: true,
            }}
        >
            <Tab.Screen name="Hot" children={() => <CategoryScreen {...props} />} />
            <Tab.Screen name="Fresh" component={FreshScreen} />
        </Tab.Navigator>
    )
}

const CategoryStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={props.route.name}
                component={CategoryTabNav}
                options={{
                    headerTitle: () => (
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                                {props.route.name}
                            </Text>
                        </View>
                    ),
                    headerLeft: () => <HeaderLeft />,
                    headerRight: () => <HeaderRight />,
                    headerStyle: { elevation: 0, backgroundColor: 'white' },
                }}
            />
        </Stack.Navigator>
    )
}

export default CategoryStack