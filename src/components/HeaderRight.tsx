package src.components;

import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

interface HeaderRightProps {
  onHandleOpenDrawer: () => void;
}

const HeaderRight: React.FC<HeaderRightProps> = ({ onHandleOpenDrawer }) => {
  const handleOpenDrawer = () => {
    try {
      onHandleOpenDrawer();
    } catch (error) {
      console.error('Error opening drawer:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpenDrawer}>
        <Icon name="search" type="evilicon" size={32} color="#999999" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOpenDrawer}>
        <Icon name="notifications" type="material" size={28} color="#999999" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOpenDrawer}>
        <View style={styles.userLogoContainer}>
          <Image
            source={{ uri: 'https://example.com/user_logo.png' }}
            style={styles.userLogo}
          />
          <View style={styles.activeIndicator} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userLogoContainer: {
    position: 'relative',
  },
  userLogo: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 15,
    height: 15,
    backgroundColor: '#40FE34',
    borderRadius: 7.5,
  },
});

export default HeaderRight;