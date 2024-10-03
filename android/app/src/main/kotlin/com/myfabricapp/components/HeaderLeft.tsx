package com.myfabricapp.components;

import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationProp } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

interface HeaderLeftProps {
    navigation: NavigationProp<any>;
}

const HeaderLeft: React.FC<HeaderLeftProps> = (props) => {
    const onHandleOpenDrawer = () => {
        try {
            props.navigation.openDrawer();
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error opening drawer";
            Toast.show({
                text1: errorMessage,
                type: 'error',
            });
        }
    };

    return (
        <TouchableOpacity onPress={onHandleOpenDrawer} style={styles.IconContainer}>
            <Icon
                name="view-headline"
                type="material-community"
                size={32}
                iconStyle={styles.IconColor}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    IconContainer: {
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    IconColor: {
        color: '#999999',
    },
});

export default HeaderLeft;