package src.components.Category;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrendSearchList: React.FC<any> = (props) => {
    if (props.routeParams) {
        return (
            <View style={styles.container}>
                <Text>Please navigate back to view trending searches.</Text>
            </View>
        );
    }

    const trendingSearches = props.trendingSearches || [];
    
    if (!Array.isArray(trendingSearches)) {
        return (
            <View style={styles.container}>
                <Text>Error: Unable to load trending searches data.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>Trending Searches</Text>
            {trendingSearches.length === 0 ? (
                <Text>No trending searches available.</Text>
            ) : (
                trendingSearches.map((search, index) => (
                    <Text key={index}>{search}</Text>
                ))
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});

export default TrendSearchList;