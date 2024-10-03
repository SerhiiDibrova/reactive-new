package com.myfabricapp.components;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Trend: React.FC<{ trend_name: string }> = ({ trend_name }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('TrendDetail', { trend_name });
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.trendView}>
                <Text style={styles.trendTitle}>{trend_name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    trendView: {
        backgroundColor: '#E5E5E5',
        margin: 10,
        padding: 5,
    },
    trendTitle: {
        color: '#000',
        fontWeight: '500',
        fontSize: 16,
    },
});

export default Trend;