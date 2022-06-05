import React from 'react';
import Login from 'screens/Auth/Login';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AuthNavigationStackParamList = {
  Login: undefined;
};

export type AuthNavigationStackProps = NativeStackNavigationProp<AuthNavigationStackParamList>;

const Stack = createNativeStackNavigator<AuthNavigationStackParamList>();

const AuthNavigation: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default AuthNavigation;
