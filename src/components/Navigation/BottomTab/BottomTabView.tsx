import React from 'react';
import BottomTabComponents from './components';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import type { NavigationRoute } from 'types/react-navigation';
import type { VoidFunction } from 'types/common';

export interface BottomTabViewProps {
  insetBottom: number;
  routes: BottomTabBarProps['state']['routes'];
  each: (
    route: NavigationRoute,
    index: number,
  ) => {
    onPress: VoidFunction;
    icon: {
      source: ReturnType<NodeRequire>;
      width: number;
      height: number;
    };
  };
}

const BottomTabView: React.FC<BottomTabViewProps> = ({ insetBottom, routes, each }) => {
  return (
    <BottomTabComponents.TabContainer insetBottom={insetBottom}>
      {routes.map((route, index) => {
        if (route.name === 'Search')
          return <BottomTabComponents.BottomSearchTab key={route.key} insetBottom={insetBottom} />;

        const { icon, onPress } = each(route, index);

        return (
          <BottomTabComponents.BottomTabItem
            key={route.key}
            index={index}
            insetBottom={insetBottom}
            onPress={onPress}
            icon={icon}
          />
        );
      })}
    </BottomTabComponents.TabContainer>
  );
};

export default BottomTabView;
