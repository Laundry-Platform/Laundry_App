import 'dotenv/config';

export default {
  name: 'Laundry_App',
  slug: 'Laundry_App',
  version: '1.0.0',
  platforms: ['ios', 'android'],
  githubUrl: 'https://github.com/Laundry-Platform/Laundry_App',
  orientation: 'portrait',
  userInterfaceStyle: 'light',
  icon: './src/assets/images/app/icon.png',
  splash: {
    image: './src/assets/images/app/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    infoPlist: {
      NSLocationWhenInUseUsageDescription:
        '빨래방 위치를 표시하는 지도를 사용하려면 위치 권한 허용이 필요합니다.',
    },
    config: {
      googleMapsApiKey: process.env.GOOGLE_MAP_IOS_API_KEY,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/images/app/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    config: {
      googleMaps: {
        apiKey: process.env.GOOGLE_MAP_ANDROID_API_KEY,
      },
    },
  },
};
