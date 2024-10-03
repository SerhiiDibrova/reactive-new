package com.myfabricapp.components;

import React from 'react';
import { FlatList, View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

const TrendSearchList = (props) => {
    const [gifs, setGifs] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const API_KEY = 'YOUR_API_KEY';

    React.useEffect(() => {
        const fetchGifs = async () => {
            try {
                const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10`);
                const data = await response.json();
                setGifs(data.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchGifs();
    }, []);

    const renderGifItem = ({ item }) => (
        <View style={styles.gifContainer}>
            <Text style={styles.gifTitle}>{item.title}</Text>
            <Image source={{ uri: item.images.fixed_height.url }} style={styles.gifImage} />
        </View>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <FlatList
            data={gifs}
            renderItem={renderGifItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
    },
    gifContainer: {
        marginBottom: 10,
    },
    gifTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    gifImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
});

export default TrendSearchList;