import React, { useState } from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Login from 'screens/Auth/Login/Login';
import BottomTabNavigation from './BottomTabNavigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AppNavigationStackParamList = {
  BottomTab: undefined;
  Login: {
    setIsLogedIn: (bool: boolean) => void;
  };
};

export type AppNavigationStackProps = NativeStackNavigationProp<AppNavigationStackParamList>;

//  App Screen Props 확인좀 병주
export type AppScreenProps<T extends keyof AppNavigationStackParamList> = NativeStackScreenProps<
  AppNavigationStackParamList,
  T
>;

const Stack = createNativeStackNavigator<AppNavigationStackParamList>();

const AppNavigation: React.FC = () => {
  const [isLogedIn, setIsLogedIn] = useState<boolean>(false);

  return (
    <Stack.Navigator>
      {!isLogedIn ? (
        <Stack.Group>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
            initialParams={{ setIsLogedIn }}
          />
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
