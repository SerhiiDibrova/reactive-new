package com.myfabricapp.screens;

import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import gifService from '../services/gifService';
import TrendSearchList from '../components/TrendSearchList';
import Gif from '../components/Gif';
import LoadingIndicator from '../components/LoadingIndicator';

const Category = (props) => {
    const [gifList, setGifList] = useState<any[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const getCategoryGifs = async () => {
        const { route } = props;
        if (route.params) {
            setLoading(true);
            try {
                const response = await gifService.getGifList(route.params.category, offset);
                if (Array.isArray(response.data)) {
                    setGifList(prevGifs => [...prevGifs, ...response.data]);
                    setOffset(prevOffset => prevOffset + response.data.length);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        getCategoryGifs();
    }, []);

    const renderItem = ({ item }) => <Gif gif={item} />;

    return (
        <View style={styles.container}>
            {loading || gifList.length === 0 ? (
                <TrendSearchList />
            ) : (
                <FlatList
                    data={gifList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
                    onEndReached={() => !loading && getCategoryGifs()}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={loading ? <LoadingIndicator /> : null}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Category;