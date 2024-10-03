package com.myfabricapp.components

import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'

const HeaderRight = (props) => {
    const onHandleOpenDrawer = () => {
        props.navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onHandleOpenDrawer}>
                <Image source={require('./path/to/search-icon.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onHandleOpenDrawer}>
                <Image source={require('./path/to/notification-icon.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onHandleOpenDrawer}>
                <Image source={require('./path/to/user-avatar.png')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    icon: {
        width: 24,
        height: 24,
    },
})

export default HeaderRight