import { Text } from '@/components';
import { PriorityCoupon, PriorityList } from '..';

import * as S from './styles';

const CouponIssue = () => {
  return (
    <S.Container>
      <Text typography="t4" bold="bold">
        실시간 이벤트
      </Text>
      <PriorityList />
    </S.Container>
  );
};

export default CouponIssue;
