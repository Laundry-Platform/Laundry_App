import React from 'react';
import styled from 'styled-components/native';
import { deviceWidth } from 'utils/dimensions';
import type { PressEventHandler } from 'types/react-native/event';

const Container = styled.Pressable<{ index: number; insetBottom: number }>`
  position: absolute;
  align-items: center;
  justify-content: center;
  left: ${props =>
    props.index > 2
      ? ((deviceWidth - 92) / 4) * (props.index - 1) + 92
      : ((deviceWidth - 92) / 4) * props.index}px;
  bottom: ${props => props.insetBottom}px;
  width: ${(deviceWidth - 92) / 4}px;
  height: 52px;
  background-color: #ffffff;
`;

const Icon = styled.Image`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

interface BottomTabItemProps {
  index: number;
  insetBottom: number;
  onPress: PressEventHandler;
  icon: {
    source: ReturnType<NodeRequire>;
    width: number;
    height: number;
  };
}

const BottomTabItem: React.FC<BottomTabItemProps> = ({ index, insetBottom, onPress, icon }) => {
  return (
    <Container index={index} insetBottom={insetBottom} onPress={onPress}>
      <Icon {...icon} />
    </Container>
  );
};

export default BottomTabItem;
