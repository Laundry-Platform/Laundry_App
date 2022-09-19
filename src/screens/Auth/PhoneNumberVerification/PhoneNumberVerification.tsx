import { AppScreenProps } from 'navigation/AppNavigation';
import React, { useEffect, useMemo, useState } from 'react';
import PhoneNumberVerificationView, {
  PhoneNumberVerificationViewProps,
} from './PhoneNumberVerificationView';

const LimitTimeSec = 180;

const PhoneNumberVerification: React.FC<AppScreenProps<'PhoneNumberVerification'>> = ({
  navigation,
  route,
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [certificationNumber, setCertificationNumber] = useState<string>('');
  const [showCertificationInput, setShowCertificationInput] = useState<boolean>(false);
  const [time, setTime] = useState<number>(LimitTimeSec);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(false);

  useEffect(() => {
    setCertificationNumber('');
    setTime(LimitTimeSec);
    let interval: NodeJS.Timer | undefined;
    if (showCertificationInput) {
      interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime === 0) setShowCertificationInput(false);
          return prevTime - 1;
        });
      }, 1000);
    } else if (!showCertificationInput) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [showCertificationInput]);

  const timeLeft = useMemo(() => {
    const minute = Math.floor(time / 60);
    const second = `0${time - minute * 60}`;
    const result = `${minute.toString()}:${second.slice(-2)}`;
    return result;
  }, [time]);

  const buttonDisabled = useMemo<boolean>(() => {
    if (showCertificationInput) {
      return Boolean(certificationNumber);
    }
    return Boolean(phoneNumber);
  }, [phoneNumber, certificationNumber, showCertificationInput]);

  const props: PhoneNumberVerificationViewProps = {
    buttonProps: {
      buttonProps: {
        disabled: !buttonDisabled,
        onPress: () => {
          if (!showCertificationInput) setShowCertificationInput(true);
          else navigation.navigate('SetPassword', { flow: route.params.flow });
        },
      },
      buttonText: showCertificationInput ? '다음' : '인증번호전송',
    },
    phoneNumberInputProps: {
      onChangeText: string => setPhoneNumber(string),
      value: phoneNumber,
    },
    showCertificationInput,
    certificationInputProps: {
      onChangeText: string => setCertificationNumber(string),
      value: certificationNumber,
    },
    timeLeft,
    reSendButtonProps: {
      disabled: isResendDisabled,
      onPress: () => {
        setTime(180);
        setIsResendDisabled(true);
        setTimeout(() => setIsResendDisabled(false), 20000);
      },
    },
  };

  return <PhoneNumberVerificationView {...props} />;
};

export default PhoneNumberVerification;
