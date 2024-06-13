import { GalleryItem } from '..';
import { useGetGalleries } from '../../hooks';
import { pageStore } from '@/stores/page';
import { useLayoutEffect } from 'react';
import withSuspense from '@/hooks/withSuspense';
import { NoneData } from '@/components';
import { useStore } from 'zustand';
import GalleryListFallback from '../fallback/GalleryListFallback';

import * as S from './styles';

const GalleryList = () => {
  const { data } = useGetGalleries();
  const { setPageInfo, resetPageInfo } = useStore(pageStore);
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
  fallback: <GalleryListFallback />,
});
export default SideEffectWithGalleryList;
