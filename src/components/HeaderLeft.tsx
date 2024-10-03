package components;

import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

interface HeaderLeftProps {
    navigation: {
        openDrawer: () => void;
    };
}

const HeaderLeft: React.FC<HeaderLeftProps> = (props) => {
    const onHandleOpenDrawer = () => {
        props.navigation.openDrawer();
    };

    return (
        <TouchableOpacity onPress={onHandleOpenDrawer} style={styles.IconContainer}>
            <Icon
                name="view-headline"
                type="material-community"
                size={32}
                containerStyle={styles.IconContainer}
                iconStyle={styles.IconColor}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    IconContainer: {
        paddingLeft: 10,
    },
    IconColor: {
        color: '#999999',
    },
});

export default HeaderLeft;