import AuthLayout from 'components/Layout/AuthLayout';
import React, { useState } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding-top: 116px;
  width: 100%;
  align-items: center;
`;

const InputBox = styled.View<{ isFocused: boolean }>`
  height: 44px;
  width: 100%;
  border: 1px solid ${props => (props.isFocused ? 'rgb(99, 127, 253)' : 'rgb(229, 229, 236)')};
  padding: 0px 12px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 8px;
`;

const IconBox = styled.View`
  padding-left: 12px;
  height: 100%;
  justify-content: center;
`;

const Input = styled.TextInput`
  height: 100%;
  flex: 1;
`;

const LogoImage = styled.Image`
  width: 173.3;
  height: 34.1;
  margin-bottom: 42px;
`;

const EyeImage = styled.Image`
  width: 21;
  height: 14;
`;

const CloseImage = styled.Image`
  width: 18;
  height: 18;
`;

interface FancyInputProps {}

const EyeIcon: React.FC = () => (
  <IconBox>
    <EyeImage source={require('assets/images/eye.png')} />
  </IconBox>
);

const CloseIcon: React.FC = () => (
  <IconBox>
    <CloseImage source={require('assets/images/close.png')} />
  </IconBox>
);

const FancyInput: React.FC<FancyInputProps> = ({ children }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <InputBox isFocused={isFocused}>
      <Input onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
      {isFocused && children}
    </InputBox>
  );
};

export interface LoginViewProps {}

const LoginView: React.FC<LoginViewProps> = () => {
  return (
    <AuthLayout>
      <Container>
        <LogoImage source={require('assets/logo.png')} />
        <FancyInput>
          <CloseIcon />
        </FancyInput>
        <FancyInput>
          <EyeIcon />
        </FancyInput>
      </Container>
    </AuthLayout>
  );
};

export default LoginView;
