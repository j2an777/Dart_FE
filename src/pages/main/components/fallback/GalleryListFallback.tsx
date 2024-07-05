import { PageButtons, Skeleton } from '@/components';
import useGetMediaQuerySize from '@/hooks/useGetMediaQuerySize';

import * as S from '../galleryList/styles';

const GalleryListFallback = () => {
  const array = Array.from({ length: 6 });
  const size = useGetMediaQuerySize(556);
  return (
    <S.Container size={size}>
      <S.GridBox>
        {array.map((_, index) => (
          <SkeletonItem key={index} />
        ))}
      </S.GridBox>
      <PageButtons
        orientation={size === 'select' ? 'horizontal' : 'vertical'}
        numberSize="t3"
      />
    </S.Container>
  );
};

export default GalleryListFallback;

import * as SS from './styles';

export const SkeletonItem = () => {
  // const size = useGetMediaQuerySize();
  return (
    <SS.Container>
      <SS.Thumbnail>
        <Skeleton full />
      </SS.Thumbnail>
      <Skeleton width={145} height={15} />
      <Skeleton width={42} height={19} />
    </SS.Container>
  );
};
