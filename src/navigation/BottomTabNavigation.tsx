import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'screens/Home/Main/Home';
import Notification from 'screens/Notification/Main/Notification';
import Community from 'screens/Community/Main/Community';
import MyPage from 'screens/MyPage/Main/MyPage';
import BottomTab from 'components/Navigation/BottomTab/BottomTab';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

type BottomTabParamList = {
  Home: undefined;
  Notification: undefined;
  Search: undefined;
  Community: undefined;
  MyPage: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigation: React.FC = () => {
  const TabBar = useCallback((props: BottomTabBarProps) => <BottomTab {...props} />, []);
  return (
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
