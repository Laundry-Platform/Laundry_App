import React, { useState } from 'react';
import { ImageSourcePropType, TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { StyledComponent } from 'types/styled-components';

const InputBox = styled.View<{ isFocused: boolean }>`
  height: 44px;
  width: 100%;
  border: 1px solid ${props => (props.isFocused ? 'rgb(99, 127, 253)' : 'rgb(229, 229, 236)')};
  padding: 0px 12px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
`;

const IconBox = styled.Pressable`
  padding-left: 12px;
  height: 100%;
  justify-content: center;
`;

const Input: StyledComponent<typeof TextInput> = styled.TextInput`
  height: 100%;
  flex: 1;
`;

interface IconProps {
  width: number;
  height: number;
}

const Icon = styled.Image<IconProps>`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
`;

interface InputIconProps extends IconProps {
  source: ImageSourcePropType;
  onPress?: VoidFunction;
}

export interface AuthInputProps {
  iconProps?: InputIconProps;
  inputProps?: TextInputProps;
}

const InputIcon: React.FC<InputIconProps> = props => {
  const { onPress, ...icon } = props;
  return (
    <IconBox onPress={onPress}>
      <Icon {...icon} />
    </IconBox>
  );
};

const AuthInput: React.FC<AuthInputProps> = ({ iconProps, inputProps }) => {
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
    <InputBox isFocused={isFocused}>
      <Input {...textInputProps} />
      {isFocused && iconProps ? <InputIcon {...iconProps} /> : null}
    </InputBox>
  );
};

export default AuthInput;
