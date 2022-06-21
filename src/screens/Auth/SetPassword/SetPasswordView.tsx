import { AuthFlow } from 'navigation/AppNavigation';
import React from 'react';
import { Text } from 'react-native';

export interface SetPasswordViewProps {
  flow: AuthFlow;
}

const SetPasswordView: React.FC<SetPasswordViewProps> = ({ flow }) => {
  return <Text>{flow === 'CreateAccount' ? '비밀번호 만들기' : '새 비밀번호 설정'}</Text>;
};

export default SetPasswordView;
