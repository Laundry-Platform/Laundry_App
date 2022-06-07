import React from 'react';
import Login from 'screens/Auth/Login/Login';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AuthNavigationStackParamList = {
  Login: {
    id: string;
  };
};

export type AuthNavigationStackProps = NativeStackNavigationProp<AuthNavigationStackParamList>;

export type AuthStackScreenProps = NativeStackScreenProps<AuthNavigationStackParamList, 'Login'>;

const Stack = createNativeStackNavigator<AuthNavigationStackParamList>();

const AuthNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
