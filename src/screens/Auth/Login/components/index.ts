import styled from 'styled-components/native';
import AuthStyeldComponents from 'screens/Auth/styledComponents-shared';

const LogoImage = styled.Image`
  width: 173.3px;
  height: 34.1px;
  margin-bottom: 42px;
  margin-top: 116px;
  align-self: center;
`;

const SubBox = styled.View`
  margin: 24px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AutoLogin = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;

const CheckBox = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const AutoLoginText = styled.Text`
  font-size: 14px;
  letter-spacing: -0.7px;
  color: #111111;
`;

const FindPasswordText = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.color.fontlight};
`;

const CreateAccount = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
`;

const CreateAccountText = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.color.fontlight};
  letter-spacing: -0.8px;
`;

const CreateAccountButtonText = styled.Text`
  font-size: 14px;
  color: rgb(99, 127, 253);
  letter-spacing: -0.8px;
`;

const CreateAccountButton = styled.Pressable`
  flex-direction: row;
  margin-left: 4px;
  align-items: center;
`;

const CreateAccountButtonImage = styled.Image`
  width: 5px;
  height: 10px;
  margin-left: 4px;
`;

const LoginComponents = {
  LogoImage,
  SubBox,
  AutoLogin,
  CheckBox,
  AutoLoginText,
  FindPasswordText,
  CreateAccount,
  CreateAccountText,
  CreateAccountButtonText,
  CreateAccountButton,
  CreateAccountButtonImage,
};

export default LoginComponents;
