package com.myfabricapp.components;

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const { width } = Dimensions.get('window');

const HeaderRight = (props) => {
    const onHandleOpenDrawer = () => {
        props.navigation.openDrawer();
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onHandleOpenDrawer} style={styles.iconContainer}>
                <Icon name="search" size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onHandleOpenDrawer} style={styles.iconContainer}>
                <Icon name="notifications" size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onHandleOpenDrawer} style={styles.iconContainer}>
                <Icon name="account-circle" size={24} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        width: width,
    },
    iconContainer: {
        padding: 10,
    },
});

export default HeaderRight;