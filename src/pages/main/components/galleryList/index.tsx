import { GalleryItem } from '..';
import { useGetGalleries } from '../../hooks';
import withSuspense from '@/hooks/withSuspense';

import * as S from './styles';

const GalleryList = () => {
  const { data } = useGetGalleries();
  return (
    <S.Container>
      {data.pages.map((gallery) => (
        <GalleryItem key={gallery.galleryId} {...gallery} />
      ))}
    </S.Container>
  );
};

export default withSuspense(GalleryList, { fallback: <>loading</> });
