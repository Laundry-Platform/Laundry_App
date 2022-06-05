import React from 'react';
import HomeView from './HomeView';
import type { HomeViewProps } from './HomeView';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const viewProps: HomeViewProps = {};
  return <HomeView {...viewProps} />;
};

export default Home;
