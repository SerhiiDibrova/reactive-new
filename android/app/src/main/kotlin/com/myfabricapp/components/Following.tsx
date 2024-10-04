package com.myfabricapp.components

import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import GroupItem from './GroupItem'

const GROUPS = [
    { logo: 'logo1.png', name: 'Group 1', numOfMember: 10 },
    { logo: 'logo2.png', name: 'Group 2', numOfMember: 20 },
    { logo: 'logo3.png', name: 'Group 3', numOfMember: 15 },
]

const Following = () => {
    if (GROUPS.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Featured</Text>
                <Text>No groups available</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Featured</Text>
            <View>
                <FlatList
                    data={GROUPS}
                    renderItem={({ item }) => <GroupItem group={item} />}
                    keyExtractor={item => item.name}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
    },
})

export default Following