package com.myfabricapp.components

import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import gifService from '../services/gifService';
import Trend from './Trend';

const TrendSearchList = () => {
    const [trendSearchList, setTrendSearchList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendSearches = async () => {
            try {
                const response = await gifService.getTrendSearchs();
                if (response && Array.isArray(response)) {
                    setTrendSearchList(response);
                } else {
                    setError('Invalid response from the server.');
                }
            } catch (error) {
                setError(error.message || 'Failed to fetch trend searches. Please try again later.');
            }
        };
        fetchTrendSearches();
    }, []);

    const renderItem = ({ item }) => <Trend name={item.name} />;
    
    return (
        <View>
            {error && <Text>{error}</Text>}
            {trendSearchList.length > 0 && (
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={trendSearchList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id ? item.id.toString() : item.name}
                />
            )}
        </View>
    );
};

export default TrendSearchList;