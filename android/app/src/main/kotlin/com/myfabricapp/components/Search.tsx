package com.myfabricapp.components

import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

const Search: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const onHandleUserInput = (value: string) => {
        setInputValue(value);
        console.log(value);
    };

    const onDisplaySearch = () => {
        // Placeholder function
    };

    return (
        <View>
            <Input
                placeholder='Comment'
                leftIcon={<FontAwesome name='comment' size={24} color='black' />}
                value={inputValue}
                onChangeText={onHandleUserInput}
                onSubmitEditing={onDisplaySearch}
            />
        </View>
    );
};

export default Search;