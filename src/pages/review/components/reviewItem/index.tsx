import { Review } from '@/types/review';
import parseDate from '@/utils/parseDate';
import { TruncateSentece } from '@/utils/truncateSentence';
import { NicknameNProfile, StarRate } from '@/components';

import * as S from './styles';

const ReviewItem = ({
  content,
  createAt,
  nickname,
  profileImage,
  score,
}: Omit<Review, 'reviewId'>) => {
  return (
    <S.Container>
      <NicknameNProfile
        nickname={nickname}
        profileImage={profileImage}
        profileSize={25}
        typography="t6"
        bold="regular"
        ellipsis={80}
      />
      <S.StarRateBox>
        <StarRate rate={score} />
      </S.StarRateBox>
      <S.ContentText typography="t6" bold="regular">
        {TruncateSentece(content, 60)}
      </S.ContentText>
      <S.DateText color="gray400" typography="t6" bold="regular">
        {parseDate(new Date(createAt))}
      </S.DateText>
    </S.Container>
  );
};

export default ReviewItem;
