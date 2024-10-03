package com.myfabricapp.screens;

import React, { useState, useEffect } from 'react';
import { FlatList, View, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import TrendSearchList from './TrendSearchList';
import Gif from './Gif';

const Category = (props) => {
    const [gifList, setGifList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const apiKey = process.env.GIPHY_API_KEY;

    useEffect(() => {
        if (props.route.params) {
            getCategoryGifs();
        }
    }, [props.route.params]);

    const getCategoryGifs = async () => {
        const { category } = props.route.params || {};
        if (!category) {
            Alert.alert("Please select a category.");
            return;
        }
        if (!apiKey) {
            Alert.alert("API key is missing.");
            return;
        }
        if (loading) return;
        setLoading(true);
        try {
            const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
                params: {
                    api_key: apiKey,
                    q: category,
                    offset: offset,
                    limit: 20
                }
            });
            if (response.status !== 200 || response.data.data.length === 0) {
                Alert.alert("No GIFs found for this category.");
            } else {
                setGifList(prevGifs => [...prevGifs, ...response.data.data]);
                setOffset(prevOffset => prevOffset + 20);
            }
        } catch (error) {
            if (error.response) {
                Alert.alert("Error fetching GIFs. Please try again later.");
            } else if (error.request) {
                Alert.alert("Network error. Please check your connection.");
            } else {
                Alert.alert("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    const renderItem = ({ item }) => <Gif gif={item} />;

    return (
        <View style={{ flex: 1 }}>
            {props.route.params ? (
                gifList.length > 0 ? (
                    <FlatList
                        data={gifList}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        onEndReached={getCategoryGifs}
                        onEndReachedThreshold={0.2}
                        ListFooterComponent={loading ? <ActivityIndicator /> : null}
                    />
                ) : (
                    <View><Text>No GIFs available.</Text></View>
                )
            ) : (
                <TrendSearchList />
            )}
        </View>
    );
};

export default Category;