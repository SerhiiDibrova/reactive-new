package src.components;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, ListItem } from 'react-native-elements';

const FreshScreen = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/fresh');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            {error ? (
                <Text style={styles.errorText}>{error}</Text>
            ) : (
                data && (
                    <Card>
                        <Card.Title>Fresh Data</Card.Title>
                        <Card.Divider />
                        {data.map((item, index) => (
                            <ListItem key={index} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title>{item.title}</ListItem.Title>
                                    <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))}
                    </Card>
                )
            )}
            <Button title="Refresh" onPress={fetchData} />
        </View>
    );
};

const CategoryScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.categoryText}>{props.categoryName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    errorText: {
        color: 'red',
    },
    categoryText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export { FreshScreen, CategoryScreen };