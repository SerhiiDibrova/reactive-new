package components.GroupItem

import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import FollowButton from './FollowButton'

interface GroupItemProps {
    group: {
        logo: string
        name: string
        numOfMember: number
    }
}

const formatMemberCount = (count: number): string => {
    return count > 999 ? count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : count.toString()
}

const GroupItem: React.FC<GroupItemProps> = ({ group }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: group.logo }} style={styles.logo} />
            <View style={styles.infoContainer}>
                <Text style={styles.groupName}>{group.name}</Text>
                <Text style={styles.memberCount}>{formatMemberCount(group.numOfMember)} members</Text>
            </View>
            <FollowButton onFollow={() => {}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    groupName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    memberCount: {
        fontSize: 14,
        color: '#666',
    },
})

export default GroupItem