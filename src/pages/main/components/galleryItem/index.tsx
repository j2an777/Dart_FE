import { Text } from '@/components';
import { Gallery } from '@/types/gallery';
import parseDate from '@/utils/parseDate';

import * as S from './styles';
import { galleryInfoStore } from '@/stores/modal';

const GalleryItem = ({ title, startDate, endDate, thumbnail, galleryId }: Gallery) => {
  const open = galleryInfoStore((state) => state.open);
  return (
    <S.Container onClick={() => open(galleryId)}>
      <S.Thumbnail src={thumbnail} alt="thumbnail-image" />
      <Text color="gray500" typography="t7" bold="thin">
        {parseDate(startDate)} ~ {parseDate(endDate)}
      </Text>
      <Text typography="t6" bold="regular">
        {title}
      </Text>
    </S.Container>
  );
};

export default GalleryItem;
