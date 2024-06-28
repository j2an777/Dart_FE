import { Skeleton } from '@/components';

import * as S from './styles';

const CouponIssueFallback = () => {
  return (
    <S.CouponIssueFallbackContainer>
      <S.PriorityBox>
        <Skeleton width={130} height={30} />
        <Skeleton width={520} height={330} />
        <S.Line />
      </S.PriorityBox>
      <S.CouponBox>
        <Skeleton width={130} height={30} />
        <S.ListBox>
          <Skeleton width={300} height={350} />
          <Skeleton width={300} height={350} />
        </S.ListBox>
      </S.CouponBox>
    </S.CouponIssueFallbackContainer>
  );
};

export default CouponIssueFallback;
