package com.myfabricapp.components;

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GroupItem = ({ group }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: group.logo }} style={styles.logo} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{group.name}</Text>
                <Text style={styles.memberCount}>{group.memberCount} members</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    infoContainer: {
        flexDirection: 'column',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    memberCount: {
        fontSize: 14,
        color: 'gray',
    },
});

export default GroupItem;