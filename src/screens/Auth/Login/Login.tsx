import { AppScreenProps } from 'navigation/AppNavigation';
import React, { useState } from 'react';
import LoginView, { LoginViewProps } from './LoginView';

const Login: React.FC<AppScreenProps<'Login'>> = ({ navigation, route }) => {
  const [isPwSecure, setIsPwSecure] = useState<boolean>(true);
  const [isAutoLogin, setIsAutoLogin] = useState<boolean>(true);

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const props: LoginViewProps = {
    phoneNumberInputProps: {
      iconProps: {
        height: 18,
        width: 18,
        source: require('assets/images/close.png'),
        onPress: () => setPhoneNumber(''),
      },
      inputProps: {
        keyboardType: 'phone-pad',
        returnKeyLabel: 'no',
        textContentType: 'telephoneNumber',
        placeholder: '휴대폰번호를 입력해 주세요',
        value: phoneNumber,
        onChangeText: setPhoneNumber,
      },
    },
    passwordInputProps: {
      iconProps: {
        height: 16,
        width: 24,
        source: isPwSecure
          ? require('assets/images/eye.png')
          : require('assets/images/eye-blue.png'),
        onPress: () => {
          setIsPwSecure(prev => !prev);
        },
      },
      inputProps: {
        placeholder: '비밀번호를 입력해 주세요',
        textContentType: 'password',
        passwordRules: '123',
        secureTextEntry: isPwSecure,
        value: password,
        onChangeText: setPassword,
      },
    },
    autoLoginProps: {
      source: isAutoLogin
        ? require('assets/images/check-circle-blue.png')
        : require('assets/images/check-circle-gray.png'),
      onPress: () => setIsAutoLogin(prev => !prev),
    },
    findPasswordProps: {
      onPress: e => {},
    },
    loginButtonProps: {
      disabled: !(phoneNumber.length >= 10 && password.length >= 8),
      onPress: () => route.params.setIsLogedIn(true),
    },
    createAccountProps: {
      onPress: e => {},
    },
  };

  return <LoginView {...props} />;
};

export default Login;
