import { Skeleton } from '@/components';

import * as S from './styles';

const ReviewInfoFallback = () => {
  return (
    <S.ReviewInfoFallbackContainer>
      <Skeleton width={250} height={250} />
      <S.GalleryInfoBox>
        <S.InfoBlock>
          <Skeleton width={200} height={24} />
          <Skeleton width={200} height={19} />
          <Skeleton width={200} height={19} />
        </S.InfoBlock>
        <Skeleton width={200} height={69} />
      </S.GalleryInfoBox>
    </S.ReviewInfoFallbackContainer>
  );
};

export default ReviewInfoFallback;
