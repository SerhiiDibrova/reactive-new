package com.myfabricapp.screens;

import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const GROUPS = [
    { logo: 'url_to_logo1', name: 'Group 1', numOfMember: 10 },
    { logo: 'url_to_logo2', name: 'Group 2', numOfMember: 20 }
];

const GroupItem = ({ group }) => (
    <View style={styles.groupItem}>
        <Image source={{ uri: group.logo }} style={styles.logo} />
        <View style={styles.groupInfo}>
            <Text>{group.name}</Text>
            <Text>{group.numOfMember} members</Text>
        </View>
    </View>
);

const Following = () => {
    if (GROUPS.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorMessage}>No groups available. Please check back later.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Featured</Text>
            <FlatList
                data={GROUPS}
                renderItem={({ item }) => <GroupItem group={item} />}
                keyExtractor={item => item.name}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 16,
    },
    groupItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
    },
    logo: {
        width: '10%',
        height: '10%',
        marginRight: 10,
    },
    groupInfo: {
        flexDirection: 'column',
    },
    errorMessage: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 16,
        color: 'red',
    },
});

export default Following;

android {
    ...
    defaultConfig {
        ...
        enableHermes: true
        fabric {
            enable: true
        }
    }
}