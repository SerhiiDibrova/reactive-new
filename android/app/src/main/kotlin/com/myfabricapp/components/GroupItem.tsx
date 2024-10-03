package com.myfabricapp.components

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface GroupItemProps {
    logo: string;
    name: string;
    memberCount: number;
    onFollow: () => void;
}

const GroupItem: React.FC<GroupItemProps> = ({ logo, name, memberCount, onFollow }) => {
    const formattedMemberCount = memberCount > 999 ? `${(memberCount / 1000).toFixed(1)}k` : memberCount.toString();

    return (
        <View style={styles.container}>
            <Image source={{ uri: logo }} style={styles.logo} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.memberCount}>{formattedMemberCount} members</Text>
            </View>
            <TouchableOpacity style={styles.followButton} onPress={onFollow}>
                <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
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
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        fontWeight: 'bold',
    },
    memberCount: {
        color: 'gray',
    },
    followButton: {
        backgroundColor: '#007BFF',
        borderRadius: 5,
        padding: 10,
    },
    followButtonText: {
        color: 'white',
    },
});

export default GroupItem;