import React, { useState } from 'react';
import { ImageSourcePropType, Pressable, TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { StyledComponent } from 'types/styled-components';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const InputBox = styled.View<{ isFocused: boolean }>`
  height: 44px;
  flex: 1;
  border: 1px solid ${props => (props.isFocused ? 'rgb(99, 127, 253)' : 'rgb(229, 229, 236)')};
  padding: 0px 12px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
`;

const Input: StyledComponent<typeof TextInput> = styled.TextInput`
  height: 100%;
  flex: 1;
`;

const Button = styled.Pressable`
  background-color: ${props =>
    props.disabled ? props.theme.color.mainNotActive : props.theme.color.main};
  padding: 12px;
  margin-left: 12px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;
  color: #fff;
`;

export interface NickNameInputProps {
  inputProps?: TextInputProps;
}

const NickNameInput: React.FC<NickNameInputProps> = ({ inputProps }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const textInputProps: Omit<TextInputProps, 'accessibilityRole'> = {
    ...inputProps,
    onFocus: e => {
      setIsFocused(true);
      if (inputProps?.onFocus) inputProps.onFocus(e);
    },
    onBlur: e => {
      setIsFocused(false);
      if (inputProps?.onFocus) inputProps.onFocus(e);
    },
  };

  return (
    <Container>
      <InputBox isFocused={isFocused}>
        <Input {...textInputProps} />
      </InputBox>
      <Button>
        <ButtonText>중복확인</ButtonText>
      </Button>
    </Container>
  );
};

export default NickNameInput;
