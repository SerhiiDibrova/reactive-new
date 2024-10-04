package com.myfabricapp.components

import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FollowButton = ({ onFollow }) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handlePress = () => {
        setIsFollowing(!isFollowing);
        onFollow(!isFollowing);
    };

    return (
        <TouchableOpacity
            style={isFollowing ? styles.followingButton : styles.followButton}
            onPress={handlePress}
            accessibilityLabel={isFollowing ? 'Unfollow' : 'Follow'}
            accessibilityRole="button"
        >
            <Text style={styles.buttonText}>{isFollowing ? 'Following' : 'Follow'}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    followButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    followingButton: {
        backgroundColor: '#6C757D',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
});

export default FollowButton;