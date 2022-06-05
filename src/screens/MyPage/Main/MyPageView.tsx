import React from 'react';
import { Text, View } from 'react-native';

export interface MyPageViewProps {}

const MyPageView: React.FC<MyPageViewProps> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyPage</Text>
    </View>
  );
};

export default MyPageView;
