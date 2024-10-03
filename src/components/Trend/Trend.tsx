package src.components.Trend;

import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Trend = (props) => {
    const { trend_name } = props;
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Trend Detail', { trend_name });
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <Text style={styles.text}>{trend_name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        margin: 10,
        padding: 15,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Trend;