package com.myfabricapp.components

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

const Fresh: React.FC<{ route: { name: string } }> = (props) => {
    const welcomeMessage: string = `Welcome to ${props.route.name || 'Home'} Section`;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32 }}>{welcomeMessage}</Text>
        </View>
    );
};

export default Fresh;