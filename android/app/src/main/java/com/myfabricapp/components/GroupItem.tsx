package com.myfabricapp.components;

import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const GroupItem = ({ group }) => {
    return (
        <Card containerStyle={styles.card}>
            <View style={styles.container}>
                <Image source={{ uri: group.logo }} style={styles.logo} />
                <View style={styles.info}>
                    <Text style={styles.name}>{group.name}</Text>
                    <Text style={styles.memberCount}>{group.memberCount} members</Text>
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        margin: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    memberCount: {
        fontSize: 14,
        color: 'gray',
    },
});

export default GroupItem;