package com.myfabricapp.navigation

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTabs from './HomeTabs'
import Category from './Category'
import { NavigationContainer } from '@react-navigation/native'
import { Header } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={HomeTabs} 
                    options={{
                        header: () => (
                            <View style={styles.headerContainer}>
                                <Header
                                    centerComponent={{ text: 'Home', style: styles.headerText }}
                                    leftComponent={{ icon: 'menu', color: '#fff' }}
                                    rightComponent={{ icon: 'home', color: '#fff' }}
                                    containerStyle={styles.header}
                                />
                            </View>
                        )
                    }} 
                />
                <Stack.Screen name="Trend Detail" component={Category} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    header: {
        backgroundColor: '#3D6DCC',
        width: '100%',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
    },
})

export default HomeStack