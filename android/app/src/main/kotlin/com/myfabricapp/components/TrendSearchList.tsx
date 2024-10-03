package com.myfabricapp.components

import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import gifService from '../services/gifService';
import Trend from './Trend';

const TrendSearchList = (props) => {
    const [trendSearchList, setTrendSearchList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendSearches = async () => {
            try {
                const data = await gifService.getTrendSearchs();
                setTrendSearchList(data);
            } catch (error) {
                setError('Failed to load trending searches. Please try again later.');
            }
        };
        fetchTrendSearches();
    }, []);

    const renderItem = ({ item }) => <Trend item={item} />;
    const keyExtractor = (item) => item.id.toString();

    return (
        <View style={styles.container}>
            {error ? (
                <Text style={styles.errorText}>{error}</Text>
            ) : (
                trendSearchList.length > 0 && (
                    <FlatList
                        data={trendSearchList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                    />
                )
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
    },
});

export default TrendSearchList;