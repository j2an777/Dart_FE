import { Dimmed, Icon, Text } from '@/components';
import { CouponList } from '@/pages/event/components';
import useGetMyCoupons from '@/pages/event/hooks/useGetMyCoupons';
import { useFormContext } from 'react-hook-form';
import { MyCoupon } from '@/types/coupon';
import { PaymentValue } from '../..';

import * as S from './styles';

const CouponModal = ({ close }: { close: () => void }) => {
  const { data } = useGetMyCoupons(true);

  const { setValue } = useFormContext<PaymentValue>();
  const onClick = (form: MyCoupon) => {
    const { couponId, couponType, isPriority, title } = form;
    setValue('couponId', couponId);
    setValue('isPriority', isPriority);
    setValue('title', title);
    setValue('couponType', couponType);
    close();
  };
  return (
    <Dimmed>
      <S.Container>
        <S.HeaderBox>
          <Text typography="t4">보유 쿠폰</Text>
          <Icon value="cancel" size={15} onClick={close} />
        </S.HeaderBox>
        <S.ScrollBox>
          <CouponList
            orientation="vertical"
            array={data?.myCoupons ?? []}
            onClick={onClick}
          />
        </S.ScrollBox>
      </S.Container>
    </Dimmed>
  );
};

export default CouponModal;
