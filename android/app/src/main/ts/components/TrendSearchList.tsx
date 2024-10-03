package components;

import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import gifService from '../services/gifService';
import Trend from './Trend';

const TrendSearchList = (props) => {
    const [trendSearchList, setTrendSearchList] = useState([]);

    useEffect(() => {
        const fetchTrendSearches = async () => {
            try {
                const response = await gifService.getTrendSearchs();
                setTrendSearchList(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTrendSearches();
    }, []);

    return (
        <View>
            {trendSearchList.length > 0 && (
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={trendSearchList}
                    renderItem={({ item }) => <Trend {...item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
};

export default TrendSearchList;