import React from 'react';
import NotificationView from './NotificationView';
import type { NotificationViewProps } from './NotificationView';

interface NotificationProps {}

const Notification: React.FC<NotificationProps> = () => {
  const viewProps: NotificationViewProps = {};
  return <NotificationView {...viewProps} />;
};

export default Notification;
