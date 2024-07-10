import { GalleryItem } from '..';
import { useStore } from 'zustand';
import { CircleLoader, NoneData, PageButtons } from '@/components';
import { useEffect } from 'react';
import { pageStore } from '@/stores/page';
import { useGetGalleries } from '../../hooks';
import withSuspenseNErrorBoundary from '@/hooks/withSuspenseNErrorBoundary';
import useGetMediaQuerySize from '@/hooks/useGetMediaQuerySize';

import * as S from './styles';

const GalleryList = () => {
  const { setPageInfo } = useStore(pageStore);
  const {
    data: { pageParams, pages },
  } = useGetGalleries();
  const size = useGetMediaQuerySize(556);

  useEffect(() => {
    setPageInfo(pageParams);
  }, [pageParams, setPageInfo]);

  if (pages.length === 0) return <NoneData content="전시중인 작품이 없습니다" />;

  return (
    <S.Container size={size}>
      <S.GridBox>
        {pages.map((gallery) => (
          <GalleryItem key={gallery.galleryId} {...gallery} />
        ))}
      </S.GridBox>
      <PageButtons
        orientation={size === 'select' ? 'horizontal' : 'vertical'}
        numberSize="t3"
      />
    </S.Container>
  );
};

const withGalleryList = withSuspenseNErrorBoundary(GalleryList, {
  suspenseFallback: (
    <S.Container>
      <CircleLoader />
    </S.Container>
  ),
});

export default withGalleryList;
