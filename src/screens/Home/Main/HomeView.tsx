import React from 'react';
import { Text, View } from 'react-native';

export interface HomeViewProps {}

const HomeView: React.FC<HomeViewProps> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
};

export default HomeView;
