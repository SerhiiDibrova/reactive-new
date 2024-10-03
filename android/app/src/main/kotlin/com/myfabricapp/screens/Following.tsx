package com.myfabricapp.screens

import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import GroupItem from './GroupItem'

const GROUPS = [
    { logo: 'url_to_logo1', name: 'Group One', numOfMember: 10 },
    { logo: 'url_to_logo2', name: 'Group Two', numOfMember: 20 },
    { logo: 'url_to_logo3', name: 'Group Three', numOfMember: 15 },
]

const Following = () => {
    const renderItem = ({ item }) => <GroupItem group={item} />

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Featured</Text>
            {GROUPS.length > 0 ? (
                <FlatList
                    data={GROUPS}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                />
            ) : (
                <Text style={styles.noGroups}>No groups available</Text>
            )}
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
        marginBottom: 16,
    },
    noGroups: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
})

export default Following