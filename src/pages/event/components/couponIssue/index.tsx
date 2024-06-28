import { Text, withSuspenseNErrorBoundary } from '@/components';
import { CouponList, PriorityList } from '..';

import * as S from './styles';
import useGetCoupons from '../../hooks/useGetCoupons';
import CouponLIstFallback from '../fallback/CouponIssueFallback';

const CouponIssue = () => {
  const {
    data: { generalCoupon, priorityCoupon },
  } = useGetCoupons();
  return (
    <S.Container>
      <S.PriorityBox>
        <Text typography="t4" bold="bold">
          실시간 이벤트
        </Text>
        <PriorityList array={priorityCoupon} />
        <S.Line />
      </S.PriorityBox>
      <S.CouponBox>
        <Text typography="t4" bold="bold">
          발급 가능한 쿠폰
        </Text>
        <CouponList array={generalCoupon} />
      </S.CouponBox>
    </S.Container>
  );
};

const WithCouponIssue = withSuspenseNErrorBoundary(CouponIssue, {
  suspenseFallback: <CouponLIstFallback />,
});
// fallback 아직 구현을 못함...ㄷㄷ
export default WithCouponIssue;
