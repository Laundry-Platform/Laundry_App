import styled from 'styled-components/native';
import AuthStyeldComponents from 'screens/Auth/styledComponents-shared';

const VerificationText = styled(AuthStyeldComponents.MEDIUM_16PT_TEXT)`
  margin-top: 20px;
  margin-bottom: 16px;
`;

const ReSendPressable = styled.Pressable`
  flex: 1;
`;

const ReSendText = styled.Text<{ disabled: boolean }>`
  font-size: 14px;
  letter-spacing: -0.7px;
  color: ${props => (props.disabled ? props.theme.color.mainNotActive : props.theme.color.main)};

  font-weight: 500;
  text-align: right;
`;

const Rowbox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TimeText = styled.Text`
  font-size: 14px;
  letter-spacing: -0.7px;
  color: ${props => props.theme.color.gray};
  padding-top: 4px;
  padding-left: 8px;
`;

const PhoneNumberVerificationComponents = {
  VerificationText,
  ReSendText,
  Rowbox,
  ReSendPressable,
  TimeText,
};

export default PhoneNumberVerificationComponents;
