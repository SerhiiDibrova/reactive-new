package com.myfabricapp.components

import React from 'react'
import { Input } from 'react-native-elements'
import { View } from 'react-native'

const Search = () => {
    const onDisplaySearch = () => {}

    const onHandleUserInput = (value: any) => {
        console.log(value)
    }

    return (
        <View>
            <Input
                placeholder="Comment"
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                onChangeText={onHandleUserInput}
            />
        </View>
    )
}

export default Search