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
      <S.Skeleton width={220} height={220} />
      <S.Skeleton width={145} height={15} />
      <S.Skeleton width={42} height={19} />
    </S.SkeletonItemContainer>
  );
};
