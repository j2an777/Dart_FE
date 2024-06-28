import { CouponIcon } from '..';
import { NoneData } from '@/components';
import { GeneralCoupon, MyCoupon } from '@/types/coupon';
import usePostGeneralCoupon from '../../hooks/usePostGeneralCoupon';

import * as S from './styles';

type ExendedCoupon = MyCoupon | GeneralCoupon;

interface CouponListProps<T extends ExendedCoupon> {
  orientation?: 'horizontal' | 'vertical';
  array: T[];
  onClick?: (form: MyCoupon) => void;
}

const CouponList = <T extends ExendedCoupon>({
  orientation = 'horizontal',
  array,
  onClick = () => {},
}: CouponListProps<T>) => {
  const { mutate: selectCoupon } = usePostGeneralCoupon();
  return (
    <S.Container orientation={orientation}>
      {array.length === 0 ? (
        <NoneData content="보유한 쿠폰이 없습니다" />
      ) : (
        array.map((coupon, index) => {
          if (isMyCoupon(coupon)) {
            return <CouponIcon key={index} {...coupon} onClick={() => onClick(coupon)} />;
          }
          return (
            <CouponIcon
              key={index}
              {...coupon}
              onClick={
                coupon.hasCoupon ? () => {} : () => selectCoupon(coupon.generalCouponId)
              }
              icon={coupon.hasCoupon ? 'circleCheck' : 'download'}
              couponId={coupon.generalCouponId}
            />
          );
        })
      )}
    </S.Container>
  );
};

export default CouponList;

function isMyCoupon(coupon: ExendedCoupon): coupon is MyCoupon {
  return 'couponId' in coupon;
}
