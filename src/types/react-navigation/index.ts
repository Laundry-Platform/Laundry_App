import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export type NavigationRoute = BottomTabBarProps['state']['routes'] extends Array<infer R>
  ? R
  : never;
