package com.yourapp;

import React, { useEffect } from 'react';
import { View } from 'react-native';
import UgoiraView from 'react-native-ugoira-view';

const YourComponent = () => {
    useEffect(() => {
        UgoiraView.setImageScaleType('fitCenter'); // Use a valid resize mode
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <UgoiraView style={{ flex: 1 }} />
        </View>
    );
};

export default YourComponent;