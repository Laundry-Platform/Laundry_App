import { AppScreenProps } from 'navigation/AppNavigation';
import React from 'react';
import SetUserInformationView, { SetUserInformationViewProps } from './SetUserInformationView';

const SetUserInformation: React.FC<AppScreenProps<'SetUserInformation'>> = () => {
  const props: SetUserInformationViewProps = {};
  return <SetUserInformationView {...props} />;
};

export default SetUserInformation;
