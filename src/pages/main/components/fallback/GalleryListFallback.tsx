import { Skeleton } from '@/components';

import * as S from './styles';

const GalleryListFallback = () => {
  const array = Array.from({ length: 6 });
  return (
    <S.GalleryListContainer>
      {array.map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </S.GalleryListContainer>
  );
};

export default GalleryListFallback;

export const SkeletonItem = () => {
  return (
    <S.SkeletonItemContainer>
      <Skeleton width={220} height={220} />
      <Skeleton width={145} height={15} />
      <Skeleton width={42} height={19} />
    </S.SkeletonItemContainer>
  );
};
