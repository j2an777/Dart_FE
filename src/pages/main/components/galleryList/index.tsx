import { GalleryItem } from '..';
import { useGetGalleries } from '../../hooks';
import { pageStore } from '@/stores/page';
import { useLayoutEffect } from 'react';
import withSuspense from '@/hooks/withSuspense';

import * as S from './styles';
import { useStore } from 'zustand';

const GalleryList = () => {
  const { data } = useGetGalleries();
  const { setPageInfo, resetPageInfo } = useStore(pageStore);
  useLayoutEffect(() => {
    setPageInfo(data.pageParams);
    return () => resetPageInfo();
  }, [data.pageParams, resetPageInfo, setPageInfo]);

  return (
    <S.Container>
      {data.pages.map((gallery) => (
        <GalleryItem key={gallery.galleryId} {...gallery} />
      ))}
    </S.Container>
  );
};

export default withSuspense(GalleryList, { fallback: <>loading</> });
