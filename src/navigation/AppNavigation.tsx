import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import AuthNavigation from './AuthNavigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AppNavigationStackParamList = {
  BottomTab: undefined;
  Auth: undefined;
};

export type AppNavigationStackProps = NativeStackNavigationProp<AppNavigationStackParamList>;

const Stack = createNativeStackNavigator<AppNavigationStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthNavigation} options={{ headerShown: false }} />
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
