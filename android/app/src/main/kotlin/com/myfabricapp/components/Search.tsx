package com.myfabricapp.components

import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

const Search = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (text: string) => {
        setQuery(text);
        console.log(text);
    };

    return (
        <View>
            <Input
                placeholder='Comment'
                leftIcon={<FontAwesome name='comment' size={24} color='black' />}
                onChangeText={handleInputChange}
            />
        </View>
    );
};

export default Search;