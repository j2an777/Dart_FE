import useCustomNavigate from '@/hooks/useCustomNavigate';
import { ReviewGalleryInfo } from '..';

import * as S from './styles';

const ReviewInfo = () => {
  const navigate = useCustomNavigate();
  return (
    <S.Container>
      <S.CancelIcon value="cancel" size={15} onClick={() => navigate(-1)} />
      <S.Line />
      <S.InfoBox>
        <S.Title typography="t5">REVIEWS</S.Title>
        <ReviewGalleryInfo />
      </S.InfoBox>
      <S.Line />
    </S.Container>
  );
  k;
};

export default ReviewInfo;
