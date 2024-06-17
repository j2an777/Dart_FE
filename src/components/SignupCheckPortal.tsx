import { checkModalStore } from '@/stores/modal';
import { createPortal } from 'react-dom';
import { CheckModal } from '@/pages/signup/components';
import { useEffect } from 'react';

const SignupCheckPortal = () => {
  const { checkModalValue, close } = checkModalStore();
  const $portal_root = document.getElementById('content-portal');
  useEffect(() => {
    return () => close();
  }, [close]);
  return (
    <>
      {$portal_root
        ? createPortal(
            <div>{checkModalValue.open && <CheckModal {...checkModalValue} />}</div>,
            $portal_root,
          )
        : null}
    </>
  );
};

export default SignupCheckPortal;
