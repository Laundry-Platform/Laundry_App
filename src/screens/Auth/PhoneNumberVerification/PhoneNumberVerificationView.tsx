import { Padding } from 'components/Basic';
import AuthButton from 'components/Button/AuthButton';
import AuthInput from 'components/Input/AuthInput';
import AuthLayout from 'components/Layout/AuthLayout';
import React from 'react';
import PhoneNumberVerificationComponents from './components';

export interface PhoneNumberVerificationViewProps {}

const PhoneNumberVerificationView: React.FC<PhoneNumberVerificationViewProps> = () => {
  return (
    <AuthLayout>
      <PhoneNumberVerificationComponents.VerificationText>
        휴대폰 번호 인증
      </PhoneNumberVerificationComponents.VerificationText>
      <AuthInput
        inputProps={{
          placeholder: '휴대폰번호를 입력해주세요(‘-‘제외)',
        }}
      />
      <Padding bottom={20} />

      <AuthButton
        buttonText="인증번호 전송"
        buttonProps={{
          onPress: () => {},
          disabled: true,
        }}
      />
    </AuthLayout>
  );
};

export default PhoneNumberVerificationView;
