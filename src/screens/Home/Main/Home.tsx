import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import HomeView from './HomeView';
import type { LatLng } from 'react-native-maps';
import type { HomeViewProps } from './HomeView';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [currentPosition, setCurrentPosition] = useState<LatLng>();

  useEffect(() => {
    Location.getCurrentPositionAsync().then(({ coords: { latitude, longitude } }) => {
      setCurrentPosition({
        latitude,
        longitude,
      });
    });
  }, []);

  const viewProps: HomeViewProps = {
    currentPosition,
  };
  return <HomeView {...viewProps} />;
};

export default Home;
