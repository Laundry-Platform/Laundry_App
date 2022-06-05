import React, { useCallback } from 'react';
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import styled from 'styled-components/native';
import { deviceWidth } from 'utils/dimensions';
import { Platform, StyleSheet } from 'react-native';
import { AnimatedCircle, AnimatedPath } from 'components/Reanimated/Svg';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Container = styled.View<{ insetBottom: number }>`
  position: absolute;
  left: ${(deviceWidth - 92) / 2}px;
  bottom: ${props => props.insetBottom}px;
  width: 92px;
  height: 52px;
  background-color: transparent;
`;

const SearchCircle = styled.Pressable<{ insetBottom: number }>`
  position: absolute;
  bottom: 30px;
  left: 20px;
  width: 52px;
  height: 52px;
  border-radius: 26px;
`;

const SearchCircleShadow = StyleSheet.create({
  style:
    Platform.OS === 'android'
      ? { elevation: 8 }
      : {
          shadowColor: '#000000',
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 10,
        },
});

const SubButton = styled(Animated.View)<{ backgroundColor: string }>`
  position: absolute;
  bottom: 40px;
  left: 30px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${props => props.backgroundColor};
`;

const SubButtonShadow = StyleSheet.create({
  style:
    Platform.OS === 'android'
      ? { elevation: 5 }
      : {
          shadowColor: '#000000',
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 5,
        },
});

interface BottomSearchTabProps {
  insetBottom: number;
}

const BottomSearchTab: React.FC<BottomSearchTabProps> = ({ insetBottom }) => {
  const isOpen = useSharedValue(false);
  const searchIconCircleRadius = useSharedValue(7.25);
  const searchIconCircleOpacity = useSharedValue(1);
  const searchIconPathPoint = useSharedValue(31.5);
  const closeIconPathEndXPoint = useSharedValue(27);
  const closeIconPathEndYPoint = useSharedValue(23);
  const closeIconPathStartXPoint = useSharedValue(23);
  const closeIconPathStartYPoint = useSharedValue(27);
  const closeIconPathOpacity = useSharedValue(0);
  const leftSubButtonX = useSharedValue(0);
  const rightSubButtonX = useSharedValue(0);
  const subButtonY = useSharedValue(0);
  const subButtonScale = useSharedValue(0.5);

  const searchIconCircleProps = useAnimatedProps(() => ({
    r: withTiming(searchIconCircleRadius.value, { duration: 300 }),
    strokeOpacity: withTiming(searchIconCircleOpacity.value, { duration: 300 }),
  }));
  const searchIconPathProps = useAnimatedProps(() => ({
    d: `M${searchIconPathPoint.value},${searchIconPathPoint.value} 35.5,35.5`,
  }));
  const closeIconPathProps = useAnimatedProps(() => ({
    d: `M${closeIconPathStartXPoint.value},${closeIconPathStartYPoint.value} ${closeIconPathEndXPoint.value},${closeIconPathEndYPoint.value}`,
    strokeOpacity: withTiming(closeIconPathOpacity.value, { duration: 300 }),
  }));

  const leftSubButtonStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: leftSubButtonX.value },
      { translateY: subButtonY.value },
      { scale: subButtonScale.value },
    ],
  }));

  const rightSubButtonStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: rightSubButtonX.value },
      { translateY: subButtonY.value },
      { scale: subButtonScale.value },
    ],
  }));

  const onMainButtonPress = useCallback(() => {
    if (isOpen.value) {
      searchIconCircleRadius.value = 7.25;
      searchIconCircleOpacity.value = 1;
      searchIconPathPoint.value = withTiming(31.5, { duration: 300 });
      closeIconPathOpacity.value = 0;
      closeIconPathEndXPoint.value = withTiming(27, { duration: 300 });
      closeIconPathEndYPoint.value = withTiming(23, { duration: 300 });
      closeIconPathStartXPoint.value = withTiming(23, { duration: 300 });
      closeIconPathStartYPoint.value = withTiming(27, { duration: 300 });
      leftSubButtonX.value = withTiming(0, { duration: 300 });
      rightSubButtonX.value = withTiming(0, { duration: 300 });
      subButtonY.value = withTiming(0, { duration: 300 });
      subButtonScale.value = withTiming(0.5, { duration: 300 });
      isOpen.value = false;
    } else {
      searchIconCircleRadius.value = 10;
      searchIconCircleOpacity.value = 0;
      searchIconPathPoint.value = withTiming(17, { duration: 300 });
      closeIconPathOpacity.value = 1;
      closeIconPathEndXPoint.value = withTiming(35.5, { duration: 300 });
      closeIconPathEndYPoint.value = withTiming(17, { duration: 300 });
      closeIconPathStartXPoint.value = withTiming(17, { duration: 300 });
      closeIconPathStartYPoint.value = withTiming(35.5, { duration: 300 });
      leftSubButtonX.value = withSpring(-32);
      rightSubButtonX.value = withSpring(32);
      subButtonY.value = withSpring(-50);
      subButtonScale.value = withTiming(1, { duration: 300 });
      isOpen.value = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container insetBottom={insetBottom}>
      <SubButton style={[SubButtonShadow.style, leftSubButtonStyles]} backgroundColor="#4b47aa" />
      <SubButton style={[SubButtonShadow.style, rightSubButtonStyles]} backgroundColor="#637ffd" />
      <Svg width="100%" height="100%">
        <Path
          d="M-5134.094 343c-6.306 0-12.1 3.572-14 9-4.295 12.286-16.971 21-32 21s-27.7-8.714-32-21c-1.9-5.428-7.695-9-14-9v52h92v-52z"
          transform="translate(5226.094 -343)"
          fill="#ffffff"
        />
      </Svg>
      <SearchCircle
        insetBottom={insetBottom}
        style={SearchCircleShadow.style}
        onPress={onMainButtonPress}
      >
        <Svg width="100%" height="100%">
          <Defs>
            <LinearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <Stop offset={0} stopColor="#4b47aa" />
              <Stop offset={0.43} stopColor="#637ffd" />
              <Stop offset={1} stopColor="#69aee3" />
            </LinearGradient>
          </Defs>
          <Circle cx="26" cy="26" r="26" fill="url(#gradient)" />
          <AnimatedCircle
            id="search_circle"
            animatedProps={searchIconCircleProps}
            cx="25"
            cy="25"
            strokeWidth="3.5"
            stroke="#ffffff"
          />
          <AnimatedPath
            id="search_path"
            animatedProps={searchIconPathProps}
            strokeWidth="3.5"
            stroke="#ffffff"
            strokeLinecap="round"
          />
          <AnimatedPath
            id="close_path"
            origin="17, 35.5"
            animatedProps={closeIconPathProps}
            strokeWidth="3.5"
            stroke="#ffffff"
            strokeLinecap="round"
          />
        </Svg>
      </SearchCircle>
    </Container>
  );
};

export default BottomSearchTab;
