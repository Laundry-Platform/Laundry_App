import React from 'react';
import { Text, View } from 'react-native';

export interface NotificationViewProps {}

const NotificationView: React.FC<NotificationViewProps> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notification</Text>
    </View>
  );
};

export default NotificationView;
