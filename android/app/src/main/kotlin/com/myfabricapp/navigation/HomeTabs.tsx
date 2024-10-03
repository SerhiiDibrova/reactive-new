package com.myfabricapp.navigation

import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import Trending from '../screens/Trending'
import Fresh from '../screens/Fresh'
import Following from '../screens/Following'

const Tab = createMaterialTopTabNavigator()

const HomeTabs = () => {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Trending"
                    tabBarOptions={{
                        labelStyle: { fontSize: 12 },
                        style: { backgroundColor: 'white' },
                    }}
                >
                    <Tab.Screen name="Trending" component={Trending} />
                    <Tab.Screen name="Fresh" component={Fresh} />
                    <Tab.Screen name="Following" component={Following} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default HomeTabs