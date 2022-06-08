import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import styled from 'styled-components/native';
import { StyledComponent } from 'types/styled-components';

const Button: StyledComponent<typeof Pressable> = styled.Pressable`
  height: 48px;
  background-color: ${props =>
    props.disabled ? props.theme.color.mainNotActive : props.theme.color.main};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  letter-spacing: -0.8px;
  font-weight: 700;
`;

interface AuthButtonProps {
  buttonText: string;
  buttonProps: PressableProps;
}

const AuthButton: React.FC<AuthButtonProps> = ({ buttonText, buttonProps }) => {
  return (
    <Button {...buttonProps}>
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
};

export default AuthButton;
