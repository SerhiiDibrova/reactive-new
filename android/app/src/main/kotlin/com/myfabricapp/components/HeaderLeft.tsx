package com.myfabricapp.components

import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

interface HeaderLeftProps {
    navigation: {
        openDrawer: () => void
    }
}

const HeaderLeft: React.FC<HeaderLeftProps> = ({ navigation }) => {
    const onHandleOpenDrawer = () => {
        try {
            navigation.openDrawer()
        } catch (error) {
            console.error("Error opening drawer:", error)
        }
    }

    return (
        <TouchableOpacity onPress={onHandleOpenDrawer} style={styles.container}>
            <Icon name="menu" size={30} color="#000" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

export default HeaderLeft