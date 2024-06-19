import { createPortal } from 'react-dom';
import { Notification } from '.';

const NotificationPortal = () => {
  const $portal_root = document.getElementById('notification-portal');
  return <>{$portal_root ? createPortal(<Notification />, $portal_root) : null}</>;
};

export default NotificationPortal;
