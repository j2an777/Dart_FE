import { Text } from '@/components';
import { Gallery } from '@/types/gallery';
import parseDate from '@/utils/parseDate';
import { TruncateSentece } from '@/utils/truncateSentence';
import { useLocation } from 'react-router-dom';

import * as S from './styles';
import { galleryInfoStore } from '@/stores/modal';
import useCustomNavigate from '@/hooks/useCustomNavigate';

const GalleryItem = ({ title, startDate, endDate, thumbnail, galleryId, hashtags }: Gallery) => {
  const navigate = useCustomNavigate();
  const location = useLocation();
  const open = galleryInfoStore((state) => state.open);

  const today = new Date();
  const parsedEndDate = endDate ? new Date(endDate as Date) : null;
  const hasEnded = parsedEndDate ? parsedEndDate < today : false;

  const onHandleNavigate = () => {
    navigate(`/info/${galleryId}`, { state: { backgroundLocation: location } });
    open(galleryId, hasEnded);
  };

  // 해시태그 배열을 변환하여 문자열로 만듦
  const formattedHashtags = hashtags.map(tag => `#${tag}`).join(' ');

  return (
    <S.Container onClick={onHandleNavigate}>
      <S.Thumbnail src={thumbnail} alt="thumbnail-image" />
      <Text color="gray500" typography="t7" bold="thin">
        {parseDate(startDate)} ~ {endDate && parseDate(endDate as Date)}
      </Text>
      <Text typography="t6" bold="regular">
        {TruncateSentece(title, 15)}
      </Text>
      <S.ContentBox>
        <Text typography='t6' color='white' bold='semibold' className='description'>{formattedHashtags}</Text>
      </S.ContentBox>
      {hasEnded && <S.Overlay />}
    </S.Container>
  );
};

export default GalleryItem;
