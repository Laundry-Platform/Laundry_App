import styled from 'styled-components/native';
import AuthStyeldComponents from 'screens/Auth/styledComponents-shared';
import NickNameInput from './NickNameInput';

const LabelText = styled(AuthStyeldComponents.MEDIUM_16PT_TEXT)`
  margin-top: 20px;
  margin-bottom: 16px;
`;

const SetUserInfoComponents = {
  LabelText,
  NickNameInput,
};

export default SetUserInfoComponents;
