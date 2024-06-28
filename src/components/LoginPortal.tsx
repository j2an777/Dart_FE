import { LoginModal } from '@/pages/login/components';
import { LoginModalStore } from '@/stores/modal';
import { createPortal } from 'react-dom';

const LoginPortal = () => {
  const { open } = LoginModalStore((state) => state.value);
  const $portal_root = document.getElementById('login-portal');
  return (
    <>
      {$portal_root
        ? createPortal(<div>{open && <LoginModal />}</div>, $portal_root)
        : null}
    </>
  );
};

export default LoginPortal;
