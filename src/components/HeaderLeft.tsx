package src.components

import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { NavigationProp } from '@react-navigation/native'

interface HeaderLeftProps {
  navigation: NavigationProp<any>
}

const HeaderLeft: React.FC<HeaderLeftProps> = ({ navigation }) => {
  const onHandleOpenDrawer = () => {
    navigation.openDrawer()
  }

  return (
    <TouchableOpacity onPress={onHandleOpenDrawer} style={styles.iconContainer}>
      <Icon
        name="menu"
        type="material"
        size={30}
        containerStyle={styles.iconContainer}
        iconStyle={styles.iconColor}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    paddingLeft: 10,
  },
  iconColor: {
    color: '#999999',
  },
})

export default HeaderLeft