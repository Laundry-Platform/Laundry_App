import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import styled from 'styled-components/native';

const Layout = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Padding = styled.View`
  padding: 0px 24px;
  flex: 1;
`;

interface AuthLayoutProps {}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Padding>{children}</Padding>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default AuthLayout;
