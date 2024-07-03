import { createPortal } from 'react-dom';
import { Notification } from '.';
import { memberStore } from '@/stores/member';

const NotificationPortal = () => {
  const $portal_root = document.getElementById('notification-portal');
  const isLogin = !!memberStore((state) => state.accessToken);

  return (
    <>
      {$portal_root
        ? createPortal(<>{isLogin && <Notification />}</>, $portal_root)
        : null}
    </>
  );
};

export default NotificationPortal;
