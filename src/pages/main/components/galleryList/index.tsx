import { GalleryItem } from '..';
import { useGetGalleries } from '../../hooks';
import { pageStore } from '@/stores/page';
import { useLayoutEffect } from 'react';
import withSuspense from '@/hooks/withSuspense';

import * as S from './styles';

const GalleryList = () => {
  const { data } = useGetGalleries();
  const setPageInfo = pageStore((state) => state.setPageInfo);
  useLayoutEffect(() => {
    setPageInfo(data.pageParams);
  }, [data.pageParams, setPageInfo]);

  return (
    <S.Container>
      {data.pages.map((gallery) => (
        <GalleryItem key={gallery.galleryId} {...gallery} />
      ))}
    </S.Container>
  );
};

export default withSuspense(GalleryList, { fallback: <>loading</> });
