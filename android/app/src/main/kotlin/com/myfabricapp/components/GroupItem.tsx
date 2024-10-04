package com.myfabricapp.components

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GroupItem = ({ logo, name, numOfMember }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: logo }} style={styles.logo} />
            <Text style={styles.groupName}>{name}</Text>
            <Text style={styles.memberCount}>{numOfMember} members</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    groupName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    memberCount: {
        fontSize: 14,
        color: '#666',
    },
});

export default GroupItem;