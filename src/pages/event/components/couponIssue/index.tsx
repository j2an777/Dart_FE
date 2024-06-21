import { Text } from '@/components';
import { CouponList, PriorityList } from '..';

import * as S from './styles';

const CouponIssue = () => {
  return (
    <S.Container>
      <S.PriorityBox>
        <Text typography="t4" bold="bold">
          실시간 이벤트
        </Text>
        <PriorityList />
        <S.Line />
      </S.PriorityBox>
      <S.CouponBox>
        <Text typography="t4" bold="bold">
          발급 가능한 쿠폰
        </Text>
        <CouponList />
      </S.CouponBox>
    </S.Container>
  );
};

export default CouponIssue;
