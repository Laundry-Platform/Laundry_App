import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AppNavigationStackParamList = {
  BottomTab: undefined;
};

export type AppNavigationStackProps = NativeStackNavigationProp<AppNavigationStackParamList>;

const Stack = createNativeStackNavigator<AppNavigationStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
