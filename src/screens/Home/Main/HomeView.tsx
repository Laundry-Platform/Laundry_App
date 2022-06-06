import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from 'styles/theme';
import HomeMainComponents from './components';
import type { LatLng } from 'react-native-maps';

const homeStyles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  shadow:
    Platform.OS === 'ios'
      ? {
          shadowOffset: { width: 0, height: 3 },
          shadowColor: '#000',
          shadowRadius: 6,
          shadowOpacity: 0.16,
        }
      : {
          elevation: 5,
        },
});
export interface HomeViewProps {
  currentPosition?: LatLng;
}

const HomeView: React.FC<HomeViewProps> = ({ currentPosition }) => {
  const { top } = useSafeAreaInsets();

  return (
    <HomeMainComponents.Layout>
      <HomeMainComponents.MapWrapper>
        {currentPosition ? (
          <MapView
            style={homeStyles.map}
            provider={PROVIDER_GOOGLE}
            region={{
              ...currentPosition,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
          />
        ) : null}
        <HomeMainComponents.SearchBarContainer insetTop={top}>
          <HomeMainComponents.SearchInputContainer style={homeStyles.shadow}>
            <HomeMainComponents.LaundryIcon
              source={require('assets/images/home/laundry_icon.png')}
            />
            <HomeMainComponents.SearchInput
              placeholderTextColor={theme.color.fontlight}
              placeholder="빨래방을 검색해보세요 ex) 양재동"
            />
          </HomeMainComponents.SearchInputContainer>
          <HomeMainComponents.SearchButton style={homeStyles.shadow}>
            <HomeMainComponents.MapIcon
              source={require('assets/images/home/map_search_icon.png')}
            />
            <HomeMainComponents.SearchButtonText>지도검색</HomeMainComponents.SearchButtonText>
          </HomeMainComponents.SearchButton>
        </HomeMainComponents.SearchBarContainer>
        <HomeMainComponents.MyLocation style={homeStyles.shadow}>
          <HomeMainComponents.LocationIcon
            source={require('assets/images/home/location_icon.png')}
          />
        </HomeMainComponents.MyLocation>
      </HomeMainComponents.MapWrapper>
    </HomeMainComponents.Layout>
  );
};

export default HomeView;
