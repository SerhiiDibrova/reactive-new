package com.myfabricapp.components

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Trend = (props) => {
    const navigation = useNavigation()
    
    const handlePress = () => {
        navigation.navigate('Trend Detail', { trend_name: props.trend_name })
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Text style={styles.text}>{props.trend_name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginVertical: 5,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
})

export default Trend