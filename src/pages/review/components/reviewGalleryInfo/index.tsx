import TestImage from '@/assets/images/rectangle.png';
import { NicknameNProfile, Text } from '@/components';
import parseDate from '@/utils/parseDate';
import { ReviewRate } from '..';

import * as S from './styles';

const startDate = new Date('2024-05-23T12:00:00Z');
const endDate = new Date('2024-05-31T12:00:00Z');

const ReviewGalleryInfo = () => {
  return (
    <S.Container>
      <img src={TestImage} alt="gallery-thumbnail" width={250} height={250} />
      <S.GalleryInfoBox>
        <S.InfoBlock>
          <Text typography="t5">전시 제목</Text>
          <NicknameNProfile
            typography="t6"
            bold="regular"
            ellipsis={150}
            nickname="ARTIST LEE"
          />
          <Text color="gray400" typography="t6" bold="regular">
            {parseDate(startDate)} ~ {parseDate(endDate as Date)}
          </Text>
        </S.InfoBlock>
        <ReviewRate rate={3.3} title="총 평점" />
      </S.GalleryInfoBox>
    </S.Container>
  );
};

export default ReviewGalleryInfo;
