import CouponPortal from '@/components/CouponPortal';

import * as S from './styles';
import { couponStore } from '@/stores/modal';
import { useFormContext } from 'react-hook-form';

const DiscountBox = () => {
  const open = couponStore((state) => state.open);
  const { setValue, getValues } = useFormContext();
  const title = getValues('title') ?? '현재 적용한 쿠폰이 없습니다.';

  const couponCancel = () => {
    setValue('couponType', '');
    setValue('title', '');
  };

  return (
    <S.Container>
      <S.Title typography="t5" bold="bold">
        할인 혜택
      </S.Title>
      <S.Box>
        <S.CouponBlock hasTitle={!!title}>{title}</S.CouponBlock>
        <S.Button onClick={open} type="button">
          사용
        </S.Button>
        <S.Button onClick={couponCancel} type="button">
          취소
        </S.Button>
      </S.Box>
      <CouponPortal />
    </S.Container>
  );
};

export default DiscountBox;
