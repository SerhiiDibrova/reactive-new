package com.myfabricapp.navigation

import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HeaderRight from './HeaderRight'
import HomeScreen from '../screens/HomeScreen'
import { Dimensions } from 'react-native'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const AppNavigator = () => {
    const drawerRef = React.useRef(null)

    const onHandleOpenDrawer = () => {
        drawerRef.current?.openDrawer()
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator ref={drawerRef}>
                <Drawer.Screen name="Home">
                    {() => (
                        <Stack.Navigator>
                            <Stack.Screen
                                name="HomeScreen"
                                component={HomeScreen}
                                options={{
                                    headerRight: () => <HeaderRight onPress={onHandleOpenDrawer} />,
                                    headerStyle: {
                                        height: Dimensions.get('window').height * 0.1,
                                    },
                                    headerTitleStyle: {
                                        fontSize: Dimensions.get('window').width * 0.05,
                                    },
                                }}
                            />
                        </Stack.Navigator>
                    )}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator