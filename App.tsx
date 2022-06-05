import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from 'navigation/AppNavigation';
import getPermission from 'utils/getPermission';
import { ThemeProvider } from 'styled-components/native';
import theme from 'styles/theme';

const App = () => {
  useEffect(() => {
    getPermission();
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
