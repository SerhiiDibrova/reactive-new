package src.screens;

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';

const CategoryScreen = () => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiKey = process.env.GIPHY_API_KEY;

    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10&rating=g`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setGifs(data.data);
        } catch (err) {
            setError('Failed to fetch GIFs. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGifs();
    }, []);

    const renderGif = ({ item }) => (
        <View style={styles.gifContainer}>
            <Text style={styles.gifTitle}>{item.title || 'Untitled'}</Text>
            <Image source={{ uri: item.images.fixed_height.url }} style={styles.gifImage} />
        </View>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text style={styles.errorText}>{error}</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.categoryTitle}>Hot GIFs</Text>
            <FlatList
                data={gifs}
                renderItem={renderGif}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    categoryTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    listContainer: {
        flexGrow: 1,
    },
    gifContainer: {
        marginBottom: 10,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    gifTitle: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'center',
    },
    gifImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default CategoryScreen;