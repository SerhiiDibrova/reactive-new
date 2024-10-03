package com.myfabricapp.screens;

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import GroupItem from '../components/GroupItem';

const Following = ({ groups }) => {
    const renderItem = ({ item }) => <GroupItem group={item} />;

    if (!groups || groups.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>No groups available.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Featured</Text>
            <FlatList
                data={groups}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    list: {
        flexGrow: 1,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    },
});

export default Following;