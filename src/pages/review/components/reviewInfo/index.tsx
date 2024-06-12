import { ReviewGalleryInfo } from '..';

import * as S from './styles';

const ReviewInfo = () => {
  return (
    <S.Container>
      <S.CancelIcon value="cancel" size={15} />
      <S.Line />
      <S.InfoBox>
        <S.Title typography="t5">REVIEWS</S.Title>
        <ReviewGalleryInfo />
      </S.InfoBox>
      <S.Line />
    </S.Container>
  );
};

export default ReviewInfo;
