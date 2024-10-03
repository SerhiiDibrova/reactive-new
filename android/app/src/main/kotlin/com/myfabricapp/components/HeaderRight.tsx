package com.myfabricapp.components

import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const HeaderRight = (props: any): JSX.Element => {
    const onHandleOpenDrawer = () => {
        try {
            props.navigation.openDrawer();
        } catch (error) {
            console.error("Error opening drawer: ", error);
        }
    };

    return (
        <View style={styles.HeaderView}>
            <TouchableOpacity onPress={onHandleOpenDrawer}>
                <Icon name="search" type="evilicon" size={32} color={styles.IconColor.color} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onHandleOpenDrawer}>
                <Icon name="notifications" type="material" size={28} color={styles.IconColor.color} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onHandleOpenDrawer}>
                <View>
                    <Image source={require('./path/to/avatar.jpeg')} style={styles.UserLogo} />
                    <View style={styles.UserActive} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    HeaderView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    UserLogo: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginHorizontal: 20,
    },
    UserActive: {
        position: 'absolute',
        bottom: -2,
        right: 14,
        width: 15,
        height: 15,
        backgroundColor: '#40FE34',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
    },
    IconColor: {
        color: '#999999',
    },
});

export default HeaderRight;