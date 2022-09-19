import { Padding } from 'components/Basic';
import AuthButton from 'components/Button/AuthButton';
import AuthInput, { AuthInputProps } from 'components/Input/AuthInput';
import AuthLayout from 'components/Layout/AuthLayout';
import React from 'react';
import { PressEventHandler } from 'types/react-native/event';
import SetPasswordComponents from './components';

export interface SetPasswordViewProps {
  setPasswordText: string;
  passwordInputProps: AuthInputProps;
  passwordCheckInputProps: AuthInputProps;
  buttonProps: {
    buttonProps: {
      onPress: PressEventHandler;
      disabled: boolean;
    };
    buttonText: string;
  };
}

const SetPasswordView: React.FC<SetPasswordViewProps> = ({
  setPasswordText,
  buttonProps,
  passwordCheckInputProps,
  passwordInputProps,
}) => {
  return (
    <AuthLayout>
      <SetPasswordComponents.SetPasswordText>
        {setPasswordText}
      </SetPasswordComponents.SetPasswordText>
      <AuthInput {...passwordInputProps} />
      <Padding bottom={8} />
      <AuthInput {...passwordCheckInputProps} />
      <Padding bottom={20} />
      <AuthButton {...buttonProps} />
    </AuthLayout>
  );
};

export default SetPasswordView;
