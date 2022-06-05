import React from 'react';
import MyPageView from './MyPageView';
import type { MyPageViewProps } from './MyPageView';

interface MyPageProps {}

const MyPage: React.FC<MyPageProps> = () => {
  const viewProps: MyPageViewProps = {};
  return <MyPageView {...viewProps} />;
};

export default MyPage;
