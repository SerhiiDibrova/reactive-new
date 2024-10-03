package src.components.Category;

import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import gifService from '../../services/gifService';
import TrendSearchList from '../TrendSearchList';
import Gif from '../Gif';

const Category: React.FC<{ route: { name: string; params?: { trend_name: string } } }> = (props) => {
    const [gifList, setGifList] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getCategoryGifs();
    }, []);

    const getCategoryGifs = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = props.route.params 
                ? await gifService.getGifList(props.route.params.trend_name) 
                : await gifService.getGifList(props.route.name);
            setGifList(response.data.data);
        } catch (error) {
            setError('Failed to load GIFs. Please check your internet connection and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.postListView}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
            ) : error ? (
                <Text style={styles.errorText}>{error}</Text>
            ) : gifList.length > 0 ? (
                <FlatList 
                    data={gifList} 
                    renderItem={({ item }) => <Gif gif={item} />} 
                    keyExtractor={(item) => item.id} 
                    onEndReached={getCategoryGifs} 
                    onEndReachedThreshold={0.2} 
                />
            ) : (
                <Text style={styles.emptyText}>No GIFs available for this category.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    postListView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loadingIndicator: {
        marginTop: 20,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#888',
    },
});

export default Category;