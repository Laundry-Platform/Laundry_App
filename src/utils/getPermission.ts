import * as Location from 'expo-location';

const getPermission = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();

  return {
    location: status,
  };
};

export default getPermission;
