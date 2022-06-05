import React from 'react';
import CommunityView from './CommunityView';
import type { CommunityViewProps } from './CommunityView';

interface CommunityProps {}

const Community: React.FC<CommunityProps> = () => {
  const viewProps: CommunityViewProps = {};
  return <CommunityView {...viewProps} />;
};

export default Community;
