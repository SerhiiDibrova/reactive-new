package src.components;

import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

interface HeaderRightProps {
  navigation: {
    openDrawer: () => void;
  };
}

const HeaderRight: React.FC<HeaderRightProps> = ({ navigation }) => {
  const onHandleOpenDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.HeaderView}>
      <TouchableOpacity onPress={onHandleOpenDrawer}>
        <Icon name="search" type="evilicon" size={32} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onHandleOpenDrawer}>
        <Icon name="notifications" type="material" size={28} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onHandleOpenDrawer}>
        <Image source={require('path/to/avatar.png')} style={styles.UserLogo} />
        <View style={styles.UserActive} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  IconColor: {
    color: '#000',
  },
  UserLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  UserActive: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
  },
});

export default HeaderRight;