package com.myfabricapp.screens

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { fetchFollowingData } from '../api';

const FollowingScreen = () => {
    const [following, setFollowing] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadFollowingData = async () => {
            try {
                const data = await fetchFollowingData();
                if (Array.isArray(data)) {
                    setFollowing(data);
                } else {
                    setError('Unexpected data format');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadFollowingData();
    }, []);

    const renderFollowingItem = ({ item }) => (
        <View>
            <Text>{item.name || 'Unnamed'}</Text>
        </View>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    return (
        <FlatList
            data={following}
            renderItem={renderFollowingItem}
            keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
        />
    );
};

export default FollowingScreen;