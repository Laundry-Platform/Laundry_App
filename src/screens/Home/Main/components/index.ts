import styled from 'styled-components/native';
import { deviceWidth } from 'utils/dimensions';

const Layout = styled.ScrollView`
  flex: 1;
`;

const MapWrapper = styled.View`
  position: relative;
  width: ${deviceWidth}px;
  height: ${deviceWidth}px;
`;

const SearchBarContainer = styled.View<{ insetTop: number }>`
  position: absolute;
  left: 16px;
  top: ${props => props.insetTop + 24}px;
  flex-direction: row;
  width: ${deviceWidth - 32}px;
`;

const SearchInputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding: 0px 10px;
  border-radius: 4px;
  border: 1px solid rgb(229, 229, 236);
  background-color: #fff;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  height: 20px;

  font-size: 14px;
  letter-spacing: -0.7px;
  color: ${props => props.theme.color.fontblack};
`;

const SearchButton = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid rgb(229, 229, 236);
  margin-left: 14px;
  background-color: #fff;
`;

const SearchButtonText = styled.Text`
  font-size: 8px;
  line-height: 11px;
  letter-spacing: -0.4px;
  color: #000;
`;

const MyLocation = styled.Pressable`
  position: absolute;
  right: 8px;
  bottom: 8px;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
`;

const LaundryIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

const MapIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const LocationIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const HomeMainComponents = {
  Layout,
  MapWrapper,
  SearchBarContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  SearchButtonText,
  MyLocation,
  LaundryIcon,
  MapIcon,
  LocationIcon,
};

export default HomeMainComponents;
