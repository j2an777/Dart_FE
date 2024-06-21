import { GalleryItem } from '..';
import { useStore } from 'zustand';
import { NoneData } from '@/components';
import { useEffect, useLayoutEffect } from 'react';
import { pageStore } from '@/stores/page';
import { useGetGalleries } from '../../hooks';
import GalleryListFallback from '../fallback/GalleryListFallback';
import withSuspenseNErrorBoundary from '@/hooks/withSuspenseNErrorBoundary';

import * as S from './styles';

const GalleryList = () => {
  const { setPageInfo } = useStore(pageStore);
  const {
    data: { pageParams, pages },
  } = useGetGalleries();
  useEffect(() => {
    setPageInfo(pageParams);
  }, [pageParams, setPageInfo]);

  if (pages.length === 0) return <NoneData content="전시중인 작품이 없습니다" />;

  return (
    <S.Container>
      {pages.map((gallery) => (
        <GalleryItem key={gallery.galleryId} {...gallery} />
      ))}
    </S.Container>
  );
};

const withGalleryList = withSuspenseNErrorBoundary(GalleryList, {
  suspenseFallback: <GalleryListFallback />,
});

export default withGalleryList;
