import { Dimmed, Icon, Text } from '@/components';
import { CouponList } from '@/pages/event/components';
import useGetMyCoupons from '@/pages/event/hooks/useGetMyCoupons';
import { useFormContext } from 'react-hook-form';
import { PaymentRequest } from '@/types/payment';

import * as S from './styles';

const CouponModal = ({ close }: { close: () => void }) => {
  const { data } = useGetMyCoupons(true);
  const { setValue } = useFormContext<PaymentRequest>();
  const onClick = (couponId: number, isPriority: boolean) => {
    setValue('couponId', couponId);
    setValue('isPriority', isPriority);
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
