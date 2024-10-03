package src.components;

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

interface FreshProps {
  route: {
    name: string;
  };
}

const Fresh: React.FC<FreshProps> = (props) => {
  const welcomeMessage = `Welcome to ${props.route.name} Section`;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32 }}>{welcomeMessage}</Text>
    </View>
  );
};

export default Fresh;