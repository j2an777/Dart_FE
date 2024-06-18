import { GalleryItem } from '..';
import { useGetGalleries } from '../../hooks';
import { pageStore } from '@/stores/page';
import { useLayoutEffect } from 'react';
import { NoneData } from '@/components';
import { useStore } from 'zustand';
import withSuspense from '@/hooks/withSuspense';
import GalleryListFallback from '../fallback/GalleryListFallback';

import * as S from './styles';

const GalleryList = () => {
  const {
    pageInfo: { pageIndex },
    setPageInfo,
  } = useStore(pageStore);
  const {
    data: { pageParams, pages },
  } = useGetGalleries(pageIndex);
  useLayoutEffect(() => {
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

const SideEffectWithGalleryList = withSuspense(GalleryList, {
  suspenseFallback: <GalleryListFallback />,
});
export default SideEffectWithGalleryList;
