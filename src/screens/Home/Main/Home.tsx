import React, { useCallback, useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import HomeView from './HomeView';
import type { LatLng } from 'react-native-maps';
import type { HomeViewProps } from './HomeView';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [currentPosition, setCurrentPosition] = useState<LatLng>();

  const getLocation = useCallback(async () => {
    try {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setCurrentPosition({
        latitude,
        longitude,
      });
    } catch {
      Alert.alert('위치 권한이 없습니다.', '지도를 사용하려면 위치권한을 활성화 해주세요', [
        {
          text: '나중에',
          style: 'cancel',
        },
        {
          text: '권한 요청',
          onPress: () => {
            Location.requestForegroundPermissionsAsync();
          },
        },
      ]);
    }
  }, []);

  useEffect(() => {
    Location.getForegroundPermissionsAsync().then(status => {
      if (!status.granted) return;
      getLocation();
    });
  }, [getLocation]);

  const viewProps: HomeViewProps = {
    currentPosition,
  };
  return <HomeView {...viewProps} />;
};

export default Home;
