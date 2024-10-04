package com.myfabricapp.components

import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const TrendSearchList = (props) => {
    const navigation = useNavigation()
    const [trends, setTrends] = useState([])

    useEffect(() => {
        const fetchTrends = async () => {
            try {
                // Simulate fetching data
                const response = await fetch('https://api.example.com/trends')
                const data = await response.json()
                setTrends(data.trends)
            } catch (error) {
                console.error('Error fetching trends:', error)
            }
        }
        fetchTrends()
    }, [])

    if (props.route.params) {
        return null
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen', { trend: item })}>
            <View style={styles.item}>
                <Text style={styles.text}>{item}</Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={trends}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                contentContainerStyle={styles.list}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    list: {
        paddingBottom: 16,
    },
    item: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f9c2ff',
        borderRadius: 8,
        width: Dimensions.get('window').width - 32,
    },
    text: {
        fontSize: 18,
    },
})

export default TrendSearchList