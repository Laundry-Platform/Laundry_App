import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from 'navigation/AppNavigation';
import getPermission from 'utils/getPermission';

const App = () => {
  useEffect(() => {
    getPermission();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
