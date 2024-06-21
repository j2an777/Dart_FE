import CouponPortal from '@/components/CouponPortal';

import * as S from './styles';
import { couponStore } from '@/stores/modal';

const DiscountBox = () => {
  const open = couponStore((state) => state.open);
  return (
    <S.Container>
      <S.Title typography="t5" bold="bold">
        할인 혜택
      </S.Title>
      <S.Box>
        <S.CouponBlock>현재 적용한 쿠폰이 없습니다.</S.CouponBlock>
        <S.Button onClick={open}>사용</S.Button>
      </S.Box>
      <CouponPortal />
    </S.Container>
  );
};

export default DiscountBox;
