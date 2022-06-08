import { Padding } from 'components/Basic';
import AuthButton from 'components/Button/AuthButton';
import AuthInput, { AuthInputProps } from 'components/Input/AuthInput';
import AuthLayout from 'components/Layout/AuthLayout';
import React from 'react';
import { GestureResponderEvent, ImageSourcePropType, Pressable } from 'react-native';
import LoginComponents from './components';

export interface LoginViewProps {
  phoneNumberInputProps: AuthInputProps;
  passwordInputProps: AuthInputProps;
  autoLoginProps: {
    onPress?: (event: GestureResponderEvent) => void;
    source: ImageSourcePropType;
  };
  forgotPasswordProps: {
    onPress?: (event: GestureResponderEvent) => void;
  };
  loginButtonProps: {
    disabled: boolean;
    onPress?: (event: GestureResponderEvent) => void;
  };
  createAccountProps: {
    onPress?: (event: GestureResponderEvent) => void;
  };
}

const LoginView: React.FC<LoginViewProps> = ({
  autoLoginProps,
  createAccountProps,
  forgotPasswordProps,
  loginButtonProps,
  passwordInputProps,
  phoneNumberInputProps,
}) => {
  return (
    <AuthLayout>
      <LoginComponents.LogoImage source={require('assets/logo.png')} />
      <AuthInput {...phoneNumberInputProps} />
      <Padding top={8} />
      <AuthInput {...passwordInputProps} />
      <LoginComponents.SubBox>
        <LoginComponents.AutoLogin onPress={autoLoginProps.onPress}>
          <LoginComponents.CheckBox source={autoLoginProps.source} />
          <LoginComponents.AutoLoginText>자동로그인</LoginComponents.AutoLoginText>
        </LoginComponents.AutoLogin>
        <Pressable onPress={forgotPasswordProps.onPress}>
          <LoginComponents.FindPasswordText>비밀번호 찾기</LoginComponents.FindPasswordText>
        </Pressable>
      </LoginComponents.SubBox>
      <AuthButton
        buttonProps={{
          disabled: loginButtonProps.disabled,
          onPress: loginButtonProps.onPress,
        }}
        buttonText="로그인"
      />
      <LoginComponents.CreateAccount>
        <LoginComponents.CreateAccountText>
          아직도 회원이 아닌가요?
        </LoginComponents.CreateAccountText>
        <LoginComponents.CreateAccountButton onPress={createAccountProps.onPress}>
          <LoginComponents.CreateAccountButtonText>
            회원가입
          </LoginComponents.CreateAccountButtonText>
          <LoginComponents.CreateAccountButtonImage
            source={require('assets/images/chevron-right-blue.png')}
          />
        </LoginComponents.CreateAccountButton>
      </LoginComponents.CreateAccount>
    </AuthLayout>
  );
};

export default LoginView;
