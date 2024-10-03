package com.example.ugoiraview;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { setHeight } from './UgoiraModule';

const UgoiraView = ({ height, originalHeight }) => {
    const aspectRatio = 16 / 9; // Example aspect ratio
    const width = height * aspectRatio;

    const validateHeight = (height) => {
        return height > 0 && height <= 1000; // Example height limits
    };

    const handleSetHeight = async () => {
        if (validateHeight(height)) {
            try {
                await setHeight(height, width, originalHeight);
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error('Invalid height value');
        }
    };

    React.useEffect(() => {
        handleSetHeight();
    }, [height]);

    return (
        <View style={[styles.container, { height, width }]}>
            {/* Render your Ugoira content here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // Add any additional styles here
    },
});

export default UgoiraView;