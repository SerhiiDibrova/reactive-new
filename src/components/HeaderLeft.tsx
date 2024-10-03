package src.components;

import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationProp } from '@react-navigation/native';

interface HeaderLeftProps {
    navigation: NavigationProp<any>;
}

const HeaderLeft: React.FC<HeaderLeftProps> = (props) => {
    const onHandleOpenDrawer = () => {
        props.navigation.openDrawer();
    };

    return (
        <TouchableOpacity onPress={onHandleOpenDrawer} style={styles.container}>
            <Icon
                name='view-headline'
                type='material-community'
                size={32}
                containerStyle={styles.iconContainer}
                iconStyle={styles.iconStyle}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        color: '#000',
    },
});

export default HeaderLeft;