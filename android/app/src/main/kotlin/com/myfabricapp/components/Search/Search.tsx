package com.myfabricapp.components.Search

import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

const Search = () => {
    const [inputValue, setInputValue] = useState('');

    const onHandleUserInput = (text) => {
        console.log(text);
        setInputValue(text);
    };

    const onDisplaySearch = () => {
        // Future search functionality
    };

    return (
        <View>
            <Input
                placeholder='Comment'
                leftIcon={<FontAwesome name='comment' size={24} color='black' />}
                onChangeText={onHandleUserInput}
                value={inputValue}
            />
        </View>
    );
};

export default Search;