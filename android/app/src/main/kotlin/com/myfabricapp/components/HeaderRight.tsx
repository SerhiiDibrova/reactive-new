package com.myfabricapp.components;

import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

interface HeaderRightProps {
    onHandleOpenDrawer: () => void;
}

const HeaderRight: React.FC<HeaderRightProps> = ({ onHandleOpenDrawer }) => {
    const handleOpenDrawer = () => {
        try {
            onHandleOpenDrawer();
        } catch (error) {
            console.error("Error opening drawer:", error);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOpenDrawer}>
                <Icon name='search' type='evilicon' size={32} color='#999999' />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpenDrawer}>
                <Icon name='notifications' type='material' size={28} color='#999999' />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpenDrawer}>
                <Image source={require('./avatar.jpeg')} style={styles.avatar} />
                <View style={styles.activeIndicator} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width: Dimensions.get('window').width,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    activeIndicator: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'green',
    },
});

export default HeaderRight;