import React from 'react';
import styled from 'styled-components/native';

const Layout = styled.View`
  padding: 0px 24px;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #fff;
`;

interface AuthLayoutProps {}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default AuthLayout;
