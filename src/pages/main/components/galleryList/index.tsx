import { GalleryItem } from '..';
import { useStore } from 'zustand';
import { NoneData, PageButtons } from '@/components';
import { useEffect } from 'react';
import { pageStore } from '@/stores/page';
import { useGetGalleries } from '../../hooks';
import GalleryListFallback from '../fallback/GalleryListFallback';
import withSuspenseNErrorBoundary from '@/hooks/withSuspenseNErrorBoundary';
import useGetMediaQuerySize from '@/hooks/useGetMediaQuerySize';

import * as S from './styles';

const GalleryList = () => {
  const { setPageInfo } = useStore(pageStore);
  const size = useGetMediaQuerySize(556);
  const {
    data: { pageParams, pages },
  } = useGetGalleries();
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
  suspenseFallback: <GalleryListFallback />,
});

export default withGalleryList;
