import { AppScreenProps } from 'navigation/AppNavigation';
import { Text } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import PhoneNumberVerificationView, {
  PhoneNumberVerificationViewProps,
} from './PhoneNumberVerificationView';

const LIMIT_TIME_SEC = 10;

const PhoneNumberVerification: React.FC<AppScreenProps<'PhoneNumberVerification'>> = ({
  navigation,
  route,
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [certificationNumber, setCertificationNumber] = useState<string>('');
  const [showCertificationInput, setShowCertificationInput] = useState<boolean>(false);
  const [time, setTime] = useState<number>(LIMIT_TIME_SEC);

  useEffect(() => {
    setCertificationNumber('');
    setTime(LIMIT_TIME_SEC);
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
  };

  return <PhoneNumberVerificationView {...props} />;
};

export default PhoneNumberVerification;
