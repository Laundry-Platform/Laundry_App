import React, { useState } from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Login from 'screens/Auth/Login/Login';
import PhoneNumberVerification from 'screens/Auth/PhoneNumberVerification/PhoneNumberVerification';
import SetPassword from 'screens/Auth/SetPassword/SetPassword';
import SetUserInformation from 'screens/Auth/SetUserInformation/SetUserInformation';
import { Image, Pressable, View } from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AppNavigationStackParamList = {
  BottomTab: undefined;
  Login: {
    setIsLogedIn: (bool: boolean) => void;
  };
  PhoneNumberVerification: {
    flow: 'CreateAccount' | 'ForgotPassword';
  };
  SetPassword: {
    flow: 'CreateAccount' | 'ForgotPassword';
  };
  SetUserInformation: undefined;
};

const HeaderLeft: React.FC = () => (
  <Pressable>
    <Image source={require('assets/images/chevron-left-black.png')} width={3} height={6} />
  </Pressable>
);

export type AppNavigationStackProps<RouteName extends keyof AppNavigationStackParamList> =
  NativeStackNavigationProp<AppNavigationStackParamList, RouteName>;

export type AppScreenProps<RouteName extends keyof AppNavigationStackParamList> =
  NativeStackScreenProps<AppNavigationStackParamList, RouteName>;

const Stack = createNativeStackNavigator<AppNavigationStackParamList>();

const AppNavigation: React.FC = () => {
  const [isLogedIn, setIsLogedIn] = useState<boolean>(false);

  return (
    <Stack.Navigator>
      {!isLogedIn ? (
        <Stack.Group
          screenOptions={{
            headerBackTitle: '',
            headerTintColor: '#000',
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
            initialParams={{ setIsLogedIn }}
          />
          <Stack.Screen
            name="PhoneNumberVerification"
            component={PhoneNumberVerification}
            options={({ route }) => ({
              headerTitle: route.params.flow === 'ForgotPassword' ? '비밀번호 찾기' : '회원가입',
            })}
          />
          <Stack.Screen
            name="SetPassword"
            component={SetPassword}
            options={({ route }) => ({
              headerTitle: route.params.flow === 'ForgotPassword' ? '비밀번호 찾기' : '회원가입',
            })}
          />
          <Stack.Screen name="SetUserInformation" component={SetUserInformation} />
        </Stack.Group>
      ) : (
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;
