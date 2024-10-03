package src.components.GroupItem;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        margin: 5,
        alignItems: 'center',
    },
    itemLogo: {
        paddingRight: 10,
    },
    logoImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    itemDetailView: {
        justifyContent: 'center',
        flex: 1,
    },
    itemText: {
        fontWeight: 'bold',
    },
});

export default styles;