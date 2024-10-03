package src.components.Trend;

import { StyleSheet } from 'react-native';

const colors = {
    background: '#f0f0f0',
    text: '#333',
};

const spacing = {
    margin: 10,
    padding: 15,
};

const font = {
    weight: 'bold',
    size: 16,
};

const TrendStyles = StyleSheet.create({
    trendContainer: {
        backgroundColor: colors.background,
        margin: spacing.margin,
        padding: spacing.padding,
        borderRadius: 5,
    },
    trendText: {
        color: colors.text,
        fontWeight: font.weight,
        fontSize: font.size,
    },
});

export default TrendStyles;