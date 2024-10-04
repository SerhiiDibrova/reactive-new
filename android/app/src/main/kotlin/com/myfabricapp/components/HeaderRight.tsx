package com.myfabricapp.components

import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { ProfileIcon } from './ProfileIcon'

const HeaderRight = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity>
                <Icon name='search' type='font-awesome' color='#000' />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 20 }}>
                <Icon name='bell' type='font-awesome' color='#000' />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 20 }}>
                <ProfileIcon />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderRight