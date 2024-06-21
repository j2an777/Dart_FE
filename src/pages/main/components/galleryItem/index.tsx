import { Text } from '@/components';
import { Gallery } from '@/types/gallery';
import parseDate from '@/utils/parseDate';
import { galleryInfoStore } from '@/stores/modal';

import * as S from './styles';

const GalleryItem = ({ title, startDate, endDate, thumbnail, galleryId }: Gallery) => {
  const open = galleryInfoStore((state) => state.open);

  const today = new Date();
  const parsedEndDate = endDate ? new Date(endDate as Date) : null;
  const hasEnded = parsedEndDate ? parsedEndDate < today : false;

  return (
    <S.Container onClick={() => open(galleryId, hasEnded)}>
      <S.ThumbnailBox>
        <S.Thumbnail src={thumbnail} alt="thumbnail-image" />
        {hasEnded && <S.Overlay />}
      </S.ThumbnailBox>
      <Text color="gray500" typography="t7" bold="thin">
        {parseDate(startDate)} ~ {endDate && parseDate(endDate as Date)}
      </Text>
      <Text typography="t6" bold="regular">
        {title}
      </Text>
    </S.Container>
  );
};

export default GalleryItem;
