import { Skeleton } from '@/components';

import * as S from './styles';

const ReviewListFallback = () => {
  return (
    <S.ReviewListFallbackContainer>
      <S.ReviewItemBox>
        <Skeleton width={250} height={250} />
      </S.ReviewItemBox>
    </S.ReviewListFallbackContainer>
  );
};

export default ReviewListFallback;
