import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Location from 'expo-location';
import { ThemeProvider } from 'styled-components/native';
import AppNavigation from 'navigation/AppNavigation';
import getPermission from 'utils/getPermission';
import theme from 'styles/theme';

const App: React.FC = () => {
  useEffect(() => {
    const appLoad = async () => {
      await SplashScreen.preventAutoHideAsync();
      const { granted } = await Location.getForegroundPermissionsAsync();
      if (!granted) {
        await getPermission();
      }
      await SplashScreen.hideAsync();
    };
    appLoad();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
