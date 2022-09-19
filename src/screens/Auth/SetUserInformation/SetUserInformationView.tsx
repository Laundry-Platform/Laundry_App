import { Padding } from 'components/Basic';
import DateTimePicker from '@react-native-community/datetimepicker';
import AuthLayout from 'components/Layout/AuthLayout';
import React from 'react';
import SetUserInfoComponents from './components';

export interface SetUserInformationViewProps {}

const SetUserInformationView: React.FC<SetUserInformationViewProps> = () => {
  return (
    <AuthLayout>
      <Padding bottom={4} />
      <SetUserInfoComponents.LabelText>
        사용하실 닉네임을 입력해주세요
      </SetUserInfoComponents.LabelText>
      <SetUserInfoComponents.NickNameInput inputProps={{ placeholder: '4~8글자 한글과 영어' }} />
      <SetUserInfoComponents.LabelText>생일을 입력해주세요</SetUserInfoComponents.LabelText>
      <DateTimePicker
        value={new Date()}
        mode="date"
        style={{ backgroundColor: 'blue' }}
        dateFormat="longdate"
      />
      <SetUserInfoComponents.LabelText>성별을 선택해주세요</SetUserInfoComponents.LabelText>
    </AuthLayout>
  );
};

export default SetUserInformationView;
