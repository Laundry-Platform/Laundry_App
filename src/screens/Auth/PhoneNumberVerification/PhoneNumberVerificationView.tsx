import { Padding } from 'components/Basic';
import AuthButton from 'components/Button/AuthButton';
import AuthInput from 'components/Input/AuthInput';
import AuthLayout from 'components/Layout/AuthLayout';
import React from 'react';
import { OnPress } from 'types/common';
import PhoneNumberVerificationComponents from './components';

export interface PhoneNumberVerificationViewProps {
  phoneNumberInputProps: {
    value: string;
    onChangeText: (str: string) => void;
  };
  buttonProps: {
    buttonProps: {
      onPress: OnPress;
      disabled: boolean;
    };
    buttonText: string;
  };
  showCertificationInput: boolean;
  certificationInputProps: {
    value: string;
    onChangeText: (str: string) => void;
  };
  timeLeft: string;
  reSendButtonProps: {
    onPress: OnPress;
    disabled: boolean;
  };
}

const PhoneNumberVerificationView: React.FC<PhoneNumberVerificationViewProps> = ({
  phoneNumberInputProps,
  buttonProps,
  certificationInputProps,
  showCertificationInput,
  timeLeft,
  reSendButtonProps,
}) => {
  return (
    <AuthLayout>
      <Padding bottom={4} />
      <PhoneNumberVerificationComponents.VerificationText>
        휴대폰 번호 인증
      </PhoneNumberVerificationComponents.VerificationText>
      <AuthInput
        inputProps={{
          placeholder: '휴대폰번호를 입력해주세요(‘-‘제외)',
          ...phoneNumberInputProps,
        }}
      />
      {showCertificationInput ? (
        <>
          <PhoneNumberVerificationComponents.Rowbox>
            <PhoneNumberVerificationComponents.VerificationText>
              전송된 인증번호를 입력해주세요
            </PhoneNumberVerificationComponents.VerificationText>
            <PhoneNumberVerificationComponents.TimeText>
              {timeLeft}
            </PhoneNumberVerificationComponents.TimeText>
            <PhoneNumberVerificationComponents.ReSendPressable {...reSendButtonProps}>
              <PhoneNumberVerificationComponents.ReSendText disabled={reSendButtonProps.disabled}>
                재전송
              </PhoneNumberVerificationComponents.ReSendText>
            </PhoneNumberVerificationComponents.ReSendPressable>
          </PhoneNumberVerificationComponents.Rowbox>
          <AuthInput
            inputProps={{
              placeholder: '인증번호를 입력해주세요',
              ...certificationInputProps,
            }}
          />
        </>
      ) : null}
      <Padding bottom={20} />
      <AuthButton {...buttonProps} />
    </AuthLayout>
  );
};

export default PhoneNumberVerificationView;
