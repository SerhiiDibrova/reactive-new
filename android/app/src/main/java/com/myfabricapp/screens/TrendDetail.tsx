package com.myfabricapp.screens;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const TrendDetail: React.FC = () => {
    const route = useRoute();
    const { trend_name } = route.params as { trend_name: string };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{trend_name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default TrendDetail;