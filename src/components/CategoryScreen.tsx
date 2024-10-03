package src.components;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const CategoryScreen = (props) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/categories');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            if (Array.isArray(result)) {
                setData(result);
            } else {
                setError('Invalid data format received.');
            }
        } catch (error) {
            setError('Failed to fetch categories. Please try again later.');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleRetry = () => {
        setError(null);
        fetchData();
    };

    return (
        <View style={styles.container}>
            {error ? (
                <>
                    <Text style={styles.error}>{error}</Text>
                    <Button title="Retry" onPress={handleRetry} />
                </>
            ) : (
                data.map((item) => (
                    <Text key={item.id} style={styles.item}>
                        {item.name}
                    </Text>
                ))
            )}
        </View>
    );
};

const FreshScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fresh Content</Text>
            <Button title="Refresh" onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        fontSize: 18,
        margin: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    error: {
        color: 'red',
        fontSize: 16,
    },
});

export default CategoryScreen;