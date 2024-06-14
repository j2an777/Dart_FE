import { GalleryItem } from '..';
import { useGetGalleries } from '../../hooks';
import { pageStore } from '@/stores/page';
import { useLayoutEffect } from 'react';
import { NoneData } from '@/components';
import { useStore } from 'zustand';

import * as S from './styles';
import withSuspense from '@/hooks/withSuspense';
import GalleryListFallback from '../fallback/GalleryListFallback';

const GalleryList = () => {
  const {
    pageInfo: { pageIndex },
    setPageInfo,
    resetPageInfo,
  } = useStore(pageStore);
  const { data } = useGetGalleries(pageIndex);
  useLayoutEffect(() => {
    setPageInfo(data.pageParams);
    return () => resetPageInfo();
  }, [data.pageParams, resetPageInfo, setPageInfo]);

  if (data.pages.length === 0) return <NoneData children="게시글이 존재하지 않습니다" />;

  return (
    <S.Container>
      {data.pages.map((gallery) => (
        <GalleryItem key={gallery.galleryId} {...gallery} />
      ))}
    </S.Container>
  );
};

const SideEffectWithGalleryList = withSuspense(GalleryList, {
  suspenseFallback: <GalleryListFallback />,
});
export default SideEffectWithGalleryList;
