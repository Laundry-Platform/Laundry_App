import { AppScreenProps } from 'navigation/AppNavigation';
import React from 'react';
import PhoneNumberVerificationView, {
  PhoneNumberVerificationViewProps,
} from './PhoneNumberVerificationView';

const PhoneNumberVerification: React.FC<AppScreenProps<'PhoneNumberVerification'>> = ({
  navigation,
  route,
}) => {
  const props: PhoneNumberVerificationViewProps = {};

  return <PhoneNumberVerificationView {...props} />;
};

export default PhoneNumberVerification;
