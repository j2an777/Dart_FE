import { CouponModal } from '@/pages/payment/components';
import { couponStore } from '@/stores/modal';
import { createPortal } from 'react-dom';

const CouponPortal = () => {
  const {
    close,
    couponValue: { open },
  } = couponStore();
  const $portal_root = document.getElementById('content-portal');
  return (
    <>
      {$portal_root
        ? createPortal(<div>{open && <CouponModal close={close} />}</div>, $portal_root)
        : null}
    </>
  );
};

export default CouponPortal;
