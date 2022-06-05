import styled from 'styled-components/native';
import BottomTabItem from './BottomTabItem';
import BottomSearchTab from './BottomSearchTab';

const TabContainer = styled.View<{ insetBottom: number }>`
  position: relative;
  flex-direction: row;
  height: ${props => props.insetBottom + 22}px;
  padding-bottom: ${props => props.insetBottom}px;
  background-color: #ffffff;
`;

const BottomTabComponents = {
  TabContainer,
  BottomTabItem,
  BottomSearchTab,
};

export default BottomTabComponents;
