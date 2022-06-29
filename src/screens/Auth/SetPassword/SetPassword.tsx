import { AppScreenProps } from 'navigation/AppNavigation';
import React from 'react';
import SetPasswordView, { SetPasswordViewProps } from './SetPasswordView';

interface SetPasswordProps {}

const SetPassword: React.FC<AppScreenProps<'SetPassword'>> = ({ route }) => {
  const props: SetPasswordViewProps = {
    flow: route.params.flow,
  };

  return <SetPasswordView {...props} />;
};

export default SetPassword;
