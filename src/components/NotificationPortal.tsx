import { createPortal } from 'react-dom';
import { Notification } from '.';
import { memberStore } from '@/stores/member';

const NotificationPortal = () => {
  const isLogin = !!memberStore((state) => state.accessToken);
  const $portal_root = document.getElementById('notification-portal');
  return (
    <>
      {$portal_root
        ? createPortal(<>{isLogin && <Notification />}</>, $portal_root)
        : null}
    </>
  );
};

export default NotificationPortal;
