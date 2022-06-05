import styled from 'styled-components/native';
import { deviceWidth } from 'utils/dimensions';

const Layout = styled.ScrollView`
  flex: 1;
`;

const MapWrapper = styled.View`
  width: ${deviceWidth}px;
  height: ${deviceWidth}px;
`;

const HomeMainComponents = {
  Layout,
  MapWrapper,
};

export default HomeMainComponents;
