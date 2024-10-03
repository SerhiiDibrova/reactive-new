package components.GroupItem

import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import FollowButton from '../FollowButton'
import { formatMemberCount } from '../../utils'

interface GroupItemProps {
    logo: string
    name: string
    memberCount: number
}

const GroupItem: React.FC<GroupItemProps> = ({ logo, name, memberCount }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={{ uri: logo }} style={styles.logo} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.groupName}>{name}</Text>
                <Text style={styles.memberCount}>{formatMemberCount(memberCount)} members</Text>
                <FollowButton />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    logoContainer: {
        marginRight: 10,
    },
    logo: {
        width: 50,
        height: 50,
    },
    detailsContainer: {
        flex: 1,
    },
    groupName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    memberCount: {
        fontSize: 14,
        color: 'gray',
    },
})

export default GroupItem