package src.screens.TrendDetail;

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const TrendDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { trend_name } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.trendName}>{trend_name}</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    trendName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default TrendDetail;