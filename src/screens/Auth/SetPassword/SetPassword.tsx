import { AppScreenProps } from 'navigation/AppNavigation';
import React, { useMemo, useState } from 'react';
import SetPasswordView, { SetPasswordViewProps } from './SetPasswordView';

const SetPassword: React.FC<AppScreenProps<'SetPassword'>> = ({ route, navigation }) => {
  const [isPasswordSecure, setIsPasswordSecure] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');

  const [isPasswordCheckSecure, setIsPasswordCheckSecure] = useState<boolean>(true);
  const [passwordCheck, setPasswordCheck] = useState<string>('');

  const isPasswordRegexError = useMemo(() => {
    return password.length < 3;
  }, [password]);

  const isPasswordCheckError = useMemo(() => {
    return passwordCheck !== password;
  }, [passwordCheck, password]);

  const props: SetPasswordViewProps = {
    setPasswordText:
      route.params.flow === 'CreateAccount'
        ? '비밀번호를 설정해 주세요'
        : '새 비밀번호를 설정해 주세요',
    buttonProps: {
      buttonProps: {
        disabled: isPasswordRegexError || isPasswordCheckError,
        onPress: () => {
          if (route.params.flow === 'CreateAccount') navigation.navigate('SetUserInformation');
          else navigation.navigate('Login', { setIsLoggedIn: () => {} });
        },
      },
      buttonText: route.params.flow === 'CreateAccount' ? '다음' : '변경하기',
    },
    passwordInputProps: {
      iconProps: {
        height: 16,
        width: 24,
        source: isPasswordSecure
          ? require('assets/images/eye.png')
          : require('assets/images/eye-blue.png'),
        onPress: () => {
          setIsPasswordSecure(prev => !prev);
        },
      },
      inputProps: {
        placeholder: '8~16자의 특수문자, 숫자, 영 대/소문자 포함',
        textContentType: 'password',
        secureTextEntry: isPasswordSecure,
        value: password,
        onChangeText: setPassword,
      },
    },
    passwordCheckInputProps: {
      iconProps: {
        height: 16,
        width: 24,
        source: isPasswordCheckSecure
          ? require('assets/images/eye.png')
          : require('assets/images/eye-blue.png'),
        onPress: () => {
          setIsPasswordCheckSecure(prev => !prev);
        },
      },
      inputProps: {
        placeholder: '비밀번호 확인',
        textContentType: 'password',
        secureTextEntry: isPasswordCheckSecure,
        value: passwordCheck,
        onChangeText: setPasswordCheck,
      },
    },
  };

  return <SetPasswordView {...props} />;
};

export default SetPassword;
