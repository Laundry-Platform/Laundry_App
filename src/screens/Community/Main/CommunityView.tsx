import React from 'react';
import { Text, View } from 'react-native';

export interface CommunityViewProps {}

const CommunityView: React.FC<CommunityViewProps> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Community</Text>
    </View>
  );
};

export default CommunityView;
