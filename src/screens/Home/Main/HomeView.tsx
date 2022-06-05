import React from 'react';
import MapView, { LatLng, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import HomeMainComponents from './components';

const mapStyle = StyleSheet.create({
  style: {
    width: '100%',
    height: '100%',
  },
});
export interface HomeViewProps {
  currentPosition?: LatLng;
}

const HomeView: React.FC<HomeViewProps> = ({ currentPosition }) => {
  return (
    <HomeMainComponents.Layout>
      <HomeMainComponents.MapWrapper>
        {currentPosition ? (
          <MapView
            style={mapStyle.style}
            provider={PROVIDER_GOOGLE}
            region={{
              ...currentPosition,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          />
        ) : null}
      </HomeMainComponents.MapWrapper>
    </HomeMainComponents.Layout>
  );
};

export default HomeView;
