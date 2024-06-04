import { alertStore } from '@/stores/modal';
import { createPortal } from 'react-dom';
import Alert from './alert';

const AlertPortal = () => {
  const alertValue = alertStore((state) => state.alertValue);
  const $portal_root = document.getElementById('alert-portal');
  return (
    <>
      {$portal_root
        ? createPortal(
            <div>{alertValue.open && <Alert {...alertValue} />}</div>,
            $portal_root,
          )
        : null}
    </>
  );
};

export default AlertPortal;
