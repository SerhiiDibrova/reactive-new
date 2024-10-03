package com.myfabricapp.components

import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

interface HeaderLeftProps {
    navigation: {
        openDrawer: () => void;
    };
}

const HeaderLeft: React.FC<HeaderLeftProps> = (props) => {
    const onHandleOpenDrawer = () => {
        try {
            props.navigation.openDrawer();
        } catch (error) {
            console.error("Error opening drawer: ", error);
        }
    };

    return (
        <TouchableOpacity onPress={onHandleOpenDrawer} style={styles.iconContainer}>
            <Icon name="menu" color="#000" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        padding: 10,
    },
});

export default HeaderLeft;