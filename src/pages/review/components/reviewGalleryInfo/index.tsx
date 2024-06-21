import { ReviewRate } from '..';
import parseDate from '@/utils/parseDate';
import { useParams } from 'react-router-dom';
import { NicknameNProfile, Text } from '@/components';
import useGetReviewInfo from '../../hooks/useGetReviewInfo';
import withSuspense from '@/hooks/withSuspense';

import * as S from './styles';

const ReviewGalleryInfo = () => {
  const { galleryId } = useParams();
  const {
    data: { endDate, nickname, profileImage, reviewAverage, startDate, thumbnail, title },
  } = useGetReviewInfo(galleryId as string);
  return (
    <S.Container>
      <img src={thumbnail} alt="gallery-thumbnail" width={250} height={250} />
      <S.GalleryInfoBox>
        <S.InfoBlock>
          <Text typography="t5">{title}</Text>
          <NicknameNProfile
            typography="t6"
            bold="regular"
            ellipsis={150}
            nickname={nickname}
            profileImage={profileImage}
          />
          <Text color="gray400" typography="t6" bold="regular">
            {parseDate(startDate)} ~ {parseDate(endDate as Date)}
          </Text>
        </S.InfoBlock>
        <ReviewRate rate={reviewAverage} title="총 평점" />
      </S.GalleryInfoBox>
    </S.Container>
  );
};

const SuspenseWithReviewGalleryInfo = withSuspense(ReviewGalleryInfo, {
  suspenseFallback: <>loading</>,
});

export default SuspenseWithReviewGalleryInfo;
