import React, { useCallback } from 'react';
import BottomTabView from './BottomTabView';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import type { BottomTabViewProps } from './BottomTabView';

const BottomTab: React.FC<BottomTabBarProps> = ({ state, navigation, insets }) => {
  const { bottom } = insets;
  const each = useCallback<BottomTabViewProps['each']>(
    (route, index) => {
      const isFocused = state.index === index;
      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      switch (route.name) {
        case 'Home':
          return {
            onPress,
            icon: {
              source: isFocused
                ? require('assets/images/tab/home_icon_fill.png')
                : require('assets/images/tab/home_icon.png'),
              width: 22,
              height: 22,
            },
          };

        case 'Notification':
          return {
            onPress,
            icon: {
              source: isFocused
                ? require('assets/images/tab/notification_icon_fill.png')
                : require('assets/images/tab/notification_icon.png'),
              width: 20,
              height: 22,
            },
          };

        case 'Community':
          return {
            onPress,
            icon: {
              source: isFocused
                ? require('assets/images/tab/community_icon_fill.png')
                : require('assets/images/tab/community_icon.png'),
              width: 22,
              height: 21,
            },
          };

        case 'MyPage':
          return {
            onPress,
            icon: {
              source: isFocused
                ? require('assets/images/tab/my_page_icon_fill.png')
                : require('assets/images/tab/my_page_icon.png'),
              width: 20,
              height: 21,
            },
          };

        default:
          return {
            onPress,
            icon: {
              source: null,
              width: 0,
              height: 0,
            },
          };
      }
    },
    [navigation, state.index],
  );

  const viewProps: BottomTabViewProps = {
    insetBottom: bottom,
    routes: state.routes,
    each,
  };

  return <BottomTabView {...viewProps} />;
};

export default BottomTab;
